<?php

namespace App\Http\Controllers;
use App\Models\Club;

use Illuminate\Http\Request;

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
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
