<?php

use App\Http\Controllers\ClubController;
use App\Http\Controllers\ClubExcoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/clubs', [ClubController::class, 'index']);
Route::get('/clubs/{id}', [ClubController::class, 'show']);
Route::post('/clubs', [ClubController::class, 'store']);
Route::put('/clubs', [ClubController::class, 'update']);

Route::get('/club_excos', [ClubExcoController::class, 'index']);
// Route::get('/club_excos', 'ClubExcoController@index');
// Route::post('/club_excos', 'ClubExcoController@create');Route::get('/club_excos', [ClubExcoController::class, 'index']);
Route::get('/club_excos/{id}', [ClubExcoController::class, 'show']);
Route::post('/club_excos', [ClubExcoController::class, 'create']);
Route::put('/club_excos/{id}', [ClubExcoController::class, 'update']);
Route::delete('/club_excos/{id}', [ClubExcoController::class, 'destroy']);