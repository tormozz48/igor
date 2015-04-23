(function () {
    var DeliveryController = function ($log) {
        $log.debug('Initialize delivery controller');

        this.title = 'Доставка';
        this.icon = 'glyphicon-globe';
        this.body = 'Доставка по Симферополю и городам Крыма';
    };

    var PaymentController = function ($log) {
        $log.debug('Initialize payment controller');

        this.title = 'Оплата';
        this.icon = 'glyphicon-shopping-cart';
        this.body = 'Наличный и безналичный расчет с НДС';
    };

    var MenuController = function ($log, $http) {
        var _this = this,
            url = './data/' + 'menu.json';

        this.onLoad = function () {
            $log.debug('Menu controller has been loaded');
            $http.get(url)
                .success(function(data, status) {
                    _this.items = data;
                    setTimeout(function () {
                        $('[data-toggle="popover"]').popover();
                    }, 300)
                })
                .error(function(data, status) {
                    $log.error('failed: ' + url + ' status:' + status);
                });
        };
    };

    function getProductController (dataFile, columns) {
        return function ($log, $http) {
            var _this = this,
                url = './data/' + dataFile + '.json';

            this.id = dataFile;
            this.sortField = '';
            this.sortDirection = true;

            this.columns = columns || [
                'Наименование',
                'Тип сырья',
                'Количество в упаковке'
            ];

            $http.get(url)
                .success(function(data, status) {
                    _this.title = data.title;
                    _this.items = data.items;
                })
                .error(function(data, status) {
                    $log.error('failed: ' + url + ' status:' + status);
                });
        };
    }

    var application = angular.module('app', ['scrollto']);
    application.controller('DeliveryController', DeliveryController);
    application.controller('PaymentController', PaymentController);
    application.controller('MenuController', MenuController);
    application.controller('CashTapeController', getProductController('cash-tape'));
    application.controller('CheckTapeController', getProductController('check-tape'));
    application.controller('FaxPaperController', getProductController('fax-paper'));
    application.controller('TermoLabelController', getProductController('termo-label'));
    application.controller('OfficePaperController', getProductController('office-paper'));
    application.controller('PaperLPUController', getProductController('paper-lpu'));
    application.controller('RollPaperController', getProductController('roll-paper'));
    application.controller('PlotterRollsController', getProductController('plotter-rolls'));
})();
