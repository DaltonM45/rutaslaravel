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

Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');

Route::get('/', function () {
    return view('layouts.principal');
});

// Route::get('/{any}', 'AppearanceController@index')->where('any', '.*');


// Route::get('/layouts/{vue_capture?}', function () {
//     return view('layouts.principal');
//    })->where('vue_capture', '[\/\w\.-]*');