<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Illuminate\Validation\Rule;



class UserController extends Controller
{
    public function register(Request $request){
        $registration = $request->validate([
            'name'=>['required',Rule::unique('users','name')],
            'email'=>['required','email',Rule::unique('users','email')],
            'password'=>['required','min:8','max:200']
        ]);
        


        $registration['password'] = bcrypt($registration['password']);
        $user = User::create($registration);
        auth()->guard('web')->login($user);

        return redirect('/');
    }

    public function logout(){
        auth()->guard('web')->logout();

        return redirect('/');
        
    }

    public function login(Request $request){
        $login = $request->validate([
            'name'=>'required',
            'password'=>'required'
        ]);

        if (auth()->guard('web')->attempt(['name' => $login['name'],'password'=>$login['password']])){
            $request->session()->regenerate();
        }

        return redirect('/');
    }
}
