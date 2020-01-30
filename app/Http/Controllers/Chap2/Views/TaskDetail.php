<?php

namespace App\Http\Controllers\Chap2\Views;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class TaskDetail extends Controller
{
    public function get($id) {

        return view ('Chap2.Datatable.detail', compact('id'));
    }
}
