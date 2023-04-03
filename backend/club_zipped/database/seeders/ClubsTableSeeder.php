<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Club;

class ClubsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // // Check if the clubs table is empty
        if (Club::count() == 0) {
            // Insert your data
            Club::create([
                'clubName' => 'SMUBIA',
                'clubCategory' => 'Academic Club',
                'cbd' => 'IIE',
            ]);

            Club::create([
                'clubName' => 'GHC',
                'clubCategory' => 'Community Club',
                'cbd' => 'Others',
            ]);
            Club::create([
                'clubName' => 'Floorball',
                'clubCategory' => 'Sports Club',
                'cbd' => 'SSU',
            ]);
            Club::create([
                'clubName' => 'Tchoukball',
                'clubCategory' => 'Sports Club',
                'cbd' => 'SSU',
            ]);
            Club::create([
                'clubName' => 'Peer Helpers',
                'clubCategory' => 'Community Club',
                'cbd' => 'Others',
            ]);
            
            Club::create([
                'clubName' => 'SMUBE',
                'clubCategory' => 'Arts',
                'cbd' => 'ACF',
            ]);

            Club::create([
                'clubName' => '.Hack',
                'clubCategory' => 'Academic Club',
                'cbd' => 'IIE',
            ]);

            Club::create([
                'clubName' => 'Volleyball',
                'clubCategory' => 'Sports Club',
                'cbd' => 'SSU',
            ]);

            Club::create([
                'clubName' => 'GrowthX',
                'clubCategory' => 'Academic Club',
                'cbd' => 'Others',
            ]);

            Club::create([
                'clubName' => 'Debate Club',
                'clubCategory' => 'Academic Club',
                'cbd' => 'Others',
            ]);

            Club::create([
                'clubName' => 'StageIt',
                'clubCategory' => 'Arts',
                'cbd' => 'ACF',
            ]);
        }
    }
}
