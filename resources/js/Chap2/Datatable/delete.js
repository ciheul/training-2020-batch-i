export default class DataTableDelete {

  constructor() {
    this.btnDelete();

  }

  btnDelete(){



      let menu = window.location.pathname.split("/").pop();

      $(document).on('click','.btn-delete', function(e){
        let id = $(this).data('id');
        console.log(id);
        $.ajax({
          type:'DELETE',
          url:'/api/chap2/task/apis/'+ id + "/delete",
          headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
          data: {id:id },

          success: function(response){
             window.location.href = "/chap2/task?deleted";
          },

          error: function(){
            alert('data tidak ditermukan');
          }
        });
      });

  }
}

