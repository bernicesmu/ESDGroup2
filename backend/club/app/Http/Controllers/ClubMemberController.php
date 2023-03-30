<?php

namespace App\Http\Controllers;
use App\Models\ClubMember;
use Illuminate\Http\Request;
use App\Http\Requests\ClubMemberRequest;
use Illuminate\Validation\ValidationException;

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
     * Store a newly created resource in storage.
     */


    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'clubId' => 'required|exists:clubs,id',
                'studentMatricNum' => 'required|string',
                'yearJoined' => 'required|integer|year',
            ]);
    
            // Create Club Member
            ClubMember::create($validatedData);
    
            // Return Json Response
            return response()->json([
                'message' => "Congratulations, club member successfully created."
            ], 200);
        } catch (ValidationException $e) {
            // Return Custom Json Response
            return response()->json([
                'message' => "Opps, club member could not be created.",
                'errors' => $e->validator->errors()
            ], 422);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Opps.. Something went wrong! A club could not be created!",
                'error' => $e->getMessage()
            ], 500);
        }
    }


    // Get list of student matric numbers from clubID
    public function show($id)
{
    $clubMembers = ClubMember::where('clubId',$id)->get();

    if($clubMembers->isEmpty()){
        return response()->json([
            'message' => 'Club member not found!'
        ],404);
    }

    $matricNumbers = [];
    foreach ($clubMembers as $clubMember) {
        $matricNumbers[] = $clubMember->studentMatricNum;
    }

    return response()->json(['data' => $matricNumbers], 200);
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
