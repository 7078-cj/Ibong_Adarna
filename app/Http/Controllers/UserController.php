<?php

namespace App\Http\Controllers;

use App\Models\Leveldata;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Illuminate\Validation\Rule;



class UserController extends Controller
{
    public function register(Request $request)
    {
        
        $registration = $request->validate([
            'name' => ['required', Rule::unique('users', 'name')],
            'email' => ['required', 'email', Rule::unique('users', 'email')],
            'password' => ['required', 'min:8', 'max:200'],
        ]);

        
        $registration['password'] = bcrypt($registration['password']);

        try {
            
            $user = User::create($registration);

            
            Leveldata::create([
                'user_id' => $user->id,
                'user_level' => 1,
            ]);

            
            auth()->guard('web')->login($user);

           
            return redirect()->route('home')->with('success', 'Registration successful!');
        } catch (\Exception $e) {
           
            return redirect()->back()->withErrors(['registration' => 'Registration failed: ' . $e->getMessage()])->withInput();
        }
    }

    public function logout(){
        Auth::logout();

        return redirect('/');
        
    }

    public function login(Request $request){
         
            $login = $request->validate([
                'email' => 'required|email',
                'password' => 'required',
            ]);

            try {
                
                if (auth()->guard('web')->attempt(['email' => $login['email'], 'password' => $login['password']])) {
                    
                    $request->session()->regenerate();

                   
                    return redirect()->intended('/');
                } else {
                    
                    return redirect()->back()->withErrors([
                        'email' => 'Ang ibinigay na mga kredensyal ay hindi tumutugma sa aming mga tala.',
                    ])->withInput($request->only('email'));
                }
            } catch (\Exception $e) {
                
                return redirect()->back()->withErrors(['login' => 'Login failed: ' . $e->getMessage()])->withInput($request->only('email'));
            }
    }
}
