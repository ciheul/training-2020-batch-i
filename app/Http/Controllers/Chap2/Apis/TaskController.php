<?php

namespace App\Http\Controllers\Chap2\Apis;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Chap2\Task;

class TaskController extends Controller
{
    public function post(Request $request)
    {
        if($request->id != null ){
            $task = Task::where('id',  $request->id,)->update([

                'title' => $request->title,
                'body' => $request->body,
                'status' => $request->status
            ]);
        return response()->json(['success'=> 'Record has been successfully updated']);
        }else{
            $task = new Task;
            $task->title = $request->title;
            $task->body = $request->body;
            $task->status = $request->status;
            $task->save();
            return response()->json(['success'=> 'Record has been successfully created']);
        }


    }

    public function get($id)
    {

        $task = Task::where('id', $id)->first();

        $data = [
            'task' => $task
        ];

        return $data;

    }


    public function put(Request $reuqest)
    {
        // $task = Task;
        // $task->title = $request->title;
        // $task->body = $request->body;
        // $task = $request->status;
        // $task = Task::where('id',  $request->id,)->update([

        // 'title' => $request->title,
        // 'body' => $request->body,
        // 'status' => $request->status
        // ]);
    //     task = Task::where('id', $id);
    //     $task->title = $request->title;
    //     $task->body = $request->body;
    //     $task->status = $request->status;
    //     $task->save();

        return response()->json(['success'=> 'Data berhasil diupdate']);

    }

    public function delete($id)
    {
         $task = Task::find($id);
         $task->delete($id);
         return response()->json(['success'=> 'Data berhasil diupdate']);
    }

}
