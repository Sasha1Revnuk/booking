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

    function closeModal(ids) {
        $.each( ids, function( index, value ){
            $(value).val(' ')
        });
    }

    $('.closeButton').click(function () {
        closeModal(['#reasonName'])
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

    $('body').on('click', '.editReason', function () {
        event.preventDefault();
        $.ajax({
            type: 'GET',
            url: '/api/results/for',
            data: {
              // item: $(this).attr('data-item')
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
            }

        })
    })

})