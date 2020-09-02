<?php

namespace App\Services;

class PriceService
{
    public static function getPenny($grivnas)
    {
        return $grivnas * 100;
    }

    public static function getGrivnas($penny)
    {
        return round($penny / 100, 2);
    }
}