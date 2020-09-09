<?php

namespace App\Http\Controllers;

use App\People;
use App\Reason;
use App\Result;
use App\Services\PriceService;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function add(Request $request)
    {
        //dd($request->all());
        if(!$request->get('people')) {
            return response()->json(false);
        }
        if(!$request->get('reasons')) {
            return response()->json(false);
        }
        if(!$request->get('coef')) {
            return response()->json(false);
        }
        if(!$request->get('cash')) {
            return response()->json(false);
        }

        $people = People::find((int)$request->get('people'));
        $textReasons = '';
        $reasons = explode(',', $request->get('reasons'));
        foreach ($reasons as $reason) {
            $textReasons .=Reason::find((int)$reason)->name . ' ';
        }
        if(!$people) {
            return response()->json(false);
        }


        $result = new Result();

        if($request->get('name')) {
            $result->name = $request->get('name');
        }
        $result->people = $people->name;
        $result->people_id = (int)$people->id;
        $result->reasons = $textReasons;
        $result->coef = PriceService::getPenny($request->get('coef'));
        $result->status = 2;
        $result->cash = PriceService::getPenny($request->get('cash'));
        $result->cashWin = PriceService::getGrivnas(PriceService::getPenny($request->get('cash')) * PriceService::getPenny($request->get('coef')));
        $result->save();

        $people->cash -= $result->cash;
        $people->save();

        return response()->json(true);
    }

    public function result(Request $request, Result $result)
    {
        $people = People::find($result->people_id);


        if ($request->get('res')) {
            if($people) {
               $people->cash += $result->cashWin;
               $people->save();

            }
            $result->status = 1;
        } else {
            $result->status = 0;
        }

        $result->save();

        return response()->json(true);

    }

    public function get(Request $request)
    {
        if($request->get('status') == 2) {
            $results = Result::where('status', '=' ,2);
            $resultsCount = $results->count();
            $results = $results->orderBy('id', 'desc')->offset($request->get('start'))->limit($request->get('length'))->get();
            $data = [];
            foreach ($results as $result) {
                $dataArray = [
                    $result->id,
                    $result->people,
                    $result->reasons,
                    PriceService::getGrivnas($result->coef),
                    PriceService::getGrivnas($result->cash),
                    PriceService::getGrivnas($result->cashWin),
                    Carbon::parse($result->created_at)->format('d-m-Y H:i'),
                    '<a href="#" class="btn btn-xs btn-success waves-effect waves-themed yes"  title="Виграш" data-item="'.$result->id.'">Yes</a> |||||  <a href="#" class="btn btn-xs btn-danger waves-effect waves-themed no" title="Програш" data-item="'.$result->id.'">No</a>',
                ];

                $data[] = $dataArray;
            }
        } else {
            $results = Result::where('status', '<>' ,2);
            $resultsCount = $results->count();
            $results = $results->orderBy('id', 'desc')->offset($request->get('start'))->limit($request->get('length'))->get();
            $data = [];
            foreach ($results as $result) {
                $dataArray = [
                    $result->id,
                    $result->people,
                    $result->reasons,
                    PriceService::getGrivnas($result->coef),
                    $result->status ? 'Yes' : 'No',
                    PriceService::getGrivnas($result->cash),
                    $result->status ? PriceService::getGrivnas($result->cashWin) : '-' . PriceService::getGrivnas($result->cash),
                    Carbon::parse($result->created_at)->format('d-m-Y H:i'),
                ];

                $data[] = $dataArray;
            }
        }
        return response()->json(['data' => $data,'recordsTotal' => $resultsCount,   'recordsFiltered' => $resultsCount]);
    }
}
