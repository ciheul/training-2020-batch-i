
export default class CreateData
{
  constructor()
      {
       this.postCreate();
      }

  postCreate(){
    $.ajaxSetup({
        headers:
        {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $(document).on('click','#create',function()
    {
      var title = $("#title").val();
      var body = $("#body").val();
      var status = $("#status").val();
      var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
      $.ajax(
        {
          url:'/api/Chapter2/store',
          type:'post',
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
  }
}
