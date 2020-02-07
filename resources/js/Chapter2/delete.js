
export default class DeleteData
{
	constructor()
  {
		this.deleteData();
  }

  deleteData(){
	   $.ajaxSetup({
          headers:
          {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
      });

      $(document).on('click','#delete',function()
      {
        var dataList = $('#dataListTable').DataTable();
        var data = dataList.row( $(this).parents('tr') ).data();
        var id = data.id;
        console.log(id)
        $.ajax({
    		  url: '/api/Chapter2/'+id+'/edit/delete',
    		  type: 'delete',

    		  success: function(result)
          {
    		  alert('Delete Success');
    		  },

          error: function()
          {
            alert('Error');
          }
    		});
        window.location.href = "/Chapter2/";
      });

      $(document).on('click','#link',function(response)
      {
        var dataList = $('#dataListTable').DataTable();
        var data = dataList.row( $(this).parents('tr') ).data();
        console.log('data',data);
        var id = data.id;
        window.location.href='/Chapter2/'+id+'/edit'
      });


  }
}

