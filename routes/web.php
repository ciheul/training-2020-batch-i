<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Chapter 1
 Auth::routes();

Route::get('Chapter1/task/','Chapter1\Views\TaskController@index');
Route::get('Chapter1/task/create','Chapter1\Views\TaskCreate@get');
Route::post('Chapter1/task/store', 'Chapter1\Views\TaskCreate@post');
Route::get('Chapter1/task/show','Chapter1\Views\TaskShow@get');
Route::get('Chapter1/task/test/{id}','Chapter1\Views\TaskView@get');
Route::get('Chapter1/task/test/{id}/edit','Chapter1\Views\TaskUpdate@get');
Route::put('Chapter1/task/test/{id}/store','Chapter1\Views\TaskUpdate@put');
Route::delete('Chapter1/task/test/{id}/delete','Chapter1\Views\TaskUpdate@delete');

//Chapter 2

Route::get('Chapter2','Chapter2\Views\DataListView@get');
Route::get('Chapter2/create','Chapter2\Views\CreateView@get');
Route::get('Chapter2/{id}/edit','Chapter2\Views\UpdateView@get');




