<?php

namespace App\Http\Controllers\Chap2\Views;

use App\Http\Controllers\Controller;
use App\Model\Chap2\Task;
use Illuminate\Http\Request;

class TaskListController extends Controller
{
    public function get() {
        $tasks = Task::get();
        return view('Chap2.Task.index',compact('tasks'));
    }

    public function post() {
        return view('Chap2.Datatable.create');
    }
}
