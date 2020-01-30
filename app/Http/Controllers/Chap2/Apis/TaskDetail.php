<?php

namespace App\Http\Controllers\Chap2\Apis;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Chap2\Task;

class TaskDetail extends Controller
{
    public function get($id) {
        $task = Task::where('id', $id)->first();
        return response()->json([ 'data' => $task ], 200);
    }

    public function put(Request $request, $id) {
        $data = Task::where('id', $id)->update([
            'id' => $request->id,
            'title' => $request->title,
            'body' => $request->body,
            'status' => $request->status
        ]);
        return response()->json([ 'success'=> $data ]);
    }

    public function delete($id) {
        $data = Task::where('id', $id)->delete();
        return response()->json(['success'=> $data ]);
    }
}
