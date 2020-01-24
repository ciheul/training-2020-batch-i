<?php

namespace App\Http\Controllers\Chapter1\Views;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Task;

class TaskShow extends Controller
{
    public function get()
    {
    	//tampilan listing DB
        
        $task = Task::get();
        return view('task.task2',compact('task'));
    }
    public function post()
    {
     
    }   
}
