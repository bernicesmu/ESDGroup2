<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClubController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('clubs', "ClubController@index"); // Get club members
// Route::post('clubs', "ClubController@store"); // Create club
// Route::get('clubs/{id}', "ClubController@show"); // Detail of club
// Route::put('clubs/{id}', "ClubController@update"); // Update club
// Route::delete('clubs/{id}', "ClubController@destroy"); // Delete club

Route::resource('clubs','ClubController');

Route::get('/clubs', [ClubController::class, 'index']);
Route::post('/clubs', [ClubController::class, 'create']);