export default class DataTableUpdate {

  constructor() {

    this.putUpdate();
  }

  putUpdate(){
  $('.btn-submit-edit').click(function(e){
      e.preventDefault();

      let id = $("input[name=id]").val();
      let title = $("input[name=title]").val();
      let body = $(".data-body").val();
      let status = $("#status").val();
      // console.log(id);
      $.ajax({
        type:'PUT',
        url:'/api/chap2/task/apis/'+ id + "/update",
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        data: {id:id, title:title, body:body, status:status,  },

        success:function(response){
          window.location.href = "/chap2/task?updated";
        },
      });
    });
  }
}

