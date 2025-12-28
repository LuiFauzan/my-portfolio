<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('experiences', function (Blueprint $table) {
             $table->string('title');        // Frontend Developer
            $table->string('company')->nullable();
            $table->enum('type', ['Freelance', 'Internship', 'Organization']);
            $table->date('start_date');
            $table->date('end_date')->nullable(); // null = sekarang
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('experiences');
    }
};
