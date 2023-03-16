<?php

namespace App\Http\Controllers;
use App\Models\Club;
use Illuminate\Http\Request;
use App\Http\Requests\ClubRequest;

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
     * Show the form for creating a new resource.
     */
    public function create(\Illuminate\Http\Request $request)
    {
        //
        try {

        // Create Club
        Club::create([
            'clubName' => $request->clubName,
            'clubCategory' => $request -> clubCategory,
            'cbd' => $request->cbd
        ]);

        // Return Json Response
        return response()->json([
            'message' => "Congratulations, club successfully created."
        ],200);
    } catch (\Exception $e) {
        // Return Json Response
        return response()->json([
            'message' => "Opps.. Something went wrong! A club could not be created!"
        ],500);
    }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ClubRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Club details
        $club = Club::find($id);
        if(!$club){
            return response()->json([
                'message'=>'Club Not Found.'
            ],404);
        }

        // Return Json Response
        return response()->json([
            'club' => $club
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
        // Post Detail 
        $club = Club::find($id);
        if(!$club){
        return response()->json([
            'message'=>'clubs Not Found.'
        ],404);
        }

        // Delete Post
        $club->delete();

        // Return Json Response
        return response()->json([
            'message' => "Post successfully deleted."
        ],200);
    }
}

?>