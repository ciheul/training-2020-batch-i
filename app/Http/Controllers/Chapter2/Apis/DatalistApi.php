<?php

namespace App\Http\Controllers\Chapter2\Apis;

use App\Http\Controllers\Controller;
use App\Models\chapter2;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DatalistApi extends Controller
{
	public function get(Request $req)
	{
		$id = $req->input('id');
        $title = $req->input('title');
        $body = $req->input('body');
        $status = $req->input('status');
        $page = $req->input('page');
        $limit =  $req->input('limit');
        $ordering = $req->input('ordering');
        $minCreatedDate = $req->input('mincreated_at');
        $maxCreatedDate = $req->input('maxcreated_at');
        $minUpdatedDate = $req->input('minupdated_at');
        $maxUpdatedDate = $req->input('maxupdated_at');
        $result = DB::table('chapter2s')

        ->when($id, function ($query, $id)
        {
            return $query->where('id', 'like','%' . $id . '%');
        })

        ->when($title, function ($query, $title)
        {
            return $query->where('title', 'like','%' . $title . '%');
        })

        ->when($body, function ($query, $body)
        {
            return $query->where('body', 'like','%' . $body. '%');
        })

        ->when($status, function ($query, $status)
        {
            return $query->where('status', $status);
        })

        ->when($minCreatedDate, function ($query, $minCreatedDate)
        {
            return $query->where('created_at', '>=', $minCreatedDate.' 00:00:00' );
        })

        ->when($maxCreatedDate, function ($query, $maxCreatedDate)
        {
            return $query->where('created_at', '<=', $maxCreatedDate.'23:59:59');
        })

        ->when($minUpdatedDate, function ($query, $minUpdatedDate)
        {
            return $query->where('updated_at', '>=', $minUpdatedDate.' 00:00:00' );
        })

        ->when($maxUpdatedDate, function ($query, $maxUpdatedDate)
        {
            return $query->where('updated_at', '<=', $maxUpdatedDate.'23:59:59');
        })

        ->when($ordering, function ($query, $ordering)
        {
            $order = 'asc';
            if (Str::contains($ordering, '-'))
            {
                $order = 'desc';
                $ordering = substr($ordering, 1);
            }
            return $query->orderBy($ordering, $order);
        })

        ->paginate($limit);

		return response()->json([ 'data' => $result ], 200);
    }
}
