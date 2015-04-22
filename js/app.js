(function() {
    function controller () {

        this.title = 'Кассовая (чековая) лента, термолента для банкоматов и платежных терминалов';
        this.columns = [
            'Наименование',
            'Тип сырья',
            'Количество в упаковке'
        ];

        this.items = [
            { name: '28,5 мм. 19 метров', type: 'Koehler', amount: 420 },
            { name: '44мм. 17 метров', type: 'Koehler', amount: 350 },
            { name: '44мм.  23 метра', type: 'Koehler', amount: 260 },
            { name: '57мм. 17 метров', type: 'Koehler', amount: 280 },
            { name: '57мм. 19 метров', type: 'Koehler', amount: 240 },
            { name: '57мм. 23 метра', type: 'Koehler', amount: 208 },
            { name: '57мм. 30 метров', type: 'Koehler', amount: 156 },
            { name: '57мм. 60 метров', type: 'Koehler', amount: 60 },
            { name: '80 х 19 метров', type: 'Koehler', amount: 200 },
            { name: '80 х 21 метр', type: 'Koehler', amount: 200 },
            { name: '80 х 75 метров', type: 'Koehler', amount: 45 },
            { name: '80 х 80 метров', type: 'Koehler', amount: 45 },
            { name: '80 x 120 x 18/26', type: 'Koehler', amount: 18 },
            { name: '80 х 150 х 18/26', type: 'Koehler', amount: 9 },
            { name: '80 х 180 х 18/26', type: 'Koehler', amount: 8 },
            { name: '80 х 200 х 18/26', type: 'Koehler', amount: 6 },
            { name: '80 х 210  х 18/26', type: 'Koehler', amount: 5 }
        ];

        this.sortField = '';
        this.sortDirection = true;
    }

    var application = angular.module('app', []);
    application.controller('MainCtrl', controller);
})();

