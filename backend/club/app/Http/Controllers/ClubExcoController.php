<?php

namespace App\Http\Controllers;
use App\Models\ClubExco;
use Illuminate\Http\Request;
use App\Http\Requests\ClubExcoRequest;
use Illuminate\Validation\ValidationException;

class ClubExcoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // All club exco
        $clubExco = ClubExco::all();
        // $clubExco = ClubExco::table('club_excos')->get();

        // Return Json Response
        return response()->json([
            'club_excos' => $clubExco
        ],200);
    
    }

    /**

     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'clubMemberId' => 'required|unique:club_excos',
                'role' => 'required|string',
                'roleFromDate' => 'required|date',
                'roleToDate' => 'required|date',
            ]);

            // Create Club exco
            ClubExco::create($validatedData);

            // Return Json Response
            return response()->json([
                'message' => "Congratulations, new club exco added successfully."
            ], 200);
        } catch (ValidationException $e) {
            // Return Custom Json Response
            return response()->json([
                'message' => "Opps, club exco could not be created.",
                'errors' => $e->validator->errors()
            ], 422);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Opps.. Something went wrong! A club exco couldn't be added.",
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Exco Detail 
        $clubExco = ClubExco::find($id);
        // $clubExco = ClubExco::table('club_excos')->get();
        if(!$clubExco){
            return response()->json([
                'message'=>'Club exco not found.'
            ],404);
        }

        // Return Json Response
        return response()->json([
            'club_exco' => $clubExco
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
    public function update(ClubExcoRequest $request, $id)
    {
        try {
            $clubExco = ClubExco::find($id);
            if(!$clubExco){
              return response()->json([
                'message'=>'Club exco not found!'
              ],404);
            }
    
            $clubExco->clubMemberId = $request->clubMemberId;
            $clubExco->role = $request->role;
            $clubExco->roleFromDate = $request->roleFromDate;
            $clubExco->roleToDate = $request->roleToDate;
            
            // Update Club Exco
            $clubExco->save();
    
            // Return Json Response
            return response()->json([
                'message' => "Club exco successfully updated!"
            ],200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Opps.. Something went wrong! Unable to update club exco."
            ],500);
            }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Club Exco Detail 
        $clubExco = ClubExco::find($id);
        if(!$clubExco){
        return response()->json([
            'message'=>'Club exco not found!'
        ],404);
        }

        // Delete Club Exco
        $clubExco->delete();

        // Return Json Response
        return response()->json([
            'message' => "Club exco successfully deleted!"
        ],200);
    }
    
}
?>