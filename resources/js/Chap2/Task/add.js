export default class TaskCreate {

  constructor() {
    this.bindButton();
  }

  bindButton(){
    $(".btn-submit-create").click(function(e){
      e.preventDefault();
      let title = $("input[name=title]").val();
      let body = $("#body").val();
      let status = $("#status").val();
      $.ajax({
        type:'POST',
        url:'/chap2/task/apis',
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        data: {title:title, body:body, status:status},
        success:function(data){

          // alert(data.success);
          window.location.href = "/chap2/task/list?created";
        },

      });

    });
  }
}


// $(".btn-submit-edit").on('submit', function(e){
//       let id = $('#task_id').val();

//        e.preventDefault();

//       let title = $("input[name=title]").val();
//       let body = $("#body").val();
//       let status = $("#status").val();

//       console.log(id, title, body, status);

//         $.ajax({


//           type:'POST',

//           url:'/chap2/task/apis/update/' + id,

//           headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},

//           data: {'title':title, 'body':body, 'status':status },

//          success:function(data){

//             alert(data.success);

//             window.location.href = "list";

//           },

//          error:function(data){

//             alert('ngaco');

//           }

//       });
// });







