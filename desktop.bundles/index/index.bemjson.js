({
    block: 'page',
    title: 'ООО "ГОТЭЙ"',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],
    content: [
       {
          block: 'header'
       },
       {
          block: 'content',
          content: {
            stickers: {
                delivery: {
                    title: 'Доставка',
                    content: 'Доставка по Симферополю и городам Крыма'
                },
                payment: {
                    title: 'Расчет',
                    content: 'Наличный и безналичный расчет с учетом НДС'
                }
            },
            products: {
              title: 'ООО "ГОТЭЙ" осуществляет регулярные поставки',
              items: [
                {
                  name: 'Кассовая (чековая) лента, термолента для банкоматов и платежных терминалов',
                  image: null,
                  tables: [
                      {
                          title: 'Кассовая лента и ролики для банкомата',
                          items: [
                              { name: '28,5 мм. 19 метров', type: 'Koehler', amount: '420' },
                              { name: '44мм. 17 метров', type: 'Koehler', amount: '350' },
                              { name: '44мм.  23 метра', type: 'Koehler', amount: '260' },
                              { name: '57мм. 17 метров', type: 'Koehler', amount: '280' },
                              { name: '57мм. 19 метров', type: 'Koehler', amount: '240' },
                              { name: '57мм. 23 метра', type: 'Koehler', amount: '208' },
                              { name: '57мм. 30 метров', type: 'Koehler', amount: '156' },
                              { name: '57мм. 60 метров', type: 'Koehler', amount: '60' },
                              { name: '80 х 19 метров', type: 'Koehler', amount: '200' },
                              { name: '80 х 21 метр', type: 'Koehler', amount: '200' },
                              { name: '80 х 75 метров', type: 'Koehler', amount: '45' },
                              { name: '80 х 80 метров', type: 'Koehler', amount: '45' },
                              { name: '80 x 120 x 18/26', type: 'Koehler', amount: '18' },
                              { name: '80 х 150 х 18/26', type: 'Koehler', amount: '9' },
                              { name: '80 х 180 х 18/26', type: 'Koehler', amount: '8' },
                              { name: '80 х 200 х 18/26', type: 'Koehler', amount: '6' },
                              { name: '80 х 210  х 18/26', type: 'Koehler', amount: '5' }
                          ]
                      }
                  ]
                },
                {
                  name: 'Чековая лента однослойная оффсетная',
                  image: null,
                  tables: [
                      {
                          title: 'Чековая лента однослойная офсетная',
                          items: [
                              { name: '37 х 60 х 12', type: 'Котласский ЦБК,92% бел', amount: '288'},
                              { name: '40 х 60 х 18', type: 'Котласский ЦБК,92% бел', amount: '165'},
                              { name: '44 х 60 х 12', type: 'Котласский ЦБК,92% бел', amount: '165'},
                              { name: '57 х 60 х 12', type: 'Котласский ЦБК,92% бел', amount: '132'},
                              { name: '69 х 60 х 12', type: 'Котласский ЦБК,92% бел', amount: '108'},
                              { name: '76 х 60 х 12', type: 'Котласский ЦБК,92% бел', amount: '108'}


                          ]
                      }
                  ]
                },
                {
                    name: 'Факс бумага',
                    image: null,
                    tables: [
                        {
                            title: 'Факс бумага',
                            items: [
                                {name: '210мм. 19 метров', type: 'JTK', amount: '60'}
                            ]
                        }
                    ]
                },
                {
                  name: 'Термоэтикетка',
                  image: null,
                  tables: [
                      {
                          title: 'Термоэтикетка',
                          items: [
                              { name: '58х30 ЕСО', type: 'Fasson', amount: '60' },
                              { name: '58х40 ЕСО', type: 'Fasson', amount: '60' },
                              { name: '58х60 ЕСО', type: 'Fasson', amount: '60' },
                              { name: '30х20 ЕСО', type: 'Fasson', amount: '56' },
                              { name: '43х25 ЕСО', type: 'Fasson', amount: '75' }
                          ]
                      }
                  ]
                },
                {
                  name: 'Бумага офисная А4 80г.',
                  image: null,
                  tables: [
                      {
                          title: 'Бумага офисная А4 80г.',
                          items: [
                              { name: 'Бумага А4 Office Сopy/Print 80г.', type: 'UPM Класс С+', amount: '500 л'}
                          ]
                      }
                  ]
                },
                {
                  name: 'Бумага перфорированая ЛПУ',
                  image: null,
                  tables: [
                      {
                          title: 'Бумага перфорированная ЛПУ',
                          items: [
                              { name: 'ЛПУ 210', type: 'Котласский ЦБК,92% бел', amount: '1500л'},
                              { name: 'ЛПУ 240', type: 'Котласский ЦБК,92% бел', amount: '1500л'},
                              { name: 'ЛПУ 375', type: 'Котласский ЦБК,92% бел', amount: '1500л'},
                              { name: 'ЛПУ 420', type: 'Котласский ЦБК,92% бел', amount: '1500л'}
                          ]
                      }
                  ]
                },
                {
                    name: 'Бумага рулонная',
                    image: null,
                    tables: [
                        {
                            title: 'Бумага рулонная',
                            items: [
                                { name: '210 х 70 х 18', type: 'Котласский ЦБК,92% бел', amount: '24'},
                                { name: '210 х 100 х 26', type: 'Котласский ЦБК,92% бел', amount: '11'},
                                { name: '360 х 60 х 18', type: 'Котласский ЦБК,92% бел', amount: '20'},
                                { name: '420 х 70 х 18', type: 'Котласский ЦБК,92% бел', amount: '24'},
                                { name: '76 х 140 х 12', type: 'Котласский ЦБК,92% бел', amount: '12'}
                            ]
                        }
                    ]
                },
                {
                    name: 'Ролики для плоттеров и принтеров',
                    images: null,
                    tables: [
                        {
                            title: 'Ролики для плоттера',
                            items: [
                                { name: '297 х 175 х 76', type: 'Светогорский ЦБК,95% бел', amount: '4'},
                                { name: '420 х 175 х 76', type: 'Светогорский ЦБК,95% бел', amount: '4'},
                                { name: '594 х 175 х 76', type: 'Светогорский ЦБК,95% бел', amount: '2'},
                                { name: '620 х 175 х 76', type: 'Светогорский ЦБК,95% бел', amount: '2'},
                                { name: '841 х 175 х 76', type: 'Светогорский ЦБК,95% бел', amount: '2'},
                                { name: '914 х 175 х 76', type: 'Светогорский ЦБК,95% бел', amount: '2'}
                            ]
                        }
                    ]
                },
                {
                  name: 'Упаковочные материалы:',
                  image: null,
                  tables: null,
                  items: [
                    {
                      name: 'Лента полипропиленовая',
                      image: null,
                      tables: null
                    },
                    {
                      name: 'Стретч пленка пищевая',
                      image: null,
                      tables: null
                    },
                    {
                      name: 'Пленка термоусадочная ПВХ',
                      image: null,
                      tables: null
                    }
                  ]
                }
              ]
            }
          }
       }
    ]
})
