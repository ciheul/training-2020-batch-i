/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */


require('./bootstrap');
//import '/public/bower_components/semantic';
import CreateData from './Chapter2/create';
import DeleteData from './Chapter2/delete';
import ShowDetail from './Chapter2/detail';
import Datalist from './Chapter2/view';
import EditData from './Chapter2/edit';


let menu = window.location.pathname.split("/").pop();
let filter =  window.location.href.split('?');

if(filter[1] == "filter")
{
}
switch (menu) {

  case 'create':
    new CreateData();
    break;
  case '':
    new Datalist();
    new DeleteData();
    break;
  case 'edit':
    new ShowDetail();
    new EditData();
    break;
}
