export default class TaskUpdate {
  constructor(){
    this.btnAlertExit();
    this.bindButton();

  }

  bindButton(){
    console.log('ini button update');

      $('.message').hide();
      $('.btn-submit-edit').click(function(e){
      e.preventDefault();

      let id = $("input[name=id]").val();
      let title = $("input[name=title]").val();
      let body = $(".data-body").val();
      let status = $("#status").val();
      // console.log(id);
      $.ajax({
        type:'POST',
        url:'/chap2/task/apis',
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        data: {id:id ,title:title, body:body, status:status},

        success:function(data){
            // $('.message').show()
            // $('.message').append(data.success);
            // $(".close.icon").click(function(){
              window.location.href = "/chap2/task/list?updated";
            // });
        },

      });

    });
  }

  btnAlertExit(){
    $(".close.icon").click(function(){
      $(this).parent().hide();
    });
  }
}
