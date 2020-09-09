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
    Route::get('/update/{reason}', 'MainController@updateResult');
    Route::get('/delete/{reason}', 'MainController@deleteResult');
    Route::get('/single-reason', 'MainController@getOneReason');
});

Route::prefix('people')->group(function () {
    Route::get('/get', 'PeopleController@get');
    Route::get('/add', 'PeopleController@add');
    Route::get('/update/{people}', 'PeopleController@update');
    Route::get('/delete/{people}', 'PeopleController@delete');
    Route::get('/single', 'PeopleController@getOne');
});

Route::prefix('booking')->group(function () {
    Route::get('/get', 'BookingController@get');
    Route::get('/add', 'BookingController@add');
    Route::get('/result/{result}', 'BookingController@result');
});
