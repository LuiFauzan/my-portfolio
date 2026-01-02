<?php

namespace App\Http\Controllers;

use App\Models\Social;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SocialController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Socials/Index', [
            'socials' => Social::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Socials/Create', []);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'platform' => 'required|string|max:255',
            'url' => 'required|url',
            'icon' => 'required|image|mimes:png,jpg,svg,gif|max:2048'
        ]);
        $socialIconPath = $request->file('icon')->store('social-icons', 'public');

        Social::create([
            ...$validated,
            'icon' => $socialIconPath
        ]);

        return redirect()->route('socials.index')->with('message','Social Created Successfully');
    }

    public function edit(Social $social)
    {
        return Inertia::render('Admin/Socials/Create', [
            'social' => $social
        ]);
    }

    public function update(Request $request, Social $social)
    {
        $validated = $request->validate([
            'platform' => 'required|string|max:255',
            'url' => 'required|url',
            'icon' => 'nullable|image|mimes:png,jpg,svg,gif|max:2048'
        ]);

        if ($request->hasFile('icon')) {
            if ($social->icon && Storage::disk('public')->exists($social->icon)) {
                Storage::disk('public')->delete($social->icon);
            }

            $validated['icon'] = $request->file('icon')->store('social-icons', 'public');
        }


        $social->update($validated);

        return redirect()->route('socials.index')->with('message', 'Social Updated Successfully');
    }

    public function destroy(Social $social)
    {
        if ($social->icon && Storage::disk('public')->exists($social->icon)) {
            Storage::disk('public')->delete($social->icon);
        }

        $social->delete();
        return redirect()->route('socials.index')->with('message', 'Social Deleted Successfully');
    }
}
