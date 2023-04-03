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
                'studentMatricNum' => '01429384',
                'yearJoined' => '2022'
            ]);

            ClubMember::create([
                'clubId' => 7,
                'studentMatricNum' => '01429384',
                'yearJoined' => '2023'
            ]);

            ClubMember::create([
                'clubId' => 2,
                'studentMatricNum' => '01338329',
                'yearJoined' => '2021'
            ]);

            ClubMember::create([
                'clubId' => 1,
                'studentMatricNum' => '01338329',
                'yearJoined' => '2022'
            ]);

            ClubMember::create([
                'clubId' => 3,
                'studentMatricNum' => '01301938',
                'yearJoined' => '2021'
            ]);

            ClubMember::create([
                'clubId' => 4,
                'studentMatricNum' => '01301938',
                'yearJoined' => '2021'
            ]);

            ClubMember::create([
                'clubId' => 5,
                'studentMatricNum' => '01449284',
                'yearJoined' => '2023'
            ]);

            ClubMember::create([
                'clubId' => 6,
                'studentMatricNum' => '01449284',
                'yearJoined' => '2021'
            ]);

            ClubMember::create([
                'clubId' => 9,
                'studentMatricNum' => '01302934',
                'yearJoined' => '2023'
            ]);

            ClubMember::create([
                'clubId' => 1,
                'studentMatricNum' => '01419345',
                'yearJoined' => '2022'
            ]);

            ClubMember::create([
                'clubId' => 6,
                'studentMatricNum' => '01419345',
                'yearJoined' => '2023'
            ]);

            ClubMember::create([
                'clubId' => 8,
                'studentMatricNum' => '01986754',
                'yearJoined' => '2021'
            ]);

            ClubMember::create([
                'clubId' => 11,
                'studentMatricNum' => '01986754',
                'yearJoined' => '2021'
            ]);

            ClubMember::create([
                'clubId' => 10,
                'studentMatricNum' => '01237819',
                'yearJoined' => '2019'
            ]);

            ClubMember::create([
                'clubId' => 3,
                'studentMatricNum' => '01815063',
                'yearJoined' => '2020'
            ]);

            ClubMember::create([
                'clubId' => 7,
                'studentMatricNum' => '01429605',
                'yearJoined' => '2021'
            ]);

            ClubMember::create([
                'clubId' => 2,
                'studentMatricNum' => '01760382',
                'yearJoined' => '2022'
            ]);

            ClubMember::create([
                'clubId' => 5,
                'studentMatricNum' => '01760382',
                'yearJoined' => '2023'
            ]);
        }
    }
}
