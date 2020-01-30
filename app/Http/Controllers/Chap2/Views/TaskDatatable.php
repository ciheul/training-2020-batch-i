<?php

namespace App\Http\Controllers\Chap2\Views;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class TaskDatatable extends Controller
{
    public function get() {
        return view('Chap2.Datatable.list');
    }
}
