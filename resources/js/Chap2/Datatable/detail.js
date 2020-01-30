export default class DataTableDetail {

  constructor() {
    this.getDetail();

  }

  getDetail(){
    $(document).ready( function (e) {

      $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      });

      let id = $('#task_id').val();
      let menu = window.location.pathname.split("/").pop();

      $.ajax({
        url: "/api/chap2/task/apis" + '/' + id ,
        type: "GET",
        dataType: "JSON",

        success: function(response){
          $('.data-title').text(response.data.title);
          $('.data-title').val(response.data.title);
          $('.data-body').text(response.data.body);
          // $('.data-status').text(response.data.status);
          $('#status').val(response.data.status);
        },

        error: function(){
          alert('data tidak ditermukan');
        }
      });
    });
  }
}

