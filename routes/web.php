<?php

use App\Http\Controllers\ChapterController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Support\Facades\Route;




Route::get('/login', function () {
    return inertia('LogIn');
});

Route::post('/login-user',[UserController::class, 'login']);

Route::get('/register', function () {
    return inertia('Register');
});

Route::post('/register-user',[UserController::class, 'register']);



//authenticated middleware
Route::middleware('auth')->group(function (){

    Route::get('/', function () {
        $user = auth()->guard('web')->user();

        return inertia('HeroPage',['user'=>$user]);
    });

    Route::get('/chapters', [ChapterController::class, 'showChapters']);

    Route::get('/leaderboard', function () {
        $user = auth()->guard('web')->user();
        $allUser = User::with('levelData')->get();

        return inertia('LeaderBoards',['user'=>$user,'allUser'=>$allUser]);
    });

    Route::get('/chapter/{num}', [ChapterController::class, 'showChapter']);
    Route::get('/congrats', [ChapterController::class, 'showCongrats']);
    
    Route::get('/profile', function () {
        $user = auth()->guard('web')->user();
        if ($user) {
            $user->load('levelData');
        }

        return inertia('ProfilePage',['user'=>$user]);
    });
    
    Route::post('/levelup',[ChapterController::class, 'levelUp']);

    Route::get('/wordbank', function () {
        $user = auth()->guard('web')->user();

        return inertia('WordBank', ['user'=>$user]);
    });

    Route::post('/logout-user',[UserController::class, 'logout']);


});