<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\UnsignedBigIntegerRule;
class ClubMemberRequest extends FormRequest
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
                'clubId' => 'required|integer',
                'studentMatricNum' => 'required|string',
                'yearJoined' => 'required|integer|year'
            ];
        } else {
            return [
                'clubId' => 'required|integer',
                'studentMatricNum' => 'required|string',
                'yearJoined' => 'required|integer|year'
            ];
        }
    }

    public function messages()
    {
        if(request()->isMethod('post')) {
            return [
                'clubId.required' => 'Club ID is required!',
                'studentMatricNum.required' => 'Student Matriculation Number is required!',
                'yearJoined.required' => 'Year joined is required!'
            ];
        } else {
            return [
                'clubId.required' => 'Club ID is required!',
                'studentMatricNum.required' => 'Student Matriculation Number is required!',
                'yearJoined.required' => 'Year joined is required!'
            ];   
        }
    }
}
