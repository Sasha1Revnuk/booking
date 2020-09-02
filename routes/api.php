<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::prefix('results')->group(function () {
    Route::get('/get', 'MainController@getResults');
    Route::get('/add', 'MainController@addResult');
    Route::get('/update', 'MainController@updateResult');
    Route::get('/delete', 'MainController@deleteResult');
    Route::get('/for', 'MainController@addResult');
});
