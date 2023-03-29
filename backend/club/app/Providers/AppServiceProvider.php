<?php

namespace App\Providers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Validation for year
        Validator::extend('year', function ($attribute, $value, $parameters, $validator) {
            return preg_match('/^\d{4}$/', $value) && $value >= 1900 && $value <= date('Y');
        });

        // Validation for unsigned big integer
        Validator::extend('unsignedBigInteger', function ($attribute, $value, $parameters, $validator) {
            return is_int($value) && $value >= 0 && $value <= 18446744073709551615;
        });
    }
}
