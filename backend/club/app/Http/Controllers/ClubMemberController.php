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
    // Getting club member by matric number
    // public function show( $id)
    // {
    //     //
    //     // $clubMember = ClubMember::find($id);
    //     // $clubMember = ClubMember::where('studentMatricNum', $id)->get();
    //     $clubMember = ClubMember::where($id, 'studentMatricNum', $id)->get();
    //     if(!$clubMember){
    //       return response()->json([
    //          'message'=>'Club member not found!'
    //       ],404);
    //     }
     
    //     // Return Json Response
    //     return response()->json([
    //        'club_members' => $clubMember
    //     ],200);
        
    // }

    // Get club member by passing club id
    public function show($id)
    {
        //
        // $clubMember = ClubMember::find($id);
        // $clubMember = ClubMember::where('studentMatricNum', $id)->get();
        $clubMember = ClubMember::where('clubId',$id)->get();
        if(!$clubMember){
          return response()->json([
             'message'=>'Club member not found!'
          ],404);
        }
     
        // Return Json Response
        return response()->json([
           'club_members' => $clubMember
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
    public function update(ClubMemberRequest $request, $id)
    {
        try {
            $clubMember = ClubMember::find($id);
            // $clubMember = ClubMember::where('clubId', $id)->first();

            if(!$clubMember){
              return response()->json([
                'message'=>'Club member not found!'
              ],404);
            }
    
            $clubMember->clubId = $request->clubId;
            $clubMember->studentMatricNum = $request->studentMatricNum;
            $clubMember->yearJoined = $request->yearJoined;
            
            // Update club member
            $clubMember->save();
    
            // Return Json Response
            return response()->json([
                'message' => "Club member successfully updated!"
            ],200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Opps.. Something went wrong! Unable to update club member."
            ],500);
            }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Club Member Detail 
        $clubMember = ClubMember::find($id);
        if(!$clubMember){
        return response()->json([
            'message'=>'Club member not found!'
        ],404);
        }

        // Delete Club Member
        $clubMember->delete();

        // Return Json Response
        return response()->json([
            'message' => "Club member successfully deleted!"
        ],200);
    }
}
