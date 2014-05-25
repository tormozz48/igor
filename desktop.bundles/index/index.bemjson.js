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
          block: 'header',
       },
       {
          block: 'content',
          content: {
            sticker: 'Наличный и безналичный расчет с НДС',
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
                  tables: null
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
                      tables: null,
                    },
                    {
                      name: 'Стретч пленка пищевая',
                      image: null,
                      tables: null,
                    },
                    {
                      name: 'Пленка термоусадочная ПВХ',
                      image: null,
                      tables: null,
                    }
                  ]
                }
              ]
            }
          }
       }
    ]
})
