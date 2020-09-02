@extends('layouts.account.index')
@section('content')
    <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
            <h2>Результат</h2>
            <div class="panel panel-locked">
                <div class="bg-for-panel">
                    <div class="col-lg-6 col-xs-6 col-sm-6 ">
                        <h2 class="float-left">
                            <a href="#"
                               class="btn btn-outline-success waves-effect waves-themed" id="addReason" data-toggle="modal" data-target="#addReasonDialog"><i class="fal fa-plus"
                                                                                            aria-hidden="true"></i> Створити</a>
                        </h2>
                    </div>
                </div>
                <div class="panel-container show">
                    <div class="panel-content">
                        <div class="row">
                            <div class="col-sm-12">
                                    <table id="results"
                                       class="table table-bordered table-hover table-striped w-100 dataTable dtr-inline"
                                       role="grid"
                                      >
                                    <thead>
                                    <tr>
                                        <th>Назва</th>
                                        <th>Дії</th>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
            <h2>Люди</h2>
            <div class="panel panel-locked">
                <div class="bg-for-panel">
                    <div class="col-lg-6 col-xs-6 col-sm-6 ">
                        <h2 class="float-left">
                            <a href="#"
                               class="btn btn-outline-success waves-effect waves-themed"><i class="fal fa-plus"
                                                                                            aria-hidden="true"></i>Додати</a>
                        </h2>
                    </div>
                </div>
                <div class="panel-container show">
                    <div class="panel-content">
                        <div class="row">
                            <div class="col-sm-12">
                                <table id="people"
                                       class="table table-bordered table-hover table-striped w-100 dataTable dtr-inline"
                                       role="grid"
                                      >
                                    <thead>
                                    <tr>
                                        <th>ПІП</th>
                                        <th>Рахунок</th>
                                        <th>Дії</th>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
            <h2>Виконані ставки</h2>
            <div class="panel panel-locked">
                <div class="bg-for-panel">

                </div>
                <div class="panel-container show">
                    <div class="panel-content">
                        <div class="row">

                            <div class="col-sm-12">
                                <table id="pastResults"
                                       class="table table-bordered table-hover table-striped w-100 dataTable dtr-inline"
                                       role="grid"
                                      >
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>ПІП</th>
                                        <th>Причина</th>
                                        <th>Коефіцієнт</th>
                                        <th>Результат</th>
                                        <th>Гроші</th>
                                        <th>Дата</th>

                                    </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
            <h2>Ставки</h2>
            <div class="panel panel-locked">
                <div class="bg-for-panel">

                </div>
                <div class="panel-container show">
                    <div class="panel-content">
                        <div class="row">
                            <div class="col-sm-12">
                                <table id="activeResults"
                                       class="table table-bordered table-hover table-striped w-100 dataTable dtr-inline"
                                       role="grid"
                                      >
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>ПІП</th>
                                        <th>Причина</th>
                                        <th>Коефіцієнт</th>
                                        <th>Результат</th>
                                        <th>Гроші</th>
                                        <th>Дата</th>
                                        <th>Дії</th>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 text-center">
            <button type="button" class="btn btn-outline-success btn-pills btn-lg btn-block waves-effect waves-themed">Зробити ставку
            </button>
        </div>
    </div>




    <div class="modal fade" id="addReasonDialog" tabindex="-1" role="dialog" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">
                        Додати результат
                    </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fal fa-times"></i></span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label class="form-label" for="simpleinput">Назва</label>
                            <input type="text" id="reasonName" class="form-control">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect waves-themed closeButton" data-dismiss="modal">Відмінити</button>
                    <button type="button" class="btn btn-primary waves-effect waves-themed " id="addReasonModal">Зберегти</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="editReasonDialog" tabindex="-1" role="dialog" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">
                        Редагувати результат
                    </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fal fa-times"></i></span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label class="form-label" for="simpleinput">Назва</label>
                            <input type="text" id="reasonNameEdit" class="form-control">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect waves-themed closeButton" data-dismiss="modal">Відмінити</button>
                    <button type="button" class="btn btn-primary waves-effect waves-themed " id="addReasonModal">Зберегти</button>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    <script src="acc/js/my_app.js"></script>
@endsection