export default class DataTableGet {

  constructor() {
    this.getDataList();
  
  }

  getDataList(){
    let title = '';
    let status = '';
    let body = '';
    let limit = 50;
    let page = 1;
    let from_date = '';
    let to_date = '';
    let params;
    let data_json;
    let paramsList;
    let no_page = 1;
    let last_page;
    let current_page;

    function extraparams(){
      var currentUrl = window.location.href;
      // console.log('extra');
      if (currentUrl.indexOf('?') < 0) {
        return {};
      }
      currentUrl = currentUrl.replace('#', '');
      paramsList = currentUrl.split('?')[1].split('&');
      
      if(paramsList == 'deleted' || paramsList == 'updated' || paramsList == 'created'  ){
        return {};
      }
    
    
      if(page == undefined ){
        page =  paramsList[0].split('=')[1];
        //console.log('page',page);
      }
      
      if($('#title').val() == "" ){
        title = paramsList[1].split('=')[1];
        //console.log('title',title);
      }
      if($('#body').val() == "" ){
        body = paramsList[3].split('=')[1];
        //console.log('body', body);
      }
      if($('#status').val() == "" ){
        status = paramsList[2].split('=')[1];
        //console.log('status',status);
      }
      if(from_date == undefined ){
        from_date = paramsList[5].split('=')[1];
        //console.log('from',from_date);
      }

      if(to_date == undefined ){
        to_date = paramsList[6].split('=')[1];
        //console.log('to',to_date);
      }

      if(limit == undefined ){

        limit = paramsList[4].split('=')[1];
        // console.log('limit', 12);
      }else{
        // console.log('limit', 12);
      }
      // console.log('to',to_date);
    }
    //mulai 
    $(document).ready(function(){

      extraparams(page ,title, status, body, limit, from_date, to_date);
      rangeDate();
      getajax();    
    });      
   
    $(document).on('keyup','#title',function(e){
      if ($('#title').is(":focus") && event.key == "Enter"){
        clear_paginate();
        title = $('#title').val();
        getajax(title); 
      }
    });

    $(document).on('keyup','#body',function(e){
      if ($('#body').is(":focus") && event.key == "Enter"){
        clear_paginate();
        body = $('#body').val();
        getajax(body); 
      }
    });

    $(document).on('change','#status', function(e){
      clear_paginate();
      status = $('#status').val();
      getajax(status);
    })

    $(document).on('change','#sortByRow', function(e){
      clear_paginate();
      limit = $('#sortByRow').val();
      getajax(limit)
    });
    
    $(document).on('click','#btn_next', function(e){
      no_page++;
      $('#no_page').text(no_page);
      getajax(page=no_page);
    });
    
    $(document).on('click','#btn_prev', function(e){
      no_page--;
      $('#no_page').text(no_page);
      getajax(page=no_page)
    });
      
    function clear_paginate(){
      page = 1;
      $('#no_page').text(1);
    }
   
    function rangeDate(){
      $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
          cancelLabel: 'Clear'
        }
      });
    
      $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('YYYY-MM-DD') + ' ~ ' + picker.endDate.format('YYYY-MM-DD'));
        from_date = picker.startDate.format('YYYY-MM-DD');
        to_date = picker.endDate.format('YYYY-MM-DD');

        clear_paginate();
        getajax(from_date, to_date);
      });
    
      $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
      });
    }
    function getajax(){
      $.ajax({
        url: "/api/chap2/task/apis",
        data: {page: page, title: title, status: status, body: body, limit: limit, from_date: from_date, to_date: to_date},
        type: "GET",
        dataType: "json",
        success: function(json){
          data_json = json.data;
          last_page = json.data.last_page;
          current_page = json.data.current_page;
          console.log(data_json);

          document.getElementById("btn_next").disabled = true;
          if(data_json.next_page_url != null){
            document.getElementById("btn_next").disabled = false;
          }

          document.getElementById("btn_prev").disabled = true;
          if(data_json.prev_page_url != null){
            document.getElementById("btn_prev").disabled = false;
          }
          
          //cek parameter url
          var url = this.url;
          var path_url =  url.split('?');
          var path = path_url[1].split('&');
          var path_data = [];
          for(var i=0; i<7; i++){
            path_data[i] = path[i].split('=');
          }

          var page_data = path_data[0][1];
          var page_title = path_data[1][1];
          var page_body = path_data[2][1];
          var page_status = path_data[3][1];
          var page_from = path_data[5][1];
          var page_to = path_data[6][1];
          var page_limit = path_data[4][1];
          console.log(page_limit);

          if( (page_data != 1  && page_limit != 50) || page_title != "" || page_body != "" || page_status != "" || page_from != "" ){
            window.history.pushState("","","/chap2/task?"+ path_url[1]);
          }
          $('#data-table-task').DataTable().destroy();
          showtab(data_json);
        },
      });

    }

    function showtab(data_json){
      $('#data-table-task').DataTable({
        pageLength: 50,
        scrollX: false,
        scrollCollapse: false,
        paging: false,
        searching: false,
        orderable: false,
        bSort: false,
        info: false,
        lengthChange: false,
        retrieve: true,
        data : data_json.data,
        columns : [ 
          { data: "id" },
          { data: "title" },
          { data: "body" },
          { data: "created_at" },
          { data: "status" },
          { data: "id",
            "className": "dt-center",
            "render": function (data) {
              return (
                '<a href="/chap2/task/'+ data+'/detail">' +
                  '<div class="ui vertical animated blue button view-task" >' +
                    '<div class="hidden content">View</div>' +
                    '<div class="visible content">' +
                    '<i class="eye icon"></i></div>' +
                  '</div>' +
                '</a>' +

                '<a href="/chap2/task/'+ data+'/edit">' +
                  '<div class="ui vertical animated yellow button">' +
                    '<div class="hidden content">Edit</div>' +
                    '<div class="visible content">' +
                      '<i class="edit icon"></i>' +
                    '</div>' +
                  '</div>' +
                '</a>' +

                '<a class="btn-delete" data-id="'+ data +'">' +
                  '<div class="ui vertical animated orange button" >' +
                    '<div class="hidden content">Delete</div>' +
                    '<div class="visible content">' +
                      '<i class="trash icon"></i>' +
                    '</div>' +
                  '</div>' +
                '</a>'
              )
            }
          },
        ],
      });
    }
  }
}
