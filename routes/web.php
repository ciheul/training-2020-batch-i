<?php

//Chap 2 Task
Route::get('/chap2/task', 'Chap2\Views\TaskDatatable@get');
Route::get('/chap2/task/{id}/detail', 'Chap2\Views\TaskDetail@get');
Route::get('/chap2/task/{id}/edit', 'Chap2\Views\TaskEdit@get');
Route::get('/chap2/task/create', 'Chap2\Views\TaskListController@post');
Route::get('/', function () { return redirect('chap2/task'); });

//Chap 1 Task
Route::get('/chap1/task/list', 'Chap1\Views\TaskListController@index')->name('chap1.task.index');
Route::get('/chap1/task/create', 'Chap1\Views\TaskController@create')->name('chap1.task.create');
Route::post('/chap1/task', 'Chap1\Views\TaskController@post')->name('chap1.task.post');
Route::get('/chap1/task/{id}', 'Chap1\Views\TaskController@get')->name('chap1.task.get');
Route::get('/chap1/task/{id}/edit', 'Chap1\Views\TaskController@edit')->name('chap1.task.edit');
Route::put('/chap1/task/{id}', 'Chap1\Views\TaskController@put')->name('chap1.task.put');
Route::delete('/chap1/task/{id}', 'Chap1\Views\TaskController@delete')->name('chap1.task.delete');
Auth::routes();
