<?php

namespace App\Http\Controllers\Chapter1\Views;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Task;

class TaskView extends Controller
{
	//view db disable edit
    public function get($id)
    {
    	$task = Task::where('id', $id)->first();
    
        return view('task.view', compact('task'));
    }

    

}
