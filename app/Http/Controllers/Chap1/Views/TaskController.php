<?php

namespace App\Http\Controllers\Chap1\Views;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Model\Chap1\Task;
class TaskController extends Controller
{
    public function __construc()
    {

    }

     public function create()
    {
        return view('Chap1.Task.create');
    }

    public function post(Request $request)
    {
        // dd($request->input('title'));
        $post = new Task;
        $post-> title = $request->input('title');
        $post-> body = $request->input('body');
        $post-> save();

        if($post){
            return redirect('chap1/task/list');
        }
    }

    public function get($id)
    {
        $task =  Task::findOrFail($id);
        return view('Chap1.Task.get', compact('task'));
    }

    public function edit($id)
    {
        $task = Task::where('id', $id)->first();
        return view('Chap1.Task.put', compact('task'));
    }

    public function put(Request $request, $id)
    {
        $task = Task::where('id', $id)->update(
            [
                'title'     => $request->title,
                'body'      => $request->body,
            ]
        );

        if($task){
            return  redirect('chap1/task/list');
        }
    }

    public function delete($id)
    {
        $task = Task::where('id', $id)->delete();

        if($task){
            return  redirect('chap1/task/list');
        }
    }
}
