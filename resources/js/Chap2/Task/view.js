
// let id = $('#task_id').val();
// // console.log (id);

//  $.ajax({
//       url: "/chap2/task/apis" + '/' + id,
//       type: "GET",
//       dataType: "JSON",

//       success: function(response){
//         // console.log(response);

//          $('.data-title').text(response.task.title);
//          $('.data-title').val(response.task.title);

//          $('.data-body').text(response.task.body);
//          $('.data-status').text(response.task.status);
//          $('#status').val(response.task.status);
//       },

//       error: function(){
//         alert('data tidak ditermukan');
//       }
  // });


export default class TaskView {
  constructor()  {
    console.log('menu');
    this.getDataTask();
  }

  getDataTask(){
    let id = $('#task_id').val();
    let menu = window.location.pathname.split("/").pop();
     console.log('ini detail 2');
    $.ajax({
      url: "/chap2/task/apis" + '/' + id ,
      type: "GET",
      dataType: "JSON",
      success: function(response){
         $('.data-title').text(response.task.title);
         $('.data-title').val(response.task.title);
         $('.data-body').text(response.task.body);
         $('.data-status').text(response.task.status);
         $('#status').val(response.task.status);
      },
      error: function(){
        alert('data tidak ditermukan');
      }
    });
  }
}












