export default class TaskAlert {
  constructor() {
    this.defaultAlert();
    this.exitAlert();
    this.setAlert();
  }

  defaultAlert(){

    $('.message').hide()


  }

  exitAlert(){
    $(".close.icon").click(function(){
      $(this).parent().hide();
    });
  }

  setAlert(){

    let params_alert =  window.location.href.split('?');

    if(params_alert[1] == 'deleted') {
      // console.log(params_alert[1])
      $('.deleted').show()
      }
      else if(params_alert[1] == 'updated') {
      $('.updated').show()

      }
      else if(params_alert[1] == 'created') {
      $('.created').show()

    }
  }
}
