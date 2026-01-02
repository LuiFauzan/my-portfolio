<?php

use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectImageController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\SkillImageController;
use App\Http\Controllers\SocialController;
use App\Http\Controllers\TestimonialController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Route::get('/', function () {
//     return Inertia::render('welcome', [
//         'canRegister' => Features::enabled(Features::registration()),
//     ]);
// })->name('home');

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // ? Manual Route (CRUD)
    // // ! Route Project
    // Route::get('/projects', [ProjectController::class,'index'])->name('projects.index');
    // Route::get('/projects/create', [ProjectController::class,'create'])->name('projects.create');
    // Route::post('/projects/create', [ProjectController::class,'store'])->name('projects.store');
    // Route::get('/projects/{project}/edit', [ProjectController::class,'edit'])->name('projects.edit');
    // Route::put('/projects/{project}/edit', [ProjectController::class,'update'])->name('projects.update');
    // Route::delete('/projects/{project}', [ProjectController::class,'destroy'])->name('projects.destroy');

    // // ! Route Project Image
    // Route::get('/project-images', [ProjectImageController::class,'index'])->name('project-images.index');
    // Route::get('/project-images/create', [ProjectImageController::class,'create'])->name('project-images.create');
    // Route::post('/project-images/create', [ProjectImageController::class,'store'])->name('project-images.store');
    // Route::get('/project-images/{project-image}/edit', [ProjectImageController::class,'edit'])->name('project-images.edit');
    // Route::put('/project-images/{project-image}/edit', [ProjectImageController::class,'update'])->name('project-images.update');
    // Route::delete('/project-images/{project-image}', [ProjectImageController::class,'destroy'])->name('project-images.destroy');

    // // ! Route Skill
    // Route::get('/skills', [SkillController::class,'index'])->name('skills.index');
    // Route::get('/skills/create', [SkillController::class,'create'])->name('skills.create');
    // Route::post('/skills/create', [SkillController::class,'store'])->name('skills.store');
    // Route::get('/skills/{skill}/edit', [SkillController::class,'edit'])->name('skills.edit');
    // Route::put('/skills/{skill}/edit', [SkillController::class,'update'])->name('skills.update');
    // Route::delete('/skills/{skill}', [SkillController::class,'destroy'])->name('skills.destroy');


    // // ! Route Skill Image
    // Route::get('/skill-images', [SkillImageController::class,'index'])->name('skill-images.index');
    // Route::get('/skill-images/create', [SkillImageController::class,'create'])->name('skill-images.create');
    // Route::post('/skill-images/create', [SkillImageController::class,'store'])->name('skill-images.store');
    // Route::get('/skill-images/{skill-image}/edit', [SkillImageController::class,'edit'])->name('skill-images.edit');
    // Route::put('/skill-images/{skill-image}/edit', [SkillImageController::class,'update'])->name('skill-images.update');
    // Route::delete('/skill-images/{skill-image}', [SkillImageController::class,'destroy'])->name('skill-images.destroy');

    // // ! Route Experience
    // Route::get('/experiences', [ExperienceController::class,'index'])->name('experiences.index');
    // Route::get('/experiences/create', [ExperienceController::class,'create'])->name('experiences.create');
    // Route::post('/experiences/create', [ExperienceController::class,'store'])->name('experiences.store');
    // Route::get('/experiences/{experience}/edit', [ExperienceController::class,'edit'])->name('experiences.edit');
    // Route::put('/experiences/{experience}/edit', [ExperienceController::class,'update'])->name('experiences.update');
    // Route::delete('/experiences/{experience}', [ExperienceController::class,'destroy'])->name('experiences.destroy');

    // // ! Route Social
    // Route::get('/socials', [SocialController::class,'index'])->name('socials.index');
    // Route::get('/socials/create', [SocialController::class,'create'])->name('socials.create');
    // Route::post('/socials/create', [SocialController::class,'store'])->name('socials.store');
    // Route::get('/socials/{social}/edit', [SocialController::class,'edit'])->name('socials.edit');
    // Route::put('/socials/{social}/edit', [SocialController::class,'update'])->name('socials.update');
    // Route::delete('/socials/{social}', [SocialController::class,'destroy'])->name('socials.destroy');

    // // ! Route Testimonial
    // Route::get('/testimonials', [TestimonialController::class,'index'])->name('testimonials.index');
    // Route::get('/testimonials/create', [TestimonialController::class,'create'])->name('testimonials.create');
    // Route::post('/testimonials/create', [TestimonialController::class,'store'])->name('testimonials.store');
    // Route::get('/testimonials/{testimonial}/edit', [TestimonialController::class,'edit'])->name('testimonials.edit');
    // Route::put('/testimonials/{testimonial}/edit', [TestimonialController::class,'update'])->name('testimonials.update');
    // Route::delete('/testimonials/{testimonial}', [TestimonialController::class,'destroy'])->name('testimonials.destroy');


    // !! Best Practice Route (CRUD)
    Route::resource('projects', ProjectController::class);
    Route::resource('project-images', ProjectImageController::class);
    Route::resource('skills', SkillController::class);
    Route::resource('skill-images', SkillImageController::class);
    Route::resource('experiences', ExperienceController::class);
    Route::resource('socials', SocialController::class);
    Route::resource('testimonials', TestimonialController::class);


});

require __DIR__.'/settings.php';
