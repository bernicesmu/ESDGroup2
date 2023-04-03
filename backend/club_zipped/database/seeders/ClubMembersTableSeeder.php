<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ClubMember;
class ClubMembersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        //
        if (ClubMember::count() == 0) {
            // Insert your data
            ClubMember::create([
                'clubId' => 1,
                'studentMatricNum' => '1429384',
                'yearJoined' => '2022'
            ]);

            ClubMember::create([
                'clubId' => 7,
                'studentMatricNum' => '1429384',
                'yearJoined' => '2023'
            ]);

            ClubMember::create([
                'clubId' => 2,
                'studentMatricNum' => '1338329',
                'yearJoined' => '2021'
            ]);

            ClubMember::create([
                'clubId' => 1,
                'studentMatricNum' => '1338329',
                'yearJoined' => '2022'
            ]);

            ClubMember::create([
                'clubId' => 3,
                'studentMatricNum' => '1301938',
                'yearJoined' => '2021'
            ]);

            ClubMember::create([
                'clubId' => 4,
                'studentMatricNum' => '1301938',
                'yearJoined' => '2021'
            ]);

            ClubMember::create([
                'clubId' => 5,
                'studentMatricNum' => '1449284',
                'yearJoined' => '2023'
            ]);

            ClubMember::create([
                'clubId' => 6,
                'studentMatricNum' => '1449284',
                'yearJoined' => '2021'
            ]);

            ClubMember::create([
                'clubId' => 9,
                'studentMatricNum' => '1302934',
                'yearJoined' => '2023'
            ]);

            ClubMember::create([
                'clubId' => 1,
                'studentMatricNum' => '1419345',
                'yearJoined' => '2022'
            ]);

            ClubMember::create([
                'clubId' => 6,
                'studentMatricNum' => '1419345',
                'yearJoined' => '2023'
            ]);
        }
    }
}
