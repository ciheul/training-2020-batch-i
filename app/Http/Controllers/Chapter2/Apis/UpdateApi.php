<?php

namespace App\Http\Controllers\Chapter2\Apis;

use App\Http\Controllers\Controller;
use App\Models\chapter2;
use Illuminate\Http\Request;

class UpdateApi extends Controller
{
    public function get($id)
	{
        $chapter2 = chapter2::where('id', $id)->first();
        return response()->json(['data'=>$chapter2]);
	}

    public function put(Request $request, $id)
	{
        $chapter2 = chapter2::where('id', $id)->update(
        [
            'title' => $request->title,
			'body' => $request->body,
			'status' => $request->status
		]
		);
        return response()->json(['data'=>$chapter2]);
	}

    public function delete(Request $request, $id)
	{
        $chapter2 = chapter2::where('id', $id)->delete();
        if($chapter2)
		{
		  return response()->json(['success'=>$chapter2. '$id']);
		}
	}
}
