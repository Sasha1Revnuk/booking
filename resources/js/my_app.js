$(document).ready(function () {
    let results = $('#results').DataTable( {
        processing: true,
        serverSide: true,
        lengthMenu: [ 10, 25, 50],
        searching: false,
        ordering: false,
        language: {
            "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Ukrainian.json"
        },
        responsive: true,
        columns: [
            { name: "name", className: "table-text-align-center", width: "75%" },
            { name: "actions", className: "table-text-align-center", width: "25%"},
        ],
        ajax: {
            url:'/api/results/get',
            type: "GET"
        }
                } );
    let people = $('#people').DataTable( {
        processing: true,
        serverSide: true,
        lengthMenu: [ 10, 25, 50],
        searching: false,
        ordering: false,
        language: {
            "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Ukrainian.json"
        },
        responsive: true,
        columns: [
            { name: "name", className: "table-text-align-center", width: "50%" },
            { name: "cache", className: "table-text-align-center", width: "25%" },
            { name: "actions", className: "table-text-align-center", width: "25%"},
        ],
        ajax: {
            url:'/api/people/get',
            type: "GET"
        }
                } );

    function closeModal(ids) {
        $.each( ids, function( index, value ){
            $(value).val(' ')
        });
    }

    $('.closeButton').click(function () {
        closeModal(['#reasonName', '#reasonNameEdit', '#peopleNameAdd', '#peopleCacheAdd', '#peopleNameEdit', '#peopleCacheEdit'])
    })

    $('#addReasonModal').click(function () {
        event.preventDefault();

        $.ajax({
            type: 'GET',
            url: '/api/results/add',
            data: {
                name: function () {return $('#reasonName').val()},
            }
        }).then((response) => {
            results.ajax.reload();
            if(!response) {
                Swal.fire({
                    title: 'Результат не додано',
                    text: 'Нерпавильно заповнені поля',
                    type: 'error',
                    confirmButtonColor: '#d33d33',
                    confirmButtonText: 'OK',
                })} else {
                Swal.fire({
                    title: 'Результат додано',
                    type: 'info',
                    confirmButtonText: 'OK',
                })
            }

        })
        $('.closeButton').click()
    })
    $('#addPeopleModal').click(function () {
        event.preventDefault();

        $.ajax({
            type: 'GET',
            url: '/api/people/add',
            data: {
                name: function () {return $('#peopleNameAdd').val()},
                cash: function () {return $('#peopleCacheAdd').val()},
            }
        }).then((response) => {
            results.ajax.reload();
            if(!response) {
                Swal.fire({
                    title: 'Людину не додано',
                    text: 'Нерпавильно заповнені поля',
                    type: 'error',
                    confirmButtonColor: '#d33d33',
                    confirmButtonText: 'OK',
                })} else {
                Swal.fire({
                    title: 'Людину додано',
                    type: 'info',
                    confirmButtonText: 'OK',
                })
            }

        })
        $('.closeButton').click()
        people.ajax.reload()
    })

    $('body').on('click', '.editReason', function () {
        event.preventDefault();
        $.ajax({
            type: 'GET',
            url: '/api/results/single-reason',
            data: {
               item: $(this).attr('data-item')
            }
        }).then((response) => {
            if(!response) {
                Swal.fire({
                    title: 'Помилка',
                    text: 'Не чудіть',
                    type: 'error',
                    confirmButtonColor: '#d33d33',
                    confirmButtonText: 'OK',
                })} else {
                $('#reasonNameEdit').val(response.name)
                $('#editReasonModal').attr('data-item', response.id)
            }

        })
    })
    $('body').on('click', '.editPeople', function () {
        event.preventDefault();
        $.ajax({
            type: 'GET',
            url: '/api/people/single',
            data: {
               item: $(this).attr('data-item')
            }
        }).then((response) => {
            if(!response) {
                $('.closeButton').click()
                Swal.fire({
                    title: 'Помилка',
                    text: 'Не чудіть',
                    type: 'error',
                    confirmButtonColor: '#d33d33',
                    confirmButtonText: 'OK',
                })} else {
                $('#peopleNameEdit').val(response.name)
                $('#peopleCacheEdit').val(response.cash)
                $('#editPeopleModal').attr('data-item', response.id)
            }

        })
    })
    $('body').on('click', '.deletePeople', function () {
        event.preventDefault();
        $.ajax({
            type: 'GET',
            url: '/api/people/delete/' + $(this).attr('data-item'),
        }).then((response) => {
            if(!response) {
                Swal.fire({
                    title: 'Помилка',
                    text: 'Не чудіть',
                    type: 'error',
                    confirmButtonColor: '#d33d33',
                    confirmButtonText: 'OK',
                })} else {
                Swal.fire({
                    title: 'Видалено',
                    text: 'Користувача видалено',
                    type: 'info',
                    confirmButtonColor: '#d33d33',
                    confirmButtonText: 'OK',
                })}
            people.ajax.reload()

        })
    })
    $('body').on('click', '.deleteReason', function () {
        event.preventDefault();
        $.ajax({
            type: 'GET',
            url: '/api/results/delete/' + $(this).attr('data-item'),
        }).then((response) => {
            if(!response) {
                Swal.fire({
                    title: 'Помилка',
                    text: 'Не чудіть',
                    type: 'error',
                    confirmButtonColor: '#d33d33',
                    confirmButtonText: 'OK',
                })} else {
                Swal.fire({
                    title: 'Видалено',
                    text: 'Результат видалено',
                    type: 'info',
                    confirmButtonColor: '#d33d33',
                    confirmButtonText: 'OK',
                })}
            results.ajax.reload()

        })
    })

    $('#editPeopleModal').click(function () {
        event.preventDefault();
        $.ajax({
            type: 'GET',
            url: '/api/people/update/'+$(this).attr('data-item'),
            data: {
                name: function () {return $('#peopleNameEdit').val()},
                cash: function () {return $('#peopleCacheEdit').val()},
            }
        }).then((response) => {
            results.ajax.reload();
            if(!response) {
                Swal.fire({
                    title: 'Дані не змінено',
                    text: 'Нерпавильно заповнені поля',
                    type: 'error',
                    confirmButtonColor: '#d33d33',
                    confirmButtonText: 'OK',
                })} else {
                Swal.fire({
                    title: 'Дані змінено',
                    type: 'info',
                    confirmButtonText: 'OK',
                })
            }

        })
        $('.closeButton').click()
        people.ajax.reload()
    })

    $('#reloadName').click(function () {
        if($('#matchName').val() == "Vika Flex vs Enemy") {
            $('#matchName').val('Enemy vs Vika Flex');
        } else {
            $('#matchName').val('Vika Flex vs Enemy');
        }
    })

    $('body').on('click', '#addOrderFor', function () {
        event.preventDefault();
        $.ajax({
            type: 'GET',
            url: '/api/booking/add',
            data: {
                name: function () {return $('#matchName').val()},
                people: function () {return $('#peopleDev').val()},
                reasons: function () {return $('#reason').val()},
                coef: function () {return $('#coef').val()},
                cash: function () {return $('#stavka').val()},
            }
        }).then((response) => {
            pastResult.ajax.reload();
            people.ajax.reload();
            realResult.ajax.reload();
            pastResult.ajax.reload();
            if(!response) {
                Swal.fire({
                    title: 'Ставка не зроблена',
                    text: 'Десь помилка',
                    type: 'error',
                    confirmButtonColor: '#d33d33',
                    confirmButtonText: 'OK',
                })} else {
                Swal.fire({
                    title: 'Ставка зроблена',
                    type: 'info',
                    confirmButtonText: 'OK',
                })
            }

        })
        $('.closeButton').click()
    })

    let realResult = $('#activeResults').DataTable( {
        processing: true,
        serverSide: true,
        lengthMenu: [ 10, 25, 50],
        searching: false,
        ordering: false,
        language: {
            "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Ukrainian.json"
        },
        responsive: true,
        columns: [
            { name: "a", className: "table-text-align-center"},
            { name: "b", className: "table-text-align-center"},
            { name: "c", className: "table-text-align-center"},
            { name: "d", className: "table-text-align-center"},
            { name: "e", className: "table-text-align-center"},
            { name: "f", className: "table-text-align-center"},
            { name: "g", className: "table-text-align-center"},
            { name: "h", className: "table-text-align-center"},

        ],
        ajax: {
            url:'/api/booking/get',
            type: "GET",
            data: {
                'status': 2
            }
        }
    } );
    let pastResult = $('#pastResults').DataTable( {
        processing: true,
        serverSide: true,
        lengthMenu: [ 10, 25, 50],
        searching: false,
        ordering: false,
        language: {
            "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Ukrainian.json"
        },
        responsive: true,
        columns: [
            { name: "a", className: "table-text-align-center"},
            { name: "b", className: "table-text-align-center"},
            { name: "c", className: "table-text-align-center"},
            { name: "d", className: "table-text-align-center"},
            { name: "e", className: "table-text-align-center"},
            { name: "f", className: "table-text-align-center"},
            { name: "g", className: "table-text-align-center"},
            { name: "h", className: "table-text-align-center"},

        ],
        ajax: {
            url:'/api/booking/get',
            type: "GET",
            data: {
                'status': 1
            }
        }
    } );

    $('body').on('click', '.yes', function () {
        event.preventDefault();
        $.ajax({
            type: 'GET',
            url: '/api/booking/result/' + $(this).attr('data-item'),
            data: {
                res: 1,
            }
        }).then((response) => {
            pastResult.ajax.reload();
            people.ajax.reload();
            realResult.ajax.reload();
            pastResult.ajax.reload();
        })
        $('.closeButton').click()
    })

    $('body').on('click', '.no', function () {
        event.preventDefault();
        $.ajax({
            type: 'GET',
            url: '/api/booking/result/' + $(this).attr('data-item'),
        }).then((response) => {
            pastResult.ajax.reload();
            people.ajax.reload();
            realResult.ajax.reload();
            pastResult.ajax.reload();
        })
        $('.closeButton').click()
    })


})