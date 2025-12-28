<?php

namespace App\Http\Controllers;

use App\Models\SkillImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SkillImageController extends Controller
{
    public function index(){
        return Inertia::render('Admin/SkillImages/Index',[]);
    }
    public function create() {
        return Inertia::render('Admin/SkillImages/Create',[]);
    }
    public function store(Request $request){
        $validated = $request->validate([
            'skill_id' => 'required|exists:skill,id',
            'image' => 'required|image|mimes:png,jpg,svg,gif|max:2048'
        ]);

        $skillImagePath = $request->file('image')->store('skill-images','public');

        SkillImage::create([
            ...$validated,
            'image' => $skillImagePath
        ]);

        return redirect()->route('skill-images.index')->with('message','Skill Image Created Successfuly');
    }
    public function edit(SkillImage $skillImage){
        return Inertia::render('Admin/SkillImages/Edit',[
            'skillImage' => $skillImage
        ]);
    }

    public function update(Request $request, SkillImage $skillImage){
         $validated = $request->validate([
            'skill_id' => 'required|exists:skill,id',
            'image' => 'nullable|image|mimes:png,jpg,svg,gif|max:2048'
        ]);

        if($request->hasFile('image')){
            if($skillImage->image && Storage::disk('public')->exists($skillImage->image)){
                Storage::disk('public')->delete($skillImage->image);
            }

            $validated['image'] = $request->file('image')->store('skill-images','public');
            return redirect()->route('skill-images.index')->with('message','Skill Images Updated Successfully');
        }
    }

    public function destroy(SkillImage $skillImage){
        if($skillImage->image && Storage::disk('public')->exists($skillImage)){
            Storage::disk('public')->delete($skillImage);
        }
        $skillImage->delete();
        return redirect()->route('skill-images.index')->with('message','Skill Image Deleted Successfully');
    }
}
