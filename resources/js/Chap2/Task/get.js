export default class TaskGet {

  constructor() {
    this.getAjax();

  }

  getAjax(){

   $.ajax({

            url:'/chap2/task/apis',
            type: "GET",
            dataType: "JSON",

            success: function(response){
              var max_length = Object.keys(response.data).length
              // var a = JSON.parse(response)
              var i;
              for(i=0; i<max_length; i++){
                console.log(i, response.data[i].id, response.data[i].title, response.data[i].body, response.data[i].status);
                let title = response.data[i].title;
                $('.list-data-task').append(
                  '<div class="content">' +
                    '<div class="ui two column stackable grid">' +
                      '<div class="ten wide column">'+
                        '<a href="/chap2/task/id/detail" class="header"> '+ title + '</a>' +
                      '</div>'+
                      '<div class="six wide column">'+
                        '<div class="ui small basic icon right floated buttons">'+
                          '<button class="ui button btn-delete" data-id="/id"><i class="trash alternate icon"></i></button>' +
                            '<a href="/chap2/task/id/detail" class="ui button"><i class="eye icon"></i> </a>' +
                            '<a href="/chap2/task/id/edit" class="ui button"><i class="edit icon"></i></a>' +
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>');
              }
            },
            error: function(){
                console.log('error');
            }
        });
  }


}

