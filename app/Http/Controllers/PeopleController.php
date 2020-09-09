<?php

namespace App\Http\Controllers;

use App\People;
use App\Services\PriceService;
use Illuminate\Http\Request;

class PeopleController extends Controller
{
    public function get(Request $request)
    {
        $people = People::orderBy('id', 'desc')->offset($request->get('start'))->limit($request->get('length'))->get();
        $peopleCount = People::all()->count();
        $data = [];

        foreach ($people as $item) {
            $dataArray = [
                $item->name,
                PriceService::getGrivnas($item->cash),
                '<a href="#" class="btn btn-xs btn-success waves-effect waves-themed editPeople" data-toggle="modal" data-target="#editPeopleDialog" title="Редагувати" data-item="'.$item->id.'"><i class="fal fa-edit"></i></a> |||||  <a href="#" class="btn btn-xs btn-danger waves-effect waves-themed deletePeople" title="Видалити" data-item="'.$item->id.'"><i class="fal fa-trash"></i></a>',
            ];

            $data[] = $dataArray;
        }

        return response()->json(['data' => $data,'recordsTotal' => $peopleCount,   'recordsFiltered' => $peopleCount]);

    }

    public function add(Request $request) {
        if(!$request->get('name')) {
            return response(false);
        }

        if(!$request->get('cash')) {
            return response(false);
        }

        $people = new People();
        $people->name = $request->get('name');
        $people->cash = PriceService::getPenny($request->get('cash'));
        if($people->save()) {
            return response(true);
        }
    }

    public function update(Request $request, People $people) {
        if(!$request->get('name')) {
            return response(false);
        }

        if(!$request->get('cash')) {
            return response(false);
        }
        $people->name = $request->get('name');
        $people->cash = PriceService::getPenny($request->get('cash'));
        if($people->save()) {
            return response(true);
        }
    }

    public function delete(Request $request, People $people) {
        if($people->delete()) {
            return response(true);
        }
    }

    public function getOne(Request $request)
    {
        $people = People::find((int)$request->get('item'));
        if(!$people) {
            return response(false);
        }

        return response(['name' => $people->name, 'cash' => PriceService::getGrivnas($people->cash), 'id' => $people->id]);
    }
}
