<?php

namespace App\Http\Controllers\Chapter1\Views;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Task;

class TaskUpdate extends Controller
{


   
    	public function get($id)
    {
    	$task = Task::where('id', $id)->first();
    
        return view('task.update', compact('task'));
    }

    

    public function put(Request $request, $id)
    {
        
        $task = Task::where('id', $id)->update(
        	[
         	'title' => $request->title,
            'body' => $request->body,
            
        	]
        );

        if($task){
        return  redirect('Chapter1/task/show');
       	}
        
    }
    public function delete(Request $request, $id)
    {
      $task = Task::where('id', $id)->delete();
      
      if($task){
      	return redirect('Chapter1/task/show');
      }
    }
}
