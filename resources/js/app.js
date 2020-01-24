
require('./bootstrap');

import TaskCreate from './Chap2/Task/add';
import TaskDelete from './Chap2/Task/delete';
import TaskView from './Chap2/Task/view';
import TaskUpdate from './Chap2/Task/update';
import TaskAlert from './Chap2/Task/alert';

let menu = window.location.pathname.split("/").pop();

switch (menu) {
case 'create':
    new TaskCreate();
    break;
case 'list':
    new TaskDelete();
    new TaskAlert();
    break;
case 'detail':
    new TaskView();
    break;
case 'edit':
    new TaskView();
    new TaskUpdate();
    break;
}



