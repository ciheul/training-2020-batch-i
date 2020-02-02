<?php

Route::post('/chap2/task/apis', 'Chap2\Apis\TaskController@post');
Route::put('/chap2/task/apis/{id}/update', 'Chap2\Apis\TaskDetail@put');
Route::delete('/chap2/task/apis/{id}/delete', 'Chap2\Apis\TaskDetail@delete');
Route::get('/chap2/task/apis', 'Chap2\Apis\TaskList@get');
Route::get('/chap2/task/apis/{id}', 'Chap2\Apis\TaskDetail@get');
