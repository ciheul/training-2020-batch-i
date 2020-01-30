export default class DatatableNotif {
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
      $('.deleted').show()
    }

    if(params_alert[1] == 'updated') {
      $('.updated').show()
    }

    if(params_alert[1] == 'created') {
      $('.created').show()
    }

  }
}

