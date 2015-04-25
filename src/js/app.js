(function () {
    var application = angular.module('app', ['scrollto']),

        PageHeaderController = function ($log, $http) {
            var _this = this,
                url = './data/' + 'meta.json';

            $http.get(url)
                .success(function(data, status) {
                    _this.title = data.title;
                    _this.description = data.description;
                    _this.keywords = data.keywords;
                })
                .error(function(data, status) {
                    $log.error('failed: ' + url + ' status:' + status);
                });
        },

        MenuController = function ($log, $http) {
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
        },

        MainController = function ($log, $http) {
            this.productControllers = [];
            var _this = this,
                url = './data/' + 'main.json';

            $http.get(url)
                .success(function(data, status) {
                    _this.navigation = data.navigation;
                    _this.panels = data.panels;
                })
                .error(function(data, status) {
                    $log.error('failed: ' + url + ' status:' + status);
                });

            this.onPanelsLoad = function (item) {
                if(item.map) {
                    ymaps.ready(init);
                    var map,
                        marker;

                    function init(){
                        map = new ymaps.Map("yandex-map-container", {
                            center: [44.941532, 34.076155],
                            zoom: 16
                        });

                        marker = new ymaps.Placemark([44.941532, 34.076155], {
                            iconContent: '28',
                            hintContent: 'ООО ГОТЕЙ',
                            balloonContent: 'ООО ГОТЕЙ'
                        });

                        map.geoObjects.add(marker);
                    }
                }
            };

            [
                'cash-tape',
                'check-tape',
                'fax-paper',
                'termo-label',
                'office-paper',
                'paper-lpu',
                'roll-paper',
                'plotter-rolls',
                'propilen-tape',
                'stretch-film-food',
                'term-film'
            ].forEach(function (product) {
                var controller = getProductController(product);
                    application.controller(product, controller);
                    this.productControllers.push(controller);
            }, this);
        };

    function getProductController (dataFile) {
        return function ($log, $http) {
            var _this = this,
                url = './data/' + dataFile + '.json';

            this.id = dataFile;
            this.sortField = 'name';
            this.sortDirection = true;

            this.columns = [
                'Наименование',
                'Тип сырья',
                'Количество в упаковке'
            ];

            $http.get(url)
                .success(function(data, status) {
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

    application.controller('PageHeaderController', PageHeaderController);
    application.controller('MenuController', MenuController);
    application.controller('MainController', MainController);
})();
