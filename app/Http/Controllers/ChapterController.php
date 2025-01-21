<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChapterController extends Controller
{
    public function showChapters(){
        $user = auth()->guard('web')->user();
        $lvlData = $user->levelData->user_level;

        return inertia('ChapterPage',['user'=>$user,'lvlData'=>$lvlData]);
    }

    public function showChapter(Request $request,$num){
        $num = $request->num;

        $user = auth()->guard('web')->user();

        $viewName = "Chapters/Chapter{$num}";

        return inertia($viewName,['user'=>$user,'num'=>$num ]);

    }

    public function levelUp(Request $request){
        $user = Auth::user();
        $request->validate([
            'chapter' => 'required|string', 
        ]);
        $chapter = $request->input('chapter');
        $levelData = $user->levelData;
        
        if($chapter >= $levelData->user_level && $chapter < 46){
            $levelData->user_level += 1; 
            $levelData->save(); 
        }
          
        

    }
}
