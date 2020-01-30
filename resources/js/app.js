
require('./bootstrap');
import DataTableCreate from './Chap2/Datatable/create';
import DataTableDetail from './Chap2/Datatable/detail';
import DataTableDelete from './Chap2/Datatable/delete';
import DataTableGet from './Chap2/Datatable/get';
import DataTableNotif from './Chap2/Datatable/notif';
import DataTableUpdate from './Chap2/Datatable/update';
import TaskAlert from './Chap2/Task/alert';
import TaskCreate from './Chap2/Task/add';
import TaskDelete from './Chap2/Task/delete';
import TaskUpdate from './Chap2/Task/update';
import TaskView from './Chap2/Task/view';

let menu = window.location.pathname.split("/").pop();

switch (menu) {
case 'create':
  new DataTableCreate();
  break;
case 'list':
  new TaskDelete();
  new TaskAlert();
  new TaskGet();
  break;
case 'edit':
  new DataTableDetail();
  new DataTableUpdate();
  break;
case 'task':
  new DataTableGet();
  new DataTableNotif();
  new DataTableDelete();
  break
case 'detail':
  new DataTableDetail();
  break;

}




