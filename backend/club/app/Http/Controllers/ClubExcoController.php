<?php

namespace App\Http\Controllers;
use App\Models\ClubExco;
use Illuminate\Http\Request;
use App\Http\Requests\ClubExcoRequest;

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
    public function show($id)
    {
        // Exco Detail 
        $clubExco = ClubExco::find($id);
        // $clubExco = ClubExco::table('club_excos')->get();
        if(!$clubExco){
            return response()->json([
                'message'=>'Club exco Not Found.'
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
