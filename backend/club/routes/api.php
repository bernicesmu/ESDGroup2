<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClubController;
use App\Http\Controllers\ClubExcoController;

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
Route::get('/clubs/{id}', [ClubController::class, 'show']);
Route::post('/clubs', [ClubController::class, 'store']);
Route::put('/clubs/{id}', [ClubController::class, 'update']);

Route::resource('club_excos','ClubExcoController');

Route::get('/club_excos', [ClubExcoController::class, 'index']);
Route::get('/club_excos/{id}', [ClubExcoController::class, 'show']);
Route::post('/club_excos', [ClubExcoController::class, 'store']);
Route::put('/club_excos/{id}', [ClubExcoController::class, 'update']);