angular.module('gotey.ya-map', []).
    factory('yaMap', function() {
        return {
            init: function () {
                var map,
                    marker;

                ymaps.ready(function (){
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
                });
            }
        }
    });

/*

*/


