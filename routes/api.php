<?php

use Illuminate\Http\Request;

Route::post('/chap2/task/apis','Chap2\Apis\TaskController@post');
Route::put('/chap2/task/apis/{id}/update','Chap2\Apis\TaskDetail@put');
Route::delete('/chap2/task/apis/{id}/delete','Chap2\Apis\TaskDetail@delete');
Route::get('/chap2/task/apis','Chap2\Apis\TaskList@get');
Route::get('/chap2/task/apis/{id}','Chap2\Apis\TaskDetail@get');

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

