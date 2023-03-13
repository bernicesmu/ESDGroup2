<?php

namespace App\Http\Controllers;
use App\Models\Club;
use Illuminate\Http\Request\ClubRequest;

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
            'message' => "Opps.. Something went wrong!"
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
    public function show(string $id)
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
