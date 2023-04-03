<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ClubExco;
class ClubExcosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        //
        if (ClubExco::count() == 0) {
            // Insert your data
            ClubExco::create([
                'clubMemberId' => 1,
                'role' => 'Vice President',
                'roleFromDate' => '2022-05-01',
                'roleToDate' => '2023-04-30',
            ]);

            ClubExco::create([
                'clubMemberId' => 3,
                'role' => 'Community Relations Director',
                'roleFromDate' => '2022-05-01',
                'roleToDate' => '2023-04-30',
            ]);

            ClubExco::create([
                'clubMemberId' => 4,
                'role' => 'Co-Founder',
                'roleFromDate' => '2022-08-01',
                'roleToDate' => '2023-07-31',
            ]);

            ClubExco::create([
                'clubMemberId' => 7,
                'role' => 'Events Director',
                'roleFromDate' => '2023-05-01',
                'roleToDate' => '2024-04-30',
            ]);

            ClubExco::create([
                'clubMemberId' => 8,
                'role' => 'Honorary Finance Secretary',
                'roleFromDate' => '2023-01-01',
                'roleToDate' => '2023-12-31',
            ]);

    }
}
}
