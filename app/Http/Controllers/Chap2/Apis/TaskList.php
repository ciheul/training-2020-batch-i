<?php

namespace App\Http\Controllers\Chap2\Apis;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Chap2\Task;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
class TaskList extends Controller
{
    public function get(Request $request) {
        $title = $request->title;
        $status = $request->status;
        $body = $request->body;
        $limit = $request->limit;
        $from_date = $request->from_date;
        $to_date = $request->to_date;

        $data = DB::table('tasks')
            ->when($title, function ($query, $title) {
                return $query->where('title', 'like','%' . $title . '%');
            })
            ->when($body, function ($query, $body) {
                return $query->where('body', 'like','%' . $body . '%');
            })
            ->when($status, function ($query, $status) {
                return $query->where('status', 'like','%' . $status . '%');
            })
            ->when($from_date, function ($query, $from_date) {
                return $query->where( 'created_at', '>=' , $from_date.' 00:00:00' );
            })
             ->when($to_date, function ($query, $to_date) {
                return $query->where( 'created_at', '<=' , $to_date.' 24:59:59' );
            })
            ->paginate($limit);

        return response()->json($data, 200);
    }
}
