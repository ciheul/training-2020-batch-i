
export default class ShowDetail
{

    constructor()
    {
    this.getDetail();
    }

  getDetail(){
    $.ajaxSetup(
      {
        headers:
        {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      });

      var id = $('#id').val();
      $.ajax({
      url:'/api/Chapter2/apis/' + id,
      type: "GET",
      dataType: "JSON",

        success: function(response)
        {
          $('#status').val(response.data.status);
          $('#body').val(response.data.body);
          $('#title').val(response.data.title);
        },

        error: function()
        {
          alert('error');
        }
      });
  }
}

