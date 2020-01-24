<?php

namespace App\Http\Controllers\Chapter1\Views;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Task;

class TaskCreate extends Controller
{
//tampilan menu create  
  public function get()
  {
    $task = Task::get();
    return view('task.task1', compact('task'));
  }


  public function post(Request $request)
//store to DB
  {

    $post = new Task;
    $post->title = $request->input('title');
    $post->body = $request->input('body');
    $post->save();
    return redirect("Chapter1/task");
  }

}
