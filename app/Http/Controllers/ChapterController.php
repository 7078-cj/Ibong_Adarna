<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChapterController extends Controller
{
    public function showChapters(){
        $user = auth()->guard('web')->user();

        return inertia('ChapterPage',['user'=>$user]);
    }

    public function showChapter(Request $request){
        $num = $request->num;

        $user = auth()->guard('web')->user();

        $viewName = "Chapters/Chapter{$num}";

        return inertia($viewName,['user'=>$user,'num'=>$num ]);

    }
}
