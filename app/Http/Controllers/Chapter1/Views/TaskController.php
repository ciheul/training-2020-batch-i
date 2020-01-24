<?php

namespace App\Http\Controllers\Chapter1\Views;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Task;


class TaskController extends Controller
{
   // public function __construct()
   //  {
   //    $this->middleware('auth')->except('index', 'show', 'login');
   //  }
      /**
     * Display a listing of the resource.
     *
     //* @return \Illuminate\Http\Response
     */
    public function index()
    {
        //tampilan menu task list
        $task = Task::get();
        return view('task.index', compact('task')); 
    }   

    
    
    
    
}
