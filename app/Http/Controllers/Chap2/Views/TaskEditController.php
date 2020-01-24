<?php

namespace App\Http\Controllers\Chap2\Views;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TaskEditController extends Controller
{
    public function get($id)
    {

        return view('Chap2.Task.edit', compact('id'));
    }
}
