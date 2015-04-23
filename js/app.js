$(function () {
    $('[data-toggle="popover"]').popover()
});

(function() {

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

    var MenuController = function () {
        this.items = [
            { target: 'cash-tape', alt: 'Кассовая (чековая) лента, термолента для банкоматов и платежных терминалов' },
            { target: 'check-tape', alt: 'Чековая лента однослойная офсетная' },
            { target: 'fax-paper',  alt: 'Факс бумага' },
            { target: 'termo-label',  alt: 'Термоэтикетка' },
            { target: 'office-paper',  alt: 'Бумага офисная А4 80г.' },
            { target: 'paper-lpu',  alt: 'Бумага перфорированая ЛПУ' },
            { target: 'roll-paper', alt: 'Бумага рулонная' },
            { target: 'plotter-rolls', alt: 'Ролики для плоттера' }
        ];
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

