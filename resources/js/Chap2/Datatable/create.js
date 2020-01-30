export default class DataTableCreate {

  constructor() {
    this.bindButton();
  }

  bindButton(){
    $(".btn-submit-create").click(function(e){
      e.preventDefault();
      let title = $("input[name=title]").val();
      let body = $("#body").val();
      let status = $("#status").val();
      console.log('ini create');
      $.ajax({
        type:'POST',
        url:'/api/chap2/task/apis',
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        data: {title:title, body:body, status:status},
        success:function(data){

           // alert(data.success);
          window.location.href = "/chap2/task?created";
        },

      });

    });
  }
}
