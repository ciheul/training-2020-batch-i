<?php

namespace App\Http\Controllers\Chapter2\Views;

use App\Http\Controllers\Controller;
use App\Models\chapter2;
use Illuminate\Http\Request;


class UpdateView extends Controller
{
	public function get($id)
	{
	   return view("chapter2.updateview", compact(['id']));
	}
}
