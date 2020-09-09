<?php

namespace App\Http\Controllers;

use App\People;
use App\Reason;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function main(){
        return view('main', ['peoples' => People::all(), 'reasons' => Reason::all()]);
    }

    public function getResults(Request $request)
    {
        $reasons = Reason::orderBy('id', 'desc')->offset($request->get('start'))->limit($request->get('length'))->get();
        $reasonsCount = Reason::all()->count();
        $data = [];

        foreach ($reasons as $reason) {
            $dataArray = [
                $reason->name,
                '<a href="#" class="btn btn-xs btn-success waves-effect waves-themed editReason" data-toggle="modal" data-target="#editReasonDialog" title="Редагувати" data-item="'.$reason->id.'"><i class="fal fa-edit"></i></a> |||||  <a href="#" class="btn btn-xs btn-danger waves-effect waves-themed deleteReason" title="Видалити" data-item="'.$reason->id.'"><i class="fal fa-trash"></i></a>',
            ];

            $data[] = $dataArray;
        }

        return response()->json(['data' => $data,'recordsTotal' => $reasonsCount,   'recordsFiltered' => $reasonsCount]);

    }

    public function addResult(Request $request) {
        if(!$request->get('name')) {
            return response(false);
        }

        $reason = new Reason();
        $reason->name = $request->get('name');
        if($reason->save()) {
            return response(true);
        }
    }

    public function updateResult(Request $request, Reason $reason) {
        if(!$request->get('name')) {
            return response(false);
        }

        $reason->name = $request->get('name');
        if($reason->save()) {
            return response(true);
        }
    }

    public function getOneReason(Request $request)
    {
        $reason = Reason::find((int)$request->get('item'));
        if(!$reason) {
            return response(false);
        }

        return response(['name' => $reason->name, 'id' => $reason->id]);
    }

    public function deleteResult(Request $request, Reason $reason) {
        if($reason->delete()) {
            return response(true);
        }
    }
}
