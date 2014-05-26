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
            products: {
              title: 'ООО "ГОТЭЙ" осуществляет регулярные поставки',
              items: [
                {
                  name: 'Кассовая (чековая) лента, термолента для банкоматов и платежных терминалов, факс бумага',
                  image: null,
                  tables: null
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
                              { name: '43х25 ЕСО', type: 'Fasson', amount: '75' },
                          ]
                      }
                  ]
                },
                {
                  name: 'Бумага офисная А4 80г., бумага перфорированая ЛПУ, бумага рулонная, ролики для плоттеров и принтеров',
                  image: null,
                  tables: null
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
