<?php

namespace App\Http\Controllers\Chap1\Views;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Chap1\Task;
class TaskListController extends Controller
{
     public function index()
    {
        $tasks =  Task::get();
        return view('Chap1.Task.list', compact('tasks'));
    }
}
