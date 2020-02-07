<?php

namespace App\Http\Controllers\Chapter2\Views;

use App\Http\Controllers\Controller;
use App\Models\chapter2;
use Illuminate\Http\Request;


class CreateView extends Controller
{
	public function get()
	{
		return view('chapter2.createview');
	}
}
