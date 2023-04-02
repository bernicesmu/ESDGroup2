<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

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
    public function boot()
    {
        //
        Validator::extend('year', function ($attribute, $value, $parameters, $validator) {
            return preg_match('/^\d{4}$/', $value) && $value >= 1900 && $value <= date('Y');
        });

    
        Validator::extend('unsignedBigInteger', function ($attribute, $value, $parameters, $validator) {
            return is_int($value) && $value >= 0 && $value <= 18446744073709551615;
        });
    
    }
}
