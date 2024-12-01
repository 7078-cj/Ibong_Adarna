<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::get('/login', function () {
    return inertia('LogIn');
});

Route::post('/login-user',[UserController::class, 'login']);

Route::get('/register', function () {
    return inertia('Register');
});

Route::post('/register-user',[UserController::class, 'register']);

Route::post('/logout-user',[UserController::class, 'logout']);

//authenticated middleware
Route::middleware('auth')->group(function (){

    Route::get('/', function () {
        $user = auth()->guard('web')->user();

        return inertia('HeroPage',['user'=>$user]);
    });

    Route::get('/chapters', function () {
        $user = auth()->guard('web')->user();

        return inertia('ChapterPage',['user'=>$user]);
    });

    Route::get('/leaderboard', function () {
        $user = auth()->guard('web')->user();

        return inertia('LeaderBoards',['user'=>$user]);
    });

    Route::get('/chapter1', function () {
        $user = auth()->guard('web')->user();

        return inertia('Chapters/Chapter1/Chapter1',['user'=>$user]);
    });
    Route::get('/profile', function () {
        $user = auth()->guard('web')->user();

        return inertia('ProfilePage',['user'=>$user]);
    });



    


});