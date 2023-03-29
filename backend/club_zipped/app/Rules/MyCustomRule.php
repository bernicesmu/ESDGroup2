<?php
namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class UnsignedBigIntegerRule implements Rule
{
    public function passes($attribute, $value)
    {
        return is_numeric($value) && $value >= 0 && $value <= 18446744073709551615;
    }

    public function message()
    {
        return 'The :attribute field must be an unsigned big integer.';
    }
}
?>