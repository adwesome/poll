const orgs = [
    [
        55,
        "Лента",
        "Супермаркет",
        "Северная улица, 6",
        55
    ],
    [
        56,
        "Детский мир",
        "Магазин детских товаров",
        "Северная улица, 6",
        56
    ],
    [
        198,
        "Ареадна",
        "Магазин одежды",
        "бул. Советов",
        198
    ],
    [
        205,
        "DeLuxe",
        "Салон красоты",
        "бул. Советов 5",
        205
    ],
    [
        116,
        "Guash",
        "Студия красоты",
        "бул. Советов, 1",
        116
    ],
    [
        113,
        "Шанс",
        "Магазин бытовой техники, электроники и детских товаров",
        "бул. Советов, 10",
        113
    ],
    [
        70,
        "Три Соуса",
        "Быстрое питание, ресторан, кафе",
        "бул. Советов, 1А",
        70
    ],
    [
        123,
        "ЦветОк",
        "Магазин цветов",
        "бул. Советов, 3",
        123
    ],
    [
        124,
        "Форум",
        "Магазин одежды",
        "бул. Советов, 3",
        124
    ],
    [
        125,
        "Мастерица",
        "Ателье по пошиву одежды",
        "бул. Советов, 3",
        125
    ],
    [
        126,
        "Август плюс",
        "Магазин одежды",
        "бул. Советов, 3",
        126
    ],
    [
        127,
        "Магазин продуктов",
        "Магазин продуктов",
        "бул. Советов, 3",
        127
    ],
    [
        203,
        "Карельские рецепты",
        "Продуктовый магазин",
        "бул. Советов, 3",
        203
    ],
    [
        108,
        "Пинта",
        "Магазин разливного пива",
        "бул. Советов, 4",
        108
    ],
    [
        111,
        "Уку-Шу",
        "Магазин японской кухни",
        "бул. Советов, 4",
        111
    ],
    [
        115,
        "Чародейка",
        "Салон красоты",
        "бул. Советов, 4",
        115
    ],
    [
        105,
        "Красное&Белое",
        "Магазин алкогольных напитков",
        "бул. Советов, 4<br>ул. Ленина, 3<br>ул. Ленина, 17<br>ул. Спиридонова, 5<br>бул. Советов, 5",
        105
    ],
    [
        112,
        "Улыбка радуги",
        "Магазин косметики и товаров для дома",
        "бул. Советов, 4<br>ул. Северная, 6",
        112
    ],
    [
        87,
        "Fleur",
        "Магазин нижнего белья",
        "бул. Советов, 5",
        87
    ],
    [
        88,
        "Osto",
        "Магазин одежды",
        "бул. Советов, 5",
        88
    ],
    [
        89,
        "Вконтрасте",
        "Магазин обуви",
        "бул. Советов, 5",
        89
    ],
    [
        90,
        "Анастасия",
        "Магазин одежды",
        "бул. Советов, 5",
        90
    ],
    [
        91,
        "Гарант",
        "Окна, жалюзи и рулонные шторы, двери",
        "бул. Советов, 5",
        91
    ],
    [
        92,
        "Обувь",
        "Магазин обуви",
        "бул. Советов, 5",
        92
    ],
    [
        109,
        "Флёр",
        "Магазин нижнего белья",
        "бул. Советов, 5",
        109
    ],
    [
        117,
        "Вальс Цветов",
        "Салон",
        "бул. Советов, 5",
        117
    ],
    [
        204,
        "Nail bar",
        "Ногтевые студии",
        "бул. Советов, 5",
        204
    ],
    [
        119,
        "SBS Восточные сладости",
        "Магазин продуктов",
        "бул. Советов, 5А",
        119
    ],
    [
        120,
        "33 Пингвина",
        "Кафе, мороженое",
        "бул. Советов, 5А",
        120
    ],
    [
        121,
        "ЦветОмания",
        "Магазин цветов",
        "бул. Советов, 5А",
        121
    ],
    [
        122,
        "Рыбная лавка на привозе",
        "Рыбный магазин",
        "бул. Советов, 5А",
        122
    ],
    [
        114,
        "ИП Полосенко И.Н.",
        "Канцтовары",
        "бул. Советов, 6",
        114
    ],
    [
        199,
        "Северный",
        "Магазин продуктов",
        "бул. Советов, 6",
        199
    ],
    [
        107,
        "Магнит Косметик",
        "Сеть магазинов косметики и бытовой химии",
        "бул. Советов, 8<br>бул. Советов, 3",
        107
    ],
    [
        106,
        "Магнит",
        "Сеть супермаркетов",
        "бул. Советов, 8<br>ул. Спиридонова, 1<br>ул. Спиридонова, 8<br>ул. Строителей, 5<br>ул. Гагарина, 3<br>бул. Советов, 1",
        106
    ],
    [
        26,
        "Новая",
        "Автошкола",
        "пр. Бумажников, 1",
        26
    ],
    [
        94,
        "Maximus",
        "Магазин одежды",
        "пр. Бумажников, 13",
        94
    ],
    [
        95,
        "Гармония",
        "Магазин одежды",
        "пр. Бумажников, 13",
        95
    ],
    [
        96,
        "Лекафарм",
        "Аптека",
        "пр. Бумажников, 13",
        96
    ],
    [
        97,
        "Sushi Master",
        "Суши-бар",
        "пр. Бумажников, 13",
        97
    ],
    [
        98,
        "Зиг-заг",
        "Магазин ткани, швейная фурнитура",
        "пр. Бумажников, 13",
        98
    ],
    [
        99,
        "Велена",
        "Магазин кулинарии",
        "пр. Бумажников, 13",
        99
    ],
    [
        100,
        "Белорусские колбасы",
        "Магазин продуктов",
        "пр. Бумажников, 13",
        100
    ],
    [
        101,
        "Алина",
        "Магазин одежды",
        "пр. Бумажников, 13",
        101
    ],
    [
        102,
        "Твой дом",
        "Магазин мебели, светильники, окна",
        "пр. Бумажников, 13",
        102
    ],
    [
        103,
        "Лабрадор",
        "Окна",
        "пр. Бумажников, 13",
        103
    ],
    [
        104,
        "Социальная",
        "Аптека",
        "пр. Бумажников, 13",
        104
    ],
    [
        81,
        "Fed Up",
        "Кафе, ресторан, быстрое питание",
        "пр. Монтажников",
        81
    ],
    [
        83,
        "Dentist",
        "Стоматологическая клиника",
        "пр. Монтажников, 1",
        83
    ],
    [
        84,
        "Ювелир pride",
        "Ювелирный магазин",
        "пр. Монтажников, 1",
        84
    ],
    [
        85,
        "Фея",
        "Магазин подарков и сувениров",
        "пр. Монтажников, 1",
        85
    ],
    [
        82,
        "Каролина",
        "Магазин одежды",
        "пр. Монтажников, 3",
        82
    ],
    [
        144,
        "Сфера Сервис",
        "Торговый центр",
        "ул. 8 Марта, 9",
        144
    ],
    [
        145,
        "Строительные материалы",
        "Строительный магазин",
        "ул. 8 Марта, 9",
        145
    ],
    [
        146,
        "Автопитер",
        "Магазин автозапчастей и автотоваров",
        "ул. 8 Марта, 9",
        146
    ],
    [
        147,
        "Старт",
        "Спортивный магазин, товары для отдыха и туризма",
        "ул. 8 Марта, 9",
        147
    ],
    [
        148,
        "ИП Сущевич А. В.",
        "Автосервис, автотехцентр",
        "ул. 8 Марта, 9",
        148
    ],
    [
        21,
        "Акватория",
        "Сауна",
        "ул. Антикайнена, 1",
        21
    ],
    [
        143,
        "Вита",
        "Аптека",
        "ул. Антикайнена, 11",
        143
    ],
    [
        200,
        "Take&Wake",
        "Кафе",
        "ул. Антикайнена, 11",
        200
    ],
    [
        201,
        "Рыба, мясо",
        "Магазин продуктов",
        "ул. Антикайнена, 11",
        201
    ],
    [
        202,
        "Fix Price",
        "Товары для дома",
        "ул. Антикайнена, 11",
        202
    ],
    [
        128,
        "Пятёрочка",
        "Сеть супермаркетов",
        "ул. Антикайнена, 11<br>ул. Спиридонова, 12<br>ул. Спиридонова, 21<br>ул. Строителей, 25<br>ул. Ленина, 14",
        128
    ],
    [
        129,
        "Наше фото",
        "Фотоуслуги, ремонт оргтехники, расходные материалы",
        "ул. Антикайнена, 12",
        129
    ],
    [
        130,
        "Аквадар",
        "Буровые работы, монтаж и обслуживание систем водоснабжения",
        "ул. Антикайнена, 12",
        130
    ],
    [
        131,
        "РЕСО-Гарантия",
        "Страховая компания, страхование автомобилей",
        "ул. Антикайнена, 12",
        131
    ],
    [
        132,
        "Красс",
        "Турагентство, туристический инфоцентр",
        "ул. Антикайнена, 12",
        132
    ],
    [
        133,
        "Канцтовары",
        "Магазин канцтоваров",
        "ул. Антикайнена, 12",
        133
    ],
    [
        134,
        "Листок",
        "Магазин одежды",
        "ул. Антикайнена, 12",
        134
    ],
    [
        135,
        "Очарование",
        "Магазин одежды, магазин бижутерии",
        "ул. Антикайнена, 12",
        135
    ],
    [
        136,
        "Аптека",
        "Аптека",
        "ул. Антикайнена, 12",
        136
    ],
    [
        138,
        "Юнона",
        "Ногтевые студии",
        "ул. Антикайнена, 13",
        138
    ],
    [
        139,
        "Lime",
        "Студия красоты",
        "ул. Антикайнена, 13/1",
        139
    ],
    [
        141,
        "Оазис",
        "Магазин продуктов",
        "ул. Антикайнена, 14",
        141
    ],
    [
        142,
        "Смешанные товары",
        "Салон оптики",
        "ул. Антикайнена, 14",
        142
    ],
    [
        197,
        "Фермерское мясо",
        "Магазин продуктов",
        "ул. Антикайнена, 14",
        197
    ],
    [
        32,
        "Сердце Карелии",
        "Аптека",
        "ул. Антикайнена, 14<br>ул. Спиридонова, 12",
        32
    ],
    [
        154,
        "Флоранс",
        "Магазин цветов, доставка цветов и букетов",
        "ул. Антикайнена, 17",
        154
    ],
    [
        156,
        "Современная стоматология",
        "Стоматологическая клиника",
        "ул. Антикайнена, 17",
        156
    ],
    [
        151,
        "Партнёр",
        "Строительная компания",
        "ул. Антикайнена, 17 к1",
        151
    ],
    [
        152,
        "Second-hand",
        "Секонд-хенд",
        "ул. Антикайнена, 17 к1",
        152
    ],
    [
        153,
        "Классик стиль",
        "Магазин одежды",
        "ул. Антикайнена, 17 к1",
        153
    ],
    [
        161,
        "Ремонт одежды",
        "Ремонт одежды",
        "ул. Антикайнена, 17 к2",
        161
    ],
    [
        157,
        "Стоматологический кабинет Доктора Протопопова",
        "Частные стоматологии",
        "ул. Антикайнена, 18",
        157
    ],
    [
        19,
        "Точка",
        "Магазин продуктов",
        "ул. Антикайнена, 2",
        19
    ],
    [
        22,
        "Дачка",
        "Магазин для садоводов",
        "ул. Антикайнена, 2",
        22
    ],
    [
        23,
        "Уют",
        "Строительный магазин",
        "ул. Антикайнена, 2",
        23
    ],
    [
        158,
        "Beauty Studio by Belozerova Yuliya",
        "Салон красоты",
        "ул. Антикайнена, 23",
        158
    ],
    [
        159,
        "Loft studio",
        "Ногтевая студия",
        "ул. Антикайнена, 23",
        159
    ],
    [
        160,
        "Nail_ta.pakhomova",
        "Ногтевые студии",
        "ул. Антикайнена, 23",
        160
    ],
    [
        155,
        "Первым делом",
        "Магазин продуктов",
        "ул. Антикайнена, 2<br>ул. Мира, 33",
        155
    ],
    [
        25,
        "Рюмочки",
        "Кафе, бар",
        "ул. Антикайнена, 3А",
        25
    ],
    [
        24,
        "Домовой",
        "Магазин хозтоваров, бытовой химии и строительных материалов",
        "ул. Антикайнена, 6<br>ул. Строителей, 3",
        24
    ],
    [
        183,
        "Cosmos Smart Segezha",
        "Гостиницы",
        "ул. Береговая, 1",
        183
    ],
    [
        184,
        "Морошка",
        "Ресторан",
        "ул. Береговая, 1",
        184
    ],
    [
        188,
        "Алекса",
        "Салон красоты",
        "ул. Владимирская, 2",
        188
    ],
    [
        20,
        "Тёплое место",
        "Баня, сауна",
        "ул. Гоголя, 16",
        20
    ],
    [
        195,
        "Выг, ресторан",
        "Рестораны",
        "ул. Гражданская, 6",
        195
    ],
    [
        186,
        "Продуктовый магазин",
        "Продуктовый магазин",
        "ул. Кирова, 13А",
        186
    ],
    [
        181,
        "Буфет",
        "Кафе",
        "ул. Ленина, 13",
        181
    ],
    [
        190,
        "Елена",
        "Парикмахерские",
        "ул. Ленина, 13",
        190
    ],
    [
        180,
        "Лунная",
        "Парикмахерская",
        "ул. Ленина, 17",
        180
    ],
    [
        175,
        "Лекафарм",
        "Аптека",
        "ул. Ленина, 18",
        175
    ],
    [
        176,
        "Универсал",
        "Магазин одежды",
        "ул. Ленина, 18",
        176
    ],
    [
        174,
        "Кристалл",
        "Магазин продуктов",
        "ул. Ленина, 18А",
        174
    ],
    [
        177,
        "Формула здоровья",
        "Аптека",
        "ул. Ленина, 19",
        177
    ],
    [
        178,
        "Аптека для бережливых",
        "Аптека",
        "ул. Ленина, 19",
        178
    ],
    [
        179,
        "Канцтовары",
        "Магазин канцтоваров",
        "ул. Ленина, 19",
        179
    ],
    [
        191,
        "Шафран",
        "Кафе",
        "ул. Ленина, 19",
        191
    ],
    [
        192,
        "Krasotka",
        "Парикмахерские",
        "ул. Ленина, 19А",
        192
    ],
    [
        189,
        "Городовой",
        "Трактир",
        "ул. Ленина, 3",
        189
    ],
    [
        15,
        "Eva",
        "Салон красоты",
        "ул. Лесокультурная, 14",
        15
    ],
    [
        13,
        "Спорткомплекс",
        "Спортивный комплекс",
        "ул. Лесокультурная, 2",
        13
    ],
    [
        14,
        "Сегежа",
        "Гостиница",
        "ул. Лесокультурная, 4",
        14
    ],
    [
        16,
        "Кабинет педикюра и маникюра",
        "Ногтевые студии",
        "ул. Лесокультурная, 4",
        16
    ],
    [
        17,
        "Медвежий угол",
        "Кафе",
        "ул. Лесокультурная, 4",
        17
    ],
    [
        173,
        "Всё для вас",
        "Магазин продуктов",
        "ул. Маяковского",
        173
    ],
    [
        172,
        "Рябинка",
        "Магазин продуктов",
        "ул. Маяковского, 11",
        172
    ],
    [
        169,
        "Нотариальная контора",
        "Нотариусы",
        "ул. Мира, 14",
        169
    ],
    [
        162,
        "Ленторг",
        "Продовольственный магазин",
        "ул. Мира, 16",
        162
    ],
    [
        171,
        "Молодёжный центр",
        "Кинотеатр",
        "ул. Мира, 23",
        171
    ],
    [
        166,
        "Автозапчасти",
        "Магазин автозапчастей и автотоваров",
        "ул. Мира, 4",
        166
    ],
    [
        167,
        "Каспий",
        "Магазин продуктов",
        "ул. Мира, 4",
        167
    ],
    [
        168,
        "Буфет",
        "Кафе, столовая",
        "ул. Мира, 4",
        168
    ],
    [
        163,
        "Шанс",
        "Магазин мебели",
        "ул. Мира, 4А",
        163
    ],
    [
        149,
        "У Настеньки",
        "Детский развлекательный центр",
        "ул. Новая, 8",
        149
    ],
    [
        185,
        "Светофор",
        "Магазин низких цен",
        "ул. Полевая, 15<br>ул. Партизанская, 1",
        185
    ],
    [
        51,
        "У Тахира",
        "Быстрое питание",
        "ул. Северная",
        51
    ],
    [
        52,
        "Барс",
        "Магазин автозапчастей и автотоваров",
        "ул. Северная, 1",
        52
    ],
    [
        50,
        "Лукойл",
        "АЗС",
        "ул. Северная, 2",
        50
    ],
    [
        53,
        "Радуга",
        "Торговый центр, фасады и фасадные системы",
        "ул. Северная, 3",
        53
    ],
    [
        54,
        "Ясень",
        "Магазин мебели",
        "ул. Северная, 4",
        54
    ],
    [
        57,
        "Kari",
        "Магазин обуви",
        "ул. Северная, 6",
        57
    ],
    [
        59,
        "Pizza Maestro",
        "Пиццерия, кафе",
        "ул. Северная, 6",
        59
    ],
    [
        60,
        "Буфет",
        "Кафе",
        "ул. Северная, 6",
        60
    ],
    [
        62,
        "Мегафон - Yota",
        "Оператор сотовой связи, товары для мобильных телефонов",
        "ул. Северная, 6",
        62
    ],
    [
        63,
        "Люмен",
        "Кинотеатр",
        "ул. Северная, 6",
        63
    ],
    [
        64,
        "Амор",
        "Магазин парфюмерии и косметики",
        "ул. Северная, 6",
        64
    ],
    [
        66,
        "Крабли Бумс",
        "Развлекательный центр",
        "ул. Северная, 6",
        66
    ],
    [
        67,
        "DNS",
        "Компьютерный магазин, магазин электроники",
        "ул. Северная, 6",
        67
    ],
    [
        68,
        "Уголок востока",
        "Орехи, снеки, сухофрукты, магазин подарков и сухофруктов",
        "ул. Северная, 6",
        68
    ],
    [
        170,
        "Люкс",
        "Строительный магазин",
        "ул. Советская, 19",
        170
    ],
    [
        182,
        "Добромед",
        "Стоматологическая клиника, детская стоматология",
        "ул. Советская, 6",
        182
    ],
    [
        5,
        "Натали ",
        "Магазин продуктов",
        "ул. Солунина",
        5
    ],
    [
        4,
        "Бриз",
        "Кафе",
        "ул. Солунина, 1",
        4
    ],
    [
        11,
        "Автолайн",
        "Магазин автозапчастей и автотоваров",
        "ул. Солунина, 1",
        11
    ],
    [
        12,
        "Lada Dеталь",
        "Магазин автозапчастей и автотоваров",
        "ул. Солунина, 1",
        12
    ],
    [
        6,
        "Невис",
        "Аптека",
        "ул. Солунина, 4",
        6
    ],
    [
        7,
        "Апрель",
        "Магазин продуктов",
        "ул. Солунина, 4",
        7
    ],
    [
        8,
        "Кулинария",
        "Кондитерская",
        "ул. Солунина, 4",
        8
    ],
    [
        9,
        "Сила",
        "Электро- и бензоинструмент, запчасти для мототехники",
        "ул. Солунина, 4А",
        9
    ],
    [
        10,
        "Иномарка",
        "Магазин автозапчастей и автотоваров",
        "ул. Солунина, 4А",
        10
    ],
    [
        1,
        "Питлейн",
        "Шиномонтаж",
        "ул. Спиридонова",
        1
    ],
    [
        78,
        "Автомастер",
        "Автосервис, автотехцентр",
        "ул. Спиридонова",
        78
    ],
    [
        33,
        "Бристоль",
        "Магазин продуктов",
        "ул. Спиридонова, 13",
        33
    ],
    [
        34,
        "Олония",
        "Молочный магазин",
        "ул. Спиридонова, 15",
        34
    ],
    [
        35,
        "Подарки и сувениры",
        "Магазин подарков и сувениров",
        "ул. Спиридонова, 15",
        35
    ],
    [
        36,
        "Alltime Lounge",
        "Кальян-бар, антикафе",
        "ул. Спиридонова, 15Б",
        36
    ],
    [
        37,
        "H2O",
        "Автомойка",
        "ул. Спиридонова, 16",
        37
    ],
    [
        38,
        "Люкс",
        "Автомойка",
        "ул. Спиридонова, 16",
        38
    ],
    [
        39,
        "Доброцен",
        "Супермаркет",
        "ул. Спиридонова, 16",
        39
    ],
    [
        40,
        "Строительный магазин ЦСК",
        "Строительный магазин, магазин сантехники, электрики",
        "ул. Спиридонова, 16",
        40
    ],
    [
        41,
        "Arena",
        "Компьютерный клуб, киберспорт",
        "ул. Спиридонова, 16Б",
        41
    ],
    [
        69,
        "Автодеталь",
        "Магазин автозапчастей и автотоваров",
        "ул. Спиридонова, 17",
        69
    ],
    [
        42,
        "Рыболовная Акватория",
        "Товары для рыбалки, магазин верхней одежды",
        "ул. Спиридонова, 17А",
        42
    ],
    [
        43,
        "Этаж",
        "Кафе-бар",
        "ул. Спиридонова, 19",
        43
    ],
    [
        44,
        "Оазис",
        "Кафе",
        "ул. Спиридонова, 23",
        44
    ],
    [
        73,
        "PinkFish",
        "Доставка еды и обедов, магазин суши и роллов",
        "ул. Спиридонова, 23",
        73
    ],
    [
        77,
        "Аста",
        "Магазин автозапчастей и автотоваров",
        "ул. Спиридонова, 24",
        77
    ],
    [
        45,
        "Зоосфера",
        "Магазин",
        "ул. Спиридонова, 25",
        45
    ],
    [
        74,
        "Регион недвижимость",
        "Агентство недвижимости, земельные участки",
        "ул. Спиридонова, 25",
        74
    ],
    [
        75,
        "Mix",
        "Магазин одежды",
        "ул. Спиридонова, 25",
        75
    ],
    [
        76,
        "Невис",
        "Аптека",
        "ул. Спиридонова, 25",
        76
    ],
    [
        46,
        "Сказка",
        "Кафе",
        "ул. Спиридонова, 33А",
        46
    ],
    [
        49,
        "Олония",
        "Продуктовый магазин",
        "ул. Спиридонова, 37А",
        49
    ],
    [
        28,
        "Автосервис 112",
        "Автосервис",
        "ул. Спиридонова, 6",
        28
    ],
    [
        29,
        "DaVinika",
        "Парикмахерская",
        "ул. Спиридонова, 7",
        29
    ],
    [
        30,
        "Дель Мар (Del Mare)",
        "Кафе",
        "ул. Спиридонова, 8",
        30
    ],
    [
        31,
        "Линк",
        "Суши-бар",
        "ул. Спиридонова, 9",
        31
    ],
    [
        80,
        "Онего",
        "Магазин продуктов",
        "ул. Строителей, 5А",
        80
    ],
    [
        79,
        "Роснефть",
        "АЗС",
        "ш. Надвоицкое, 1км",
        79
    ]
];