<?php

use Illuminate\Http\Request;

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
Route::post('/Chapter2/store','Chapter2\Apis\CreateApi@post');
Route::get('/Chapter2/apis/{id}','Chapter2\Apis\UpdateApi@get');
Route::put('/Chapter2/{id}/edit/update','Chapter2\Apis\UpdateApi@put');
Route::delete('/Chapter2/{id}/edit/delete','Chapter2\Apis\UpdateApi@delete');
Route::get('/Chapter2/apis','Chapter2\Apis\DatalistApi@get');

