<?php

namespace App\Http\Controllers;

use App\Models\ProjectImage;
use Illuminate\Http\Request;
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
        return redirect()->route('project-images.index')->with('message','Project Images Created Successfully');
    }
    public function edit(ProjectImage $projectImage){
        return Inertia::render('Admin/ProjectImages/Edit');
    }
    public function update(Request $request, ProjectImage $projectImage){
        
    }
    public function destroy(ProjectImage $projectImage) {
        $projectImage->delete();
        return redirect()->route('project-images.create')->with('message','Image Deleted Successfully');
    }
}
