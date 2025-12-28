<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    public function index(){
        return Inertia::render('Admin/Testimonials/Index',[]);
    }
    public function create(){
        return Inertia::render('Admin/Testimonials/Create',[]);
    }
    public function store(Request $request ){
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'nullable',
            'message' => 'required|string',
            'avatar' => 'nullable|image|mimes:png,jpg,svg,gif|max:2048'
        ]);

        // ? create path avatar
        $avatarPath = $request->file('avatar')->store('public','testimonial-avatar');

        Testimonial::create([
            ...$validated,
            'avatar' => $avatarPath
        ]);
        return redirect()->route('testimonials.index')->with('message','Testimonial Created Successfully');
    }
    public function edit(Testimonial $testimonial){
        return Inertia::render('Admin/Testimonials/Edit',[
            'testimonial' => $testimonial
        ]);
    }

    public function update(Request $request, Testimonial $testimonial){
          $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'nullable',
            'message' => 'required|string',
            'avatar' => 'nullable|image|mimes:png,jpg,svg,gif|max:2048'
        ]);

        if($request->hasFile('avatar')){
            if($testimonial->avatar && Storage::disk('public')->exists($testimonial->avatar)){
                Storage::disk('public')->delete($testimonial->avatar);
            }
            $validated['avatar'] = $request->file('avatar')->store('puublic','testimonial-avatar');
        }

        return redirect()->route('testimonials.index')->with('message','Testimonial Updated Successfully');
    }

    public function destroy(Testimonial $testimonial){
         if($testimonial->avatar && Storage::disk('public')->exists($testimonial->avatar)){
                Storage::disk('public')->delete($testimonial->avatar);
            }
        $testimonial->delete();
        return redirect()->route('testimonials.index')->with('message','Testimonial Created Successfully');
    }

}
