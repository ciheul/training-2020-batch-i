export default class TaskDelete {

  constructor() {
    this.bindButton();

  }

  bindButton(){

    $(".btn-delete").click(function(e){
        e.preventDefault();
        let id = $(this).data("id");
        console.log(id);
        $.ajax({
            type:'DELETE',
            url:'/chap2/task/apis/' + id,
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data: {id:id},
            success: function(data){

              window.location.href = "/chap2/task/list?deleted";

            },
            error: function(){
                console.log('error');
            }
        });
    });
  }


}

