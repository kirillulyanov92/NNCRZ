<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/medical-education', function () {
    return Inertia::render('Direction/MedicalEducation');
})->name('medical.education');

Route::get('/human-resources', function () {
    return Inertia::render('Direction/HumanResources');
})->name('human.resources');

Route::get('/electronic-health', function () {
    return Inertia::render('Direction/ElectronicHealth');
})->name('electronic.health');

Route::get('/health-rate', function () {
    return Inertia::render('Direction/HealthRate');
})->name('health.rate');

Route::get('/clinical-protocols', function () {
    return Inertia::render('Direction/ClinicalProtocols');
})->name('clinical.protocols');

Route::get('/medical-accreditation', function () {
    return Inertia::render('Direction/MedicalAccreditation');
})->name('medical.accreditation');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
