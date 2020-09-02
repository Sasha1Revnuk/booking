<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>
        Ставки ПЕС
    </title>
    <meta name="description" content="Marketing Dashboard">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui">
    <!-- Call App Mode on ios devices -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <!-- Remove Tap Highlight on Windows Phone IE -->
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- base css -->
    <link rel="stylesheet" media="screen, print" href="{{asset('acc/css/vendors.bundle.css')}}">
    <link rel="stylesheet" media="screen, print" href="{{asset('acc/css/app.bundle.css')}}">
    <!-- Place favicon.ico in the root directory -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('acc/img/favicon/apple-touch-icon.png')}}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('acc/img/favicon/favicon-32x32.png')}}">
    <link rel="mask-icon" href="{{asset('acc/img/favicon/safari-pinned-tab.svg')}}" color="#5bbad5">
    <link rel="stylesheet" media="screen, print" href="{{asset('acc/css/datagrid/datatables/datatables.bundle.css')}}">
    <link rel="stylesheet" href="{{asset('acc/css/custom.css')}}">
    <link rel="stylesheet" media="screen, print"href="{{asset('acc/css/formplugins/bootstrap-datepicker/bootstrap-datepicker.css')}}">
    <link rel="stylesheet" href="{{asset('acc/css/notifications/sweetalert2/sweetalert2.bundle.css')}}">
    <link rel="stylesheet" href="{{asset('acc/css/bootstrap-clockpicker.min.css')}}">
    <link rel="stylesheet" media="screen, print" href="{{asset('acc/css/formplugins/select2/select2.bundle.css')}}">
    <link rel="stylesheet" media="screen, print" href="{{asset('acc/css/formplugins/summernote/summernote.css')}}">
    <link rel="stylesheet" media="screen, print" href="{{asset('acc/css/statistics/chartjs/chartjs.css')}}">
    <style type="text/css">/* Chart.js */
        /*
         * DOM element rendering detection
         * https://davidwalsh.name/detect-node-insertion
         */
        @keyframes chartjs-render-animation {
            from { opacity: 0.99; }
            to { opacity: 1; }
        }

        .chartjs-render-monitor {
            animation: chartjs-render-animation 0.001s;
        }

        /*
         * DOM element resizing detection
         * https://github.com/marcj/css-element-queries
         */
        .chartjs-size-monitor,
        .chartjs-size-monitor-expand,
        .chartjs-size-monitor-shrink {
            position: absolute;
            direction: ltr;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
            pointer-events: none;
            visibility: hidden;
            z-index: -1;
        }

        .chartjs-size-monitor-expand > div {
            position: absolute;
            width: 1000000px;
            height: 1000000px;
            left: 0;
            top: 0;
        }

        .chartjs-size-monitor-shrink > div {
            position: absolute;
            width: 200%;
            height: 200%;
            left: 0;
            top: 0;
        }
    </style>

</head>
<body class="mod-bg-1 ">
<script>
    var classHolder = document.getElementsByTagName("BODY")[0],
        themeSettings = (localStorage.getItem('themeSettings')) ? JSON.parse(localStorage.getItem('themeSettings')) :
            {},
        themeURL = themeSettings.themeURL || '',
        themeOptions = themeSettings.themeOptions || '';
</script>
<!-- BEGIN Page Wrapper -->
<div class="page-wrapper">
    <div class="page-inner">
        <!-- BEGIN Left Aside -->

        <!-- END Left Aside -->
        <div class="page-content-wrapper">
            <!-- BEGIN Page Header -->
            <header class="page-header" role="banner">
                <!-- DOC: nav menu layout change shortcut -->
                <!-- DOC: mobile button appears during mobile width -->
                <div class="hidden-lg-up">
                    <a href="#" class="header-btn btn press-scale-down" data-action="toggle" data-class="mobile-nav-on">
                        <i class="ni ni-menu"></i>
                    </a>
                </div>
                <div class="ml-auto d-flex">

                </div>
            </header>
            <!-- END Page Header -->
            <!-- BEGIN Page Content -->
            <!-- the #js-page-content id is needed for some plugins to initialize -->
            <main id="js-page-content" role="main" class="page-content">
                <div class="subheader">

                </div>
                @yield('content')
            </main>
            <!-- this overlay is activated only when mobile menu is triggered -->
            <div class="page-content-overlay" data-action="toggle" data-class="mobile-nav-on"></div> <!-- END Page Content -->
            <!-- BEGIN Page Footer -->
            <footer class="page-footer" role="contentinfo">
                <div class="d-flex align-items-center flex-1 text-muted"></div>

            </footer>
            <!-- END Page Footer -->
            <!-- BEGIN Shortcuts -->
            <!-- modal shortcut -->
        </div>
    </div>
</div>
<!-- END Page Wrapper -->
<!-- BEGIN Quick Menu -->
<!-- to add more items, please make sure to chane the variable '$menu-items: number;' in your _page-components-shortcut.scss -->
<!-- END Quick Menu -->
<script src="{{asset('acc/js/vendors.bundle.js')}}"></script>
<script src="{{asset('acc/js/app.bundle.js')}}"></script>
<script type="text/javascript">
    $('#js-page-content').smartPanel();

    if (window.Waves && myapp_config.rippleEffect) {
        Waves.attach('.nav-menu:not(.js-waves-off) a, .btn:not(.js-waves-off):not(.btn-switch), .js-waves-on', ['waves-themed']);
        Waves.init();
    }
</script>

<script src="{{asset('acc/js/datagrid/datatables/datatables.bundle.js')}}"></script>
<script src="{{asset('acc/js/formplugins/bootstrap-datepicker/bootstrap-datepicker.js')}}"></script>
<script src="{{asset('acc/js/notifications/sweetalert2/sweetalert2.bundle.js')}}"></script>
<script src="{{asset('acc/js/bootstrap-clockpicker.min.js')}}"></script>
<script src="{{asset('acc/js/formplugins/bootstrap-datepicker.ua.js')}}"></script>
<script src="{{asset('acc/js/formplugins/inputmask/inputmask.bundle.js')}}"></script>
<script src="{{asset('acc/js/formplugins/select2/select2.bundle.js')}}"></script>
<script src="{{asset('acc/js/formplugins/summernote/summernote.js')}}"></script>
<script src="{{asset('acc/js/datagrid/datatables/datatables.export.js')}}"></script>
<script src="{{asset('acc/js/statistics/chartjs/chartjs.bundle.js')}}"></script>
<script src="{{asset('acc/js/ckeditor/ckeditor.js')}}"></script>
<script src="{{asset('acc/js/moment.min.js')}}"></script>


@yield('scripts')

</body>
</html>
