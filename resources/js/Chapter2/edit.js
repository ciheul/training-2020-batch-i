
    export default class EditData
    {
    constructor()
    {
      this.putEdit();
    }

    putEdit(){
      $(document).ready(function (e)
      {
        $.ajaxSetup(
        {
          headers:
          {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
        });

        $("#edit").click(function()
        {
          console.log('cekcek')
          var id = $('#id').val();
          var title = $("#title").val();
          var body = $("#body").val();
          var status = $("#status").val();
          var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');

          $.ajax(
          {
            url:'/api/Chapter2/'+id+'/edit/update',
            type:'put',
            data:{_token: CSRF_TOKEN,title:title,body: body,status: status},

            success:function(data)
            {
              alert('Success');
            },

            error: function()
            {
              alert('Error');
            }

          });
          window.location.href = "/Chapter2/";
        });
      });
    }
  }

