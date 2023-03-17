<?php

namespace App\Http\Controllers;
use App\Models\ClubMember;
use Illuminate\Http\Request;
use App\Http\Requests\ClubMemberRequest;

class ClubMemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $clubMembers = ClubMember::all();

        // Return Json Response
        return response()->json([
            'club_members' => $clubMembers
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(ClubMemberRequest $request)
    {
        try {

            // Create Club
            ClubMember::create([
                'clubId' => $request->clubId,
                'studentMatricNum' => $request -> studentMatricNum,
                'yearJoined' => $request->yearJoined
            ]);
    
            // Return Json Response
            return response()->json([
                'message' => "Congratulations, club member successfully created."
            ],200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Opps.. Something went wrong! Your club member could not be created!"
            ],500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        //
        $clubMembers = ClubMembers::find($id);
        if(!$clubMembers){
          return response()->json([
             'message'=>'Club member not found!'
          ],404);
        }
     
        // Return Json Response
        return response()->json([
           'club_members' => $clubMembers
        ],200);
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
