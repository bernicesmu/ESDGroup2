<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClubExcoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {

        
        if(request()->isMethod('post')) {
            return [
                'clubMemberId' => 'required|unsignedBigInteger',
                'role' => 'required|string',
                'roleFromDate' => 'required|date',
                'roleToDate' => 'required|date'
            ];
        } else {
            return [
                'clubMemberId' => 'required|unsignedBigInteger',
                'role' => 'required|string',
                'roleFromDate' => 'required|date',
                'roleToDate' => 'required|date'
            ];
        }
    }

    public function messages()
    {
        if(request()->isMethod('post')) {
            return [
                'clubMemberId.required' => 'Club member ID is required!',
                'role.required' => 'Role in club is required!',
                'roleFromDate.required' => 'Starting date in role is required!',
                'roleToDate.required' => 'End date in role is required!'
            ];
        } else {
            return [
                'clubMemberId.required' => 'Club member ID is required!',
                'role.required' => 'Role in club is required!',
                'roleFromDate.required' => 'Starting date in role is required!',
                'roleToDate.required' => 'End date in role is required!'
            ];   
        }
    }
}
?>