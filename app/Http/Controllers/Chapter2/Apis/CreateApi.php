<?php

namespace App\Http\Controllers\Chapter2\Apis;

use App\Http\Controllers\Controller;
use App\Models\chapter2;
use Illuminate\Http\Request;


class CreateApi extends Controller
{
	public function post(Request $request)
	{
		$post = new chapter2;
		$post->title = $request->title;
		$post->body = $request->body;
		$post->status = $request->status;
		$post->save();

	   	return response()->json(['data'=>$post]);
	}
}
