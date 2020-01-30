export default class GetCoba {

  constructor() {

    this.renderView();
    this.extractParams();
    this.filterTitle();
  }

  extractParams(){
    console.log('extractParams');
      var that = this;
      var currentUrl = window.location.href;

        if (currentUrl.indexOf('?') < 0) {
          return {};
        }

      currentUrl = currentUrl.replace('#', '');

      var paramsList = currentUrl.split('?')[1].split('&');

      var params = {};

      console.log(currentUrl, paramsList);

      // paramsList.forEach(function(i) {
      // //   var key = i.split('=')[0];

      // //   // decodeURI convert %20 to space
      // //   var value = decodeURI(i.split('=')[1]);

      //    params[key] = value;
      //  }
      if (params.hasOwnProperty('page')) {
        params['page'] = parseInt(params['page']);
      }
      console.log(params.hasOwnProperty('page'));
      if (!params.hasOwnProperty('limit')) {
        params['limit'] = 50;
      }

      return params;
  };

  filterTitle(){
    $('#title').keyup(function(event){
      var that = this;
      if ($('#title').is(":focus") && event.key == "Enter"){
        var title = $('#title').val();
        // var params = that.props.utility.extractParams();

        console.log(title);
      }
    });
  }


  renderView (){

  }
}


