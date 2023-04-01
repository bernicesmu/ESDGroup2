<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClubController;
use App\Http\Controllers\ClubExcoController;
use App\Http\Controllers\ClubMemberController;
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

// Route::resource('clubs','ClubController');

Route::get('/clubs', [ClubController::class, 'index']);
Route::get('/clubs/{id}', [ClubController::class, 'show']);
Route::post('/clubs', [ClubController::class, 'store']);
// Route::get('/clubs/get-name/{id}', [ClubController::class, 'getName']);
Route::put('/clubs/{id}', [ClubController::class, 'update']);
Route::delete('/clubs/{id}', [ClubController::class, 'destroy']);

// Route::resource('club_excos','ClubExcoController');

Route::get('/club_excos', [ClubExcoController::class, 'index']);
Route::get('/club_excos/{id}', [ClubExcoController::class, 'show']);
Route::post('/club_excos', [ClubExcoController::class, 'store']);
Route::put('/club_excos/{id}', [ClubExcoController::class, 'update']);
Route::delete('/club_excos/{id}', [ClubExcoController::class, 'destroy']);
Route::get('/club_excos/by_member/{id}', [ClubExcoController::class, 'showDetails']);

Route::get('/club_members', [ClubMemberController::class, 'index']);
Route::get('/club_members/{id}', [ClubMemberController::class, 'show']);
Route::post('/club_members', [ClubMemberController::class, 'store']);
Route::put('/club_members/{id}', [ClubMemberController::class, 'update']);
Route::delete('/club_members/{id}', [ClubMemberController::class, 'destroy']);
Route::get('/club_members/details/{id}', [ClubMemberController::class, 'showDetails']);
