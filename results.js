//var SERVER_HOSTNAME = 'http://127.0.0.1:5000';
//if (location.hostname)
  SERVER_HOSTNAME = 'https://scratchit.cards';

var uid, /*orgs, votes,*/ visitors, participants, votes_clean = [], ages_stats = {}, orgs_dict = {};
var males, females, males_p, females_p;
const sexes = {'f': 1, 'm': 2};
const ages = {
  1: 'до 14 лет',
  2: '15-19 лет',
  3: '20-24 лет',
  4: '25-29 лет',
  5: '30-34 лет',
  6: '35-39 лет',
  7: '40-44 лет',
  8: '45-49 лет',
  9: '50-54 лет',
  10: '55-59 лет',
  11: '60-64 лет',
  12: '65-69 лет',
  13: 'от 70 лет',
};
const ids = {'sex': 4, 'age': 5, 'orgs': 7};

const categories_map = {
  'Кафе, рестораны, бары': [
    'Кафе-бар',
    'Кондитерская',
    'Кафе',
    'Кафе, бар',
    'Магазин кулинарии, производство кондитерских и хлебобулочных изделий',
    'Суши-бар',
    'Кальян-бар, антикафе',
    'Быстрое питание',
    'Пиццерия, кафе',
    'Ресторан',
    'Быстрое питание, ресторан, кафе',
    'Кафе, ресторан, быстрое питание',
    'Кафе, мороженое',
    'Кафе, столовая',
    'Рестораны',
    'Бары',
    'Магазин кулинарии',
    'Трактир',
    'Доставка еды и обедов, магазин суши и роллов',
    'Магазин японской кухни',
  ],
  'Красота': [
    'Парикмахерские',
    'Салон красоты',
    'Ногтевые студии',
    'Парикмахерская',
    'Студия красоты',
    'Ногтевая студия',
    'Магазин парфюмерии и косметики',
    'Магазин парфюмерии и косметики, магазин хозтоваров',
    'Сеть магазинов косметики и бытовой химии',
    'Магазин косметики и товаров для дома',
  ],
  'Отдых': [
    'Гостиница',
    'Баня, сауна',
    'Сауна',
    'Компьютерный клуб, киберспорт',
    'Развлекательный центр',
    'Кинотеатр',
    'Товары для рыбалки, магазин верхней одежды',
    'Детский развлекательный центр',
    'Гостиницы',
    'Турагентство, туристический инфоцентр'
  ],
  'Продукты': [
    'Магазин продуктов',
    'Молочный магазин',
    'Супермаркет',
    'Супермаркеты',
    'Продуктовый магазин',
    'Сеть супермаркетов',
    'Рыбный магазин',
    'Продовольственный магазин',
    'Орехи, снеки, сухофрукты, магазин подарков и сухофруктов',
    'Магазин низких цен',
  ],
  'Аптека и оптика': [
    'Аптека',
    'Салон оптики',
  ],
  'Спорт': [
    'Спортивный комплекс',
    'Спортивный магазин, товары для отдыха и туризма',
  ],
  'Авто- и мото-': [
    'Шиномонтаж', 
    'Электро- и бензоинструмент, запчасти для мототехники', 
    'Магазин автозапчастей и автотоваров',
    'Автошкола',
    'Автосервис',
    'Автомойка',
    'АЗС',
    'Автосервис, автотехцентр',
  ],
  'Товары для обустройства дома и дачи': [
    'Магазин для садоводов',
    'Строительный магазин',
    'Строительный магазин, магазин сантехники, электрики',
    'Торговый центр, фасады и фасадные системы',
    'Магазин мебели',
    'Магазин хозтоваров, бытовой химии и строительных материалов',
    'Магазин мебели, светильники, окна',
    'Окна',
    'Окна, жалюзи и рулонные шторы, двери',
    'Торговый центр',
    'Автоматические двери и ворота, двери',
    'Строительная компания',
    'Буровые работы, монтаж и обслуживание систем водоснабжения',
    'Магазин товаров для школы и офиса',
    'Товары для дома',
  ],
  'Бытовая техника и электроника': [
    'Оператор сотовой связи, товары для мобильных телефонов',
    'Компьютерный магазин, магазин электроники',
    'Компьютерный магазин, магазин бытовой техники',
    'Магазин бытовой техники, электроники и детских товаров',
    'Фотоуслуги, ремонт оргтехники, расходные материалы',
  ],
  'Алкоголь': [
    'Магазин разливного пива',
    'Магазин алкогольных напитков',
  ],
  'Одежда и обувь': [
    'Магазин обуви',
    'Магазин одежды',
    'Магазин нижнего белья',
    'Магазин одежды, магазин бижутерии',
    'Секонд-хенд',
    'Ремонт одежды',
    'Магазин ткани, швейная фурнитура',
    'Ателье по пошиву одежды',
  ],
  'Подарки и сувениры': [
    'Магазин подарков и сувениров',
    'Ювелирный магазин',
  ],
  'Товары для детей': [
    'Магазин детских товаров',
  ],
  'Товары для животных': [
    'Магазин',
  ],
  'Стоматология': [
    'Стоматологическая клиника',
    'Частные стоматологии',
    'Стоматологическая клиника, детская стоматология',
  ],
  'Канцтовары': [
    'Канцтовары',
    'Магазин канцтоваров'
  ],
  'Цветы': [
    'Салон',
    'Магазин цветов',
    'Магазин цветов, доставка цветов и букетов',
  ],
  'Страхование и юристы': [
    'Нотариусы',
    'Страховая компания, страхование автомобилей',
    'Агентство недвижимости, земельные участки',
  ],
};

function get_uid() {
  var uid = localStorage.getItem('uid');
  if (uid)
    return parseInt(uid);
  else
    return null;
}

async function get_smth(smth) {
  const response = await fetch(SERVER_HOSTNAME + `/${smth}/all`, {});
  const o = await response.json();
  return o;
}

function calc_sexes() {
  let r = {'f': 0, 'm': 0};
  votes_clean.forEach((vote) => {  
    if (vote[ids.sex] == sexes.f)
      r.f += 1;
    else
      r.m += 1;
  });
  
  females = r.f;
  males = r.m;
  females_p = parseInt((females * 100 / participants));
  males_p = parseInt((males * 100 / participants));
  let result = `Женщин: ${females} (${females_p}%). Мужчин: ${males} (${males_p}%).`;

  document.getElementById('sexes').innerHTML = result;
}

function calc_voters() {
  const cr = parseInt(participants * 100 / visitors);
  const cr_ = parseInt(3 * 100 / participants);
  let result = `Пришли на страничку: ${visitors}. Отметились: ${participants}. CR: ${cr}%.`;
  result += `<br><br>CR в выигрыш 3 х 1к руб для ${participants} человек, заполнивших анкету: ${cr_}% (на что эти люди уже соглашаются уже сейчас, если подарок 1к руб).`;
  document.getElementById('voters').innerHTML = result;
}

function calc_votes_clean() {
  votes.forEach((vote) => {
    if (vote[ids.orgs] != '')
      votes_clean.push(vote);
  });
}

function calc_ages() {
  let ages_stats = {...ages};
  for (key in ages_stats)
    ages_stats[key] = {'total': 0, 'f': 0, 'm': 0};

  votes_clean.forEach((vote) => {
    ages_stats[vote[ids.age]]['total'] += 1;
    if (vote[ids.sex] == sexes.f)
      ages_stats[vote[ids.age]]['f'] += 1;
    else
      ages_stats[vote[ids.age]]['m'] += 1;
  });

  let ms_p = [];
  let fs_p = [];
  for (key in ages_stats) {
    //let total = ages_stats[key].total;
    //let total_p = parseInt(total * 100 / participants);
    let f = ages_stats[key].f;
    let m = ages_stats[key].m;
    let f_p = Math.round((f * 100 / participants) * 10) / 10;
    let m_p = Math.round((m * 100 / participants) * 10) / 10;
    //result += `${ages[key]}: ${total} (${total_p}%) (из которых Женщин: ${f} (${f_p}), Мужчин: ${m} (${m_p}))<br>`;
    fs_p.push(f_p);
    ms_p.push(m_p);
  }
  
  return {'females': fs_p, 'males': ms_p};
}

function get_category_by_type(type) {
  for (category in categories_map) {
    const em = categories_map[category];
    for (let i = 0; i < em.length; i++) {
      if (em[i] == type)
        return category;
    }
  }
}


function calc_orgs_stats(category) {
  let orgs_stats = {};

  orgs.forEach((org) => {
    const oid = org[0];
    votes_clean.forEach((vote) => {
      const oids = vote[ids.orgs].split(',');
      if (oids.includes(oid.toString())) {
        if (oid in orgs_stats)
          orgs_stats[oid]['total'] += 1;
        else
          orgs_stats[oid] = {'total': 1, 'f': 0, 'm': 0};

        if (vote[ids.sex] == sexes.f)
          orgs_stats[oid]['f'] += 1;
        else
          orgs_stats[oid]['m'] += 1;
      }
    });
  });

  let result = '';
  let categories = [];
  for (oid in orgs_stats) {
    const org = orgs_stats[oid];
    org['tp'] = Math.round((100 * org.total / participants) * 10) / 10;
    
    const category = get_category_by_type(orgs_dict[oid].type);
    if (!categories.includes(category))
      categories.push(category);

    result += `<tr>`;
    result += `<td>${orgs_dict[oid].name}</td>`;
    result += `<td>${orgs_dict[oid].type}</td>`;
    result += `<td>${category}</td>`;
    result += `<td>${orgs_dict[oid].address}</td>`;
    result += `<td>${org.total}</td>`;
    result += `<td>${org.tp}</td>`;
    result += `<td>${org.f}</td>`;
    result += `<td>${org.m}</td>`;
    result += `</tr>`;
  }

  document.getElementById('results-fact-tbody').innerHTML = result;

  result = `<option>Все</option>`;
  categories.forEach((category) => {
    result += `<option>${category}</option>`;
  });
  document.getElementById('category').innerHTML = result;

  const table = new DataTable('#results-fact', {
    language: {
      search: "",
      searchPlaceholder: "Поиск по всей таблице...",
      emptyTable: "Ничего не найдено",
      "info": "Показано с _START_ по _END_ из _TOTAL_ записей",
    },
    paging: false,
    autoWidth: false,
    order: [[4, 'desc']],
    responsive: true,
    columns: [
      { width: 'auto', className: 'all' }, // https://datatables.net/extensions/responsive/examples/column-control/classes.html
      { width: 'auto'},
      { width: 'auto'},
      { width: '200px'},
      { width: 'auto'},
      { width: 'auto'},
      { width: 'auto'},
      { width: 'auto'},
    ],
    /*
    columnDefs: [
      { type: 'html-num-fmt', targets: 4 }, { type: 'num', targets: 5 },
      { targets: [5], orderData: [5, 4] },
      { targets: [4], orderData: [4, 5] },
      { targets: [2], orderData: [2, 4, 5] },
      { targets: [3], orderData: [3, 5, 4] },
      { responsivePriority: 1, targets: 0 },
      { responsivePriority: 1, targets: 4 },
    ],
    */
    //stateSave: true,
  });
}

function calc_orgs_normalized_stats() {
  let orgs_stats = {};

  orgs.forEach((org) => {
    const oid = org[0];
    votes_clean.forEach((vote) => {
      const oids = vote[ids.orgs].split(',');
      if (oids.includes(oid.toString())) {
        if (oid in orgs_stats)
          orgs_stats[oid]['total'] += 1;
        else
          orgs_stats[oid] = {'total': 1, 'f': 0, 'm': 0};

        if (vote[ids.sex] == sexes.f)
          orgs_stats[oid]['f'] += 1;
        else
          orgs_stats[oid]['m'] += 1;
      }
    });
  });

  let orgs_stats_normalized = {};

  for (oid in orgs_stats) {
    const oo = orgs_stats[oid];
    oo.m = Math.round((oo.m * 50 / males_p))// * 100) / 100;
    oo.f = Math.round((oo.f * 50 / females_p))// * 100) / 100;
    oo.total = oo.f + oo.m;
    orgs_stats_normalized[oid] = oo;
  }

  let totals = [];
  //let total_votes = 0;
  for (oid in orgs_stats_normalized) {
    const o = orgs_stats_normalized[oid];
    totals.push(o.total);
    //total_votes += o.total;
  }

  const totals_sorted = totals.sort(function(a, b){return b-a});
  const totals_sorted_unique = [...new Set(totals_sorted)];
  let r = [];
  totals_sorted_unique.forEach((value) => {
    for (oid in orgs_stats_normalized) {
      if (orgs_stats_normalized[oid].total == value) {
        const o = orgs_stats_normalized[oid];
        o['tp'] = Math.round((100 * o.total / participants))// * 100) / 100;
        //o['oid'] = parseInt(oid);
        o['name'] = orgs_dict[oid].name;
        o['type'] = orgs_dict[oid].type;
        o['address'] = orgs_dict[oid].address;
        r.push(o);
      }
    }
  });

  console.log(r);

  /*
  let result = '';
  for (key in orgs_stats) {
    let total = orgs_stats[key].total;
    let total_p = parseInt(total * 100 / participants);
    result += `${orgs[key]}: ${total} (${total_p}%) (из которых Женщин: ${orgs_stats[key].f}, Мужчин: ${orgs_stats[key].m})<br>`;
  }
  document.getElementById('orgs').innerHTML = result;
  */
}

function orgs_to_dict() {
  orgs.forEach((org) => {
    const o = {'name': org[1], 'type': org[2], 'address': org[3]};
    orgs_dict[org[0]] = o;
  });
}

function enable_listeners() {
  const category = document.getElementById('category');
  category.addEventListener('change', function(e) {
    let table = new DataTable('#results-fact');
    if (e.target.value == 'Все')
      table.column(2).search('').draw(); // reset
    else
      table.column(2).search(e.target.value).draw();
  });
}

window.onload = async function() {
  uid = get_uid();
  //orgs = (await get_smth('orgs')).orgs;
  orgs_to_dict();

  //votes = (await get_smth('votes')).votes.slice(0, 900);
  visitors = votes.length;

  calc_votes_clean();
  participants = votes_clean.length;

  enable_listeners();
  //calc_voters();
  //calc_sexes();
  //calc_ages();

  calc_orgs_stats('total');
  //calc_orgs_normalized_stats();

  //draw_chart();
}