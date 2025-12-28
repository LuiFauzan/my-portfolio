<?php

namespace App\Http\Controllers;

use App\Models\ProjectImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectImageController extends Controller
{
    public function index() {
        return Inertia::render('Admin/ProjectImages/Index',[]);
    }
    public function create(){
        return Inertia::render('Admin/ProjectImages/Create');
    }
    public function store(Request $request){
        $validated = $request->validate([
            'project_id' => 'required|exists:project,project_id',
            'image' => 'required|image|mimes:png,jpg,jpeg,svg,gif|max:2048'
        ]);

        $projectImagePath = $request->file('image')->store('project-images','public');

        ProjectImage::create([
            ...$validated,
            'image' => $projectImagePath
        ]);
        return redirect()->route('project-images.index')->with('message','Image Created Successfully');
    }
    public function edit(ProjectImage $projectImage){
        return Inertia::render('Admin/ProjectImages/Edit',[
            'projectImage' => $projectImage
        ]);
    }
    public function update(Request $request, ProjectImage $projectImage){
         $validated = $request->validate([
            'project_id' => 'required|exists:project,id',
            'image' => 'nullable|image|mimes:png,jpg,jpeg,svg,gif|max:2048'
        ]);

        // ? (opsional) update new image
        if ($request->hasFile('image')){
            // ? if true delete old image from storage
            if($projectImage->image){
                Storage::disk('public')->delete($projectImage->image);
            }
            // ? validation and restore new image
            $validated['image'] = $request->file('image')->store('project-images','public');
        }
        $projectImage->update($validated);
        return redirect()->route('project-images.index')->with('message','Image Updated Successfully');
    }
    public function destroy(ProjectImage $projectImage) {
        if($projectImage->image){
                Storage::disk('public')->delete($projectImage->image);
            }
        $projectImage->delete();
        return redirect()->route('project-images.create')->with('message','Image Deleted Successfully');
    }
}
