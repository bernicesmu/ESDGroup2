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
        Schema::create('club_excos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('clubMemberId');
            $table->string('role');
            $table->date('roleFromDate');
            $table->date('roleToDate');
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('clubMemberId')->references('id')->on('club_members');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('club_excos');
    }
};
