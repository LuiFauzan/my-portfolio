<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ExperienceController extends Controller
{
    public function index(){
        return Inertia::render('Admin/Experiences/Index',[]);
    }

    public function create(){
        return Inertia::render('Admin/Experiences/Create',[]);
    }

    public function store(Request $request){
        $validated = $request->validate([
            'title' => 'required|max:255|string',
            'company' => 'nullable|max:255',
            'type' => 'required|in:Freelance,Intership,Organization',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'description' => 'nullable'
        ]);

        Experience::create($validated);
        return redirect()->route('experiences.index')->with('message','Experience Created Successfully');
    }

    public function edit(Experience $experience){
        return Inertia::render('Admin/Experiences/Create',[
            'experience' => $experience
        ]);
    }

    public function update(Request $request, Experience $experience) {
          $validated = $request->validate([
            'title' => 'required|max:255|string',
            'company' => 'nullable|max:255',
            'type' => 'required|in:Freelance,Intership,Organization',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'description' => 'nullable'
        ]);

        $experience->update($validated);
        return redirect()->route('experiences.index')->with('message','Experience Updated Successfully');
    }

    public function destroy(Experience $experience){
        $experience->delete();
        return redirect()->route('experiences.index')->with('message','Experience Deleted Successfully');
    }
}
