export default class DataTableGet {

  constructor() {
    this.getDataList();
    this.rangeDate();
  }

  getDataList(){
    $(function (e) {
      //variable
      let title =  $('#title').val();
      let status = $('#status').val();
      let body = $('#body').val();
      let limit = $('#sortByRow').val();
      let page;
      let to_date ;
      let from_date ;
      let params;

      // let first_page;
      let path;
      let current_page;
      let last_page_url;
      let prev_page_url;
      let paramsList;
      // let total;

      function extraparams(title, status, body, limit, from_date, to_date){
        var currentUrl = window.location.href;
          if (currentUrl.indexOf('?') < 0) {
            return {};
          }
        currentUrl = currentUrl.replace('#', '');
        paramsList = currentUrl.split('?')[1].split('&');

        //cek parameter
        // console.log(paramsList);
        var page = paramsList[0].split('=')[1];


        if(title == undefined){
          var title = paramsList[1].split('=')[1];
        }
        var params = {};
      }

      function inputData(){



        // input title untuk filter
        $(document).on('keyup','#title',function(e){
          if ($('#title').is(":focus") && event.key == "Enter"){
            title = $('#title').val();
            $('#data-table-task').DataTable().destroy();
            show_datatable(title, status, body, limit, from_date, to_date);
            extraparams(title, status, body, limit, from_date, to_date);
          }
        });

        // input title untuk filter
        $(document).on('keyup','#body',function(e){
          if ($('#body').is(":focus") && event.key == "Enter"){
            body = $('#body').val();
            $('#data-table-task').DataTable().destroy();
            show_datatable(title, status, body, limit, from_date, to_date);
            extraparams(title, status, body, limit, from_date, to_date);
          }
        });

        //input status untuk filter
        $(document).on('change','#status', function(e){
          status = $('#status').val();
          $('#data-table-task').DataTable().destroy();
          show_datatable(title, status, body, limit, from_date, to_date);
          extraparams(title, status, body, limit, from_date, to_date);
        })

        //filter limit
        $(document).on('change','#sortByRow', function(e){
          limit = $('#sortByRow').val();
          $('#data-table-task').DataTable().destroy();
          show_datatable(title, status, body, limit, from_date, to_date);
          extraparams(title, status, body, limit, from_date, to_date);
        })

        //filter  data tanggal
        $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
          $(this).val(picker.startDate.format('YYYY-MM-DD') + ' s/d ' + picker.endDate.format('YYYY-MM-DD'));
          from_date = picker.startDate.format('YYYY-MM-DD');
          to_date = picker.endDate.format('YYYY-MM-DD');
          $('#data-table-task').DataTable().destroy();
          show_datatable(title, status, body, limit, from_date, to_date);
          extraparams(title, status, body, limit, from_date, to_date);
        });

        //filter data tanggal clear
        $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
          $(this).val('');
          from_date = '';
          to_date = '';
          $('#data-table-task').DataTable().destroy();
          show_datatable(title, status, body, limit, from_date, to_date);
        });

        // btn prev paginate
        $(document).on('click',".paginate_button .previous",function(e){
          // console.log('a')
        });
      }

        show_datatable(title, status, body, limit, from_date, to_date);
        inputData();
        extraparams();

      //fungsi tampil data
      function show_datatable( title ='', status='', body='', limit='50', from_date='', to_date=''){
        $.ajax({
          url: "/api/chap2/task/apis" ,
          type: "GET",
          dataType: "JSON",
          data: { title: title, status: status, body:body, limit:limit, from_date:from_date, to_date:to_date},
          success: function(data){
            params = this.url;
            let path =  params.split('?');

            // cek data page
            current_page = data.current_page;
            last_page_url = data.last_page_url;
            prev_page_url = data.prev_page_url;

            //push url
            window.history.pushState({"html":""},"","/chap2/task?"+ path[1]);
            // console.log(path);
          },

          error: function(){
            alert('data tidak ditermukan');
          }
        });

        $('#data-table-task').DataTable({
          "ajax":{
            url: "/api/chap2/task/apis/",
            data: {page: 1, title: title, status: status, body:body, limit:limit, from_date:from_date, to_date:to_date},
            complete : function (params){

            },
          },
          pageLength: 50,
          scrollX: false,
          scrollCollapse: false,
          paging: true,
          searching: false,
          orderable: false,
          bSort: false,
          info: false,
          lengthChange: false,
          retrieve: true,
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
          ]
        });
      }
    });
  }

  rangeDate(){
    $(function() {
      $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
          cancelLabel: 'Clear'
        }
      });
    });
  }


}
