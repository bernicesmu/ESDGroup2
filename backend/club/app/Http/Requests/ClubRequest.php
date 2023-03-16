<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClubRequest extends FormRequest
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
                'clubName' => 'required|string|max:258',
                'clubCategory' => 'required|string',
                'cbd' => 'required|string'
            ];
        } else {
            return [
                'clubName' => 'required|string|max:258',
                'clubCategory' => 'required|string',
                'cbd' => 'required|string'
            ];
        }

        
    }

    public function messages()
    {
        if(request()->isMethod('post')) {
            return [
                'clubName.required' => 'Club name is required!',
                'clubCategory.required' => 'Club category is required!',
                'cbd.required' => 'cbd is required!'
            ];
        } else {
            return [
                'clubName.required' => 'Club name is required!',
                'clubCategory.required' => 'Club category is required!',
                'cbd.required' => 'Constituent body is required!'
            ];   
        }
    }
}

?>