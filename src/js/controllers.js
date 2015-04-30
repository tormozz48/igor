var controllers = angular.module('gotey.controllers', []);

controllers.controller('PageHeaderController', function ($log, appService) {
    var _this = this;

    appService.getHeaderData()
        .success(function(data) {
            _this.title = data.title;
            _this.description = data.description;
            _this.keywords = data.keywords;
        })
        .error(function(data, status) {
            $log.error('failed: ' + url + ' status:' + status);
        });
});

controllers.controller('MenuController', function ($log, appService) {
    var _this = this;

    this.onLoad = function () {
        $log.debug('Menu controller has been loaded');
        appService.getMenuData()
            .success(function(data) {
                _this.items = data;
                setTimeout(function () {
                    $('[data-toggle="popover"]').popover();
                }, 300)
            })
            .error(function(data, status) {
                $log.error('failed: ' + url + ' status:' + status);
            });
    };
});

controllers.controller('MainController', function ($log, appService, yaMap) {
    var _this = this,
        productIds = ['cash-tape', 'check-tape', 'fax-paper', 'termo-label', 'office-paper', 'paper-lpu', 'roll-paper',
            'plotter-rolls', 'propilen-tape', 'stretch-film-food', 'term-film'];

    appService.getAppData()
        .success(function(data, status) {
            _this.navigation = data.navigation;
            _this.panels = data.panels;
        })
        .error(function(data, status) {
            $log.error('failed: ' + url + ' status:' + status);
        });

    this.onLoad = function (item) {
        if(item.map) {
            yaMap.init();
        }
    };

    this.productControllers = productIds.reduce(function (prev, product) {
        prev.push(getProductController(product));
        return prev;
    }, []);
});

function getProductController (productId) {
    return function ($log, appService) {
        var _this = this;

        _this.id = productId;
        _this.sortField = 'name';
        _this.sortDirection = true;

        _this.columns = [
            'Наименование',
            'Тип сырья',
            'Количество в упаковке'
        ];

        appService.getProductData(productId)
            .success(function(data) {
                _this.title = data.title;
                _this.items = data.items;

                if(data.columns) {
                    _this.columns = data.columns;
                }
            })
            .error(function(data, status) {
                $log.error('failed: ' + url + ' status:' + status);
            });
    };
}
