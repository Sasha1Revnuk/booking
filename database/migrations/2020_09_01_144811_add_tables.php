<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('cash');
            $table->string('email')->unique();
            $table->timestamps();
        });

        Schema::create('reasons', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->timestamps();
        });

        Schema::create('results', function (Blueprint $table) {
            $table->id();
            $table->text('reasons');
            $table->integer('coef');
            $table->boolean('result');
            $table->boolean('status');
            $table->integer('cash');
            $table->unsignedBigInteger('people_id');
            $table->foreign('people_id')->references('id')->on('people')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('results');
        Schema::dropIfExists('people');
        Schema::dropIfExists('reasons');

    }
}
