<?php

namespace App\Http\Controllers;
use App\Models\Club;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ClubController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Get all clubs
        $clubs = Club::all();

        // Return Json Response
        return response()->json([
            'clubs' => $clubs
        ],200);
        // return view('clubs', ['clubs' => $clubs]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'clubName' => 'required|unique:clubs|max:255',
                'clubCategory' => 'required',
                'cbd' => 'required',
            ]);
    
            // Create Club
            Club::create($validatedData);
    
            // Return Json Response
            return response()->json([
                'message' => "Congratulations, club successfully created."
            ], 200);
        } catch (ValidationException $e) {
            // Return Custom Json Response
            return response()->json([
                'message' => "Opps, club could not be created.",
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
     public function show($id)
    {
        $club = Club::find($id);
        // $club = DB::table('clubs')->find($id);
        if (!$club) {
            return response()->json([
                'message' => 'Club not found'
            ], 404);
        }
        return response($club->clubName, 200)
        ->header('Content-Type', 'text/plain');
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
    public function update(\Illuminate\Http\Request $request, $id)
    {
        try {
        $club = Club::find($id);
        if(!$club){
          return response()->json([
            'message'=>'Club Not Found.'
          ],404);
        }

        $club->clubName = $request->clubName;
        $club->clubCategory = $request->clubCategory;
        $club->cbd = $request->cbd;
        
        // Update club
        $club->save();

        // Return Json Response
        return response()->json([
            'message' => "Club successfully updated!"
        ],200);
    } catch (\Exception $e) {
        // Return Json Response
        return response()->json([
            'message' => "Opps.. Something went wrong!"
        ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
    {
        // Club Detail 
        $club = Club::find($id);
        if(!$club){
        return response()->json([
            'message'=>'Club not found!'
        ],404);
        }

        // Delete Club
        $club->delete();

        // Return Json Response
        return response()->json([
            'message' => "Club successfully deleted!"
        ],200);
    }
}

?>