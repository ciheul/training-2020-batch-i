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

// Route::get('Chapter1/task', 'Chapter1\Views\TaskController@index');
 Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
 //Route::resource('/Chapter1/task/','Chapter1\Views\TaskController');
 Route::get('Chapter1/task/','Chapter1\Views\TaskController@index');
 Route::get('Chapter1/task/create','Chapter1\Views\TaskCreate@get');
 Route::post('Chapter1/task/store', 'Chapter1\Views\TaskCreate@post');
 Route::get('Chapter1/task/show','Chapter1\Views\TaskShow@get');
 Route::get('Chapter1/task/test/{id}','Chapter1\Views\TaskView@get');
 Route::get('Chapter1/task/test/{id}/edit','Chapter1\Views\TaskUpdate@get');
 Route::put('Chapter1/task/test/{id}/store','Chapter1\Views\TaskUpdate@put');
 Route::delete('Chapter1/task/test/{id}/delete','Chapter1\Views\TaskUpdate@delete');

 //Route::post('/Chapter1/task/create','Chapter1\Views\TaskController@store');


//Route::get('Chapter1/task/create','Chapter1/Views/TaskController@create');

// Route::get('/', function () {
//  return view('welcome');
// });

