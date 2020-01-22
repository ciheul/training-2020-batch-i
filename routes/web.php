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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/chap1/task/list','Chap1\Views\TaskListController@index')->name('chap1.task.index');

Route::get('/chap1/task/create','Chap1\Views\TaskController@create')->name('chap1.task.create');

Route::post('/chap1/task','Chap1\Views\TaskController@post')->name('chap1.task.post');

Route::get('/chap1/task/{id}','Chap1\Views\TaskController@get')->name('chap1.task.get');

Route::get('/chap1/task/{id}/edit','Chap1\Views\TaskController@edit')->name('chap1.task.edit');

Route::put('/chap1/task/{id}','Chap1\Views\TaskController@put')->name('chap1.task.put');

Route::delete('/chap1/task/{id}','Chap1\Views\TaskController@delete')->name('chap1.task.delete');

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
