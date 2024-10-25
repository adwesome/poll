//var SERVER_HOSTNAME = 'http://127.0.0.1:5000';
//if (location.hostname)
  SERVER_HOSTNAME = 'https://scratchit.cards';

var uid, /*orgs, votes,*/ visitors, participants, votes_clean = [], ages_stats = {}, orgs_dict = {};
var males, females, males_p, females_p;
const setup = {};
var orgs_stats = {}, table;

const sexes = {'f': 1, 'm': 2};
const ages = {
  1: '10-14 лет',
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
  13: '70-79 лет',
};

const ru = {
  '10-14 лет': {'males': 4716792, 'females': 4471948},
  '15-19 лет': {'males': 4060571, 'females': 3882861},
  '20-24 лет': {'males': 3695263, 'females': 3557843},
  '25-29 лет': {'males': 3698549, 'females': 3593328},
  '30-34 лет': {'males': 5043324, 'females': 4945787},
  '35-39 лет': {'males': 6354235, 'females': 6385462},
  '40-44 лет': {'males': 5651019, 'females': 5914216},
  '45-49 лет': {'males': 4965318, 'females': 5464120},
  '50-54 лет': {'males': 4436200, 'females': 5001925},
  '55-59 лет': {'males': 3818980, 'females': 4615266},
  '60-64 лет': {'males': 4195118, 'females': 5641975},
  '65-69 лет': {'males': 3484287, 'females': 5430683},
  '70-79 лет': {'males': 3718328, 'females': 7203090},
};

const ids_voters = {'sex': 5, 'age': 6, 'orgs': 8};

const bad_voters = [247, 240, 219, 218, 130, 19, 246, 39, 24, 274, 217, 207, 209, 157, 142, 115, 139, 109, 105, 264, 184, 61, 257, 110, 128, 196, 72, 120, 214, 94, 108, 91, 13, 205, 123, 226, 189, 192, 260, 286, 233, 243, 265, 179, 87, 228, 60, 43, 18, 245, 106, 78, 54, 64, 154, 152, 153, 178, 182, 103, 104, 288];

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

/*
function get_uid() {
  var uid = localStorage.getItem('uid');
  if (uid)
    return parseInt(uid);
  else
    return null;
}
*/

/*
async function get_smth(smth) {
  const response = await fetch(SERVER_HOSTNAME + `/${smth}/all`, {});
  const o = await response.json();
  return o;
}
*/

function calc_sexes() {
  let r = {'f': 0, 'm': 0};
  votes_clean.forEach((vote) => {  
    if (vote[ids_voters.sex] == sexes.f)
      r.f += 1;
    else
      r.m += 1;
  });
  
  females = r.f;
  males = r.m;
  females_p = parseInt((females * 100 / participants));
  males_p = parseInt((males * 100 / participants));
  //let result = `Женщин: ${females} (${females_p}%). Мужчин: ${males} (${males_p}%).`;
  //document.getElementById('sexes').innerHTML = result;
}

function calc_voters() {
  const cr = parseInt(participants * 100 / visitors);
  const cr_ = parseInt(3 * 100 / participants);
  let result = `Пришли на страничку: ${visitors}. Отметились: ${participants}. CR: ${cr}%.`;
  result += `<br><br>CR в выигрыш 3 х 1к руб для ${participants} человек, заполнивших анкету: ${cr_}% (на что эти люди уже соглашаются уже сейчас, если подарок 1к руб).`;
  document.getElementById('voters').innerHTML = result;
}

function filter_by_data_clarity() {
  const votes_extra_clean = [];
  votes.forEach((vote) => {
    if (setup.clarity == 'all') {
      if (vote[ids_voters.orgs] != '')
        votes_extra_clean.push(vote);
    }
    else {
      if (vote[ids_voters.orgs] != '' && !bad_voters.includes(vote[0]))
        votes_extra_clean.push(vote);
    }
  });
  votes_clean = votes_extra_clean;
}

function filter_by_sex() {
  if (setup.sex == 'all')
    return;

  const votes_extra_clean = [];
  votes_clean.forEach((vote) => {
    if (setup.sex == 'f' && vote[ids_voters.sex] == 1)
      votes_extra_clean.push(vote);
    else if (setup.sex == 'm' && vote[ids_voters.sex] == 2)
      votes_extra_clean.push(vote);
  });
  votes_clean = votes_extra_clean;
}

function filter_by_search_input() {
  const fd = table.rows( {search:'applied'} ).data();
  if (fd.length == 0)
    return;

  if (!table.search())
    return;

  const votes_extra_clean = [];
  for (let i = 0; i < fd.length; i++) {
    const oid = fd[i][0];
    votes_clean.forEach((vote) => {
      if (vote[ids_voters.orgs].split(',').includes(oid))
        votes_extra_clean.push(vote);
    });
  }
  votes_clean = votes_extra_clean;
}

function collect_votes_by_setup() {
  filter_by_data_clarity();
  filter_by_sex();
  filter_by_search_input();
}

function calc_ages() {
  let ages_stats = {...ages};
  for (key in ages_stats)
    ages_stats[key] = {'total': 0, 'f': 0, 'm': 0};

  votes_clean.forEach((vote) => {
    ages_stats[vote[ids_voters.age]]['total'] += 1;
    if (vote[ids_voters.sex] == sexes.f)
      ages_stats[vote[ids_voters.age]]['f'] += 1;
    else
      ages_stats[vote[ids_voters.age]]['m'] += 1;
  });

  let ms = [], ms_p = [];
  let fs = [], fs_p = [];
  for (key in ages_stats) {
    //let total = ages_stats[key].total;
    //let total_p = parseInt(total * 100 / participants);
    let f = ages_stats[key].f;
    fs.push(f);
    let m = ages_stats[key].m;
    ms.push(m);
    let f_p = Math.round((f * 100 / participants) * 10) / 10;
    let m_p = Math.round((m * 100 / participants) * 10) / 10;
    //result += `${ages[key]}: ${total} (${total_p}%) (из которых Женщин: ${f} (${f_p}), Мужчин: ${m} (${m_p}))<br>`;
    fs_p.push(f_p);
    ms_p.push(m_p);
  }
  
  return {'females': fs, 'males': ms};
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
  orgs_stats = {};

  orgs.forEach((org) => {
    const oid = org[0];
    votes_clean.forEach((vote) => {
      const oids = vote[ids_voters.orgs].split(',');
      if (oids.includes(oid.toString())) {
        if (oid in orgs_stats)
          orgs_stats[oid]['total'] += 1;
        else
          orgs_stats[oid] = {'total': 1, 'f': 0, 'm': 0};

        if (vote[ids_voters.sex] == sexes.f)
          orgs_stats[oid]['f'] += 1;
        else
          orgs_stats[oid]['m'] += 1;
      }
    });
  });
}

function fill_table() {
  let result = [];
  for (oid in orgs_stats) {
    const org = orgs_stats[oid];
    const category = get_category_by_type(orgs_dict[oid].type);

    r = [
      oid, 
      orgs_dict[oid].name, 
      orgs_dict[oid].type, 
      category,
      orgs_dict[oid].address, 
      org.total, 
      Math.round((100 * org.total / participants) * 10) / 10,
      org.f,
      org.f == 0 ? 0 : Math.round((org.f * 100 / females) * 10) / 10,
      org.m, 
      org.m == 0 ? 0 : Math.round((org.m * 100 / males) * 10) / 10,
    ];
    result.push(r);
  }

  table.clear().draw();
  table.rows.add(result);
  table.columns.adjust().draw();
}

function fill_categories() {
  let categories = [];
  for (oid in orgs_stats) {
    const category = get_category_by_type(orgs_dict[oid].type);
    if (!categories.includes(category))
      categories.push(category);
  }

  result = `<option value="all">Все</option>`;
  categories.forEach((category) => {
    result += `<option>${category}</option>`;
  });
  document.getElementById('category').innerHTML = result;
}


function calc_orgs_normalized_stats() {
  let orgs_stats = {};

  orgs.forEach((org) => {
    const oid = org[0];
    votes_clean.forEach((vote) => {
      const oids = vote[ids_voters.orgs].split(',');
      if (oids.includes(oid.toString())) {
        if (oid in orgs_stats)
          orgs_stats[oid]['total'] += 1;
        else
          orgs_stats[oid] = {'total': 1, 'f': 0, 'm': 0};

        if (vote[ids_voters.sex] == sexes.f)
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

function apply_filters() {
  //collect_setup();
  console.log(1)
  redraw_page();

  // category
  //let table = new DataTable('#results');
  if (setup.category == 'all')
    table.column(3).search('').draw(); // reset
  else
    table.column(3).search(setup.category).draw();
}

function enable_listeners() {
  const selectors = document.querySelectorAll('select');
  selectors.forEach((el) => {
    el.addEventListener('change', function(e) {
      apply_filters();
    });
  });
}

function collect_setup() {
  const selectors = document.querySelectorAll('select');
  selectors.forEach((el) => {
    setup[el.id] = el.value;
  });
}

function redraw_page() {
  collect_setup();
  //votes = (await get_smth('votes')).votes.slice(0, 900);
  //visitors = votes.length;
  collect_votes_by_setup();
  participants = votes_clean.length;

  //calc_voters();
  calc_sexes();
  //calc_ages();

  calc_orgs_stats('total');
  fill_table();
  //collect_setup();
  //calc_orgs_normalized_stats();

  draw_chart();
}

function get_ages_data() {
  const population_segezha = 22000;
  const population_russia = 144820422;
  const k = population_segezha / population_russia;
  const ages_data = {'males': [], 'females': []};
  for (age in ru) {
    ages_data.males.push(Math.round(ru[age].males * k));
    ages_data.females.push(Math.round(ru[age].females * k));
  }
  return ages_data;
}

window.onload = async function() {
  //uid = get_uid();
  //orgs = (await get_smth('orgs')).orgs;
  orgs_to_dict();
  apply_datatable('results');
  
  redraw_page();
  fill_categories();
  draw_chart('chart-sg', get_ages_data());
  enable_listeners();
  /*
  collect_setup();
  //votes = (await get_smth('votes')).votes.slice(0, 900);
  //visitors = votes.length;
  collect_votes_by_setup();
  participants = votes_clean.length;

  enable_listeners();
  //calc_voters();
  calc_sexes();
  //calc_ages();

  calc_orgs_stats('total');
  fill_table();
  fill_categories();
  collect_setup();
  //calc_orgs_normalized_stats();

  draw_chart();
  */
}