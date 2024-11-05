var orgs;
const c = {
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

var categories = {};
var uid;

function draw_orgs() {
  let result = '';
  
  for (key in c) {
    //result += `<h4>${key} (${categories[key].length})</h4>`;
    result += `<h4>${key}</h4>`;
    result += '<ul>';
    const em = categories[key];
    em.forEach((e) => {
      result += `<li><label><input type="checkbox" id="orgs-${e[0]}" value="${e[0]}"> <b>${e[1]}</b> (${e[2]}) <br><span class="address">${e[3]}</span></label></li>`;
    });
    result += '</ul>';
  }
  
  document.getElementById('list').innerHTML = result;
  checkboxes = document.querySelectorAll('input');
  checkboxes.forEach((el) => {
    el.addEventListener('change', function(e) {
      collect_data_from_form();
    });
  });

  selectors = document.querySelectorAll('select');
  selectors.forEach((el) => {
    el.addEventListener('change', function(e) {
      collect_data_from_form();
    });
  });

  document.getElementById('comment').addEventListener('keyup', function(e) {
    collect_data_from_form();
  });

  set_existing_choises();
}

function save_items_into_local_storage(items) {
  localStorage.setItem('choises2', items);
}
function load_items_from_local_storage() {
  let links = localStorage.getItem('choises2') || "{}";
  return JSON.parse(links);
}

function set_existing_choises() {
  const existing_choises = load_items_from_local_storage();
  if (Object.keys(existing_choises).length == 0)  // pizdec
    return;

  document.getElementById(`city`).value = existing_choises.demography[0];
  document.getElementById(`sex`).value = existing_choises.demography[1];
  document.getElementById(`age`).value = existing_choises.demography[2];
  document.getElementById(`comment`).value = existing_choises.comment;

  existing_choises.orgs.forEach((value) => {
    const f = document.getElementById(`orgs-${value}`);
    if (f)
      f.checked = true;
  });
}

//var SERVER_HOSTNAME = 'http://127.0.0.1:5000';
//if (location.hostname)
  SERVER_HOSTNAME = 'https://scratchit.cards';

async function save_items_into_remote_storage(data) {
  const response = await fetch(SERVER_HOSTNAME + '/orgs', {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  //return await response.json();
  //console.log(data);
}

async function get_orgs() {
  const response = await fetch(SERVER_HOSTNAME + '/orgs/all', {});
  const o = await response.json();
  return o;
}

function collect_data_from_form() {
  let d = [];
  document.querySelectorAll('select').forEach((el) => {
    d.push(parseInt(el.value));
  });

  let o = [];
  document.querySelectorAll('input:checked').forEach((el) => {
    o.push(parseInt(el.value));
  });

  const comment = document.getElementById('comment').value;
  const result = JSON.stringify({'uid': uid, 'demography': d, 'orgs': o, 'comment': comment});
  save_items_into_local_storage(result);
  save_items_into_remote_storage(result);

  return result;
}

function fill_categories() {
  for (let i = 0; i < orgs.length; i++) {
    const e = orgs[i];
    const name = e[1];
    const type = e[2];
    const addr = e[3];
    for (cat in c) {
      if (c[cat].includes(type)) {
        if (cat in categories)
          categories[cat].push(e);
        else
          categories[cat] = [e];

        var index = orgs.indexOf(e);
        if (index !== -1) {
          orgs.splice(index, 1);
          i = i - 1;
        }
        break;
      }
    }
  }
}

function get_uid() {
  var uid = localStorage.getItem('uid');
  if (uid)
    return uid;

  //uid = Date.now();
  //localStorage.setItem('uid', uid);
  //return uid;
}

window.onload = async function() {
  uid = get_uid();
  if (uid)
    document.getElementById('number').innerHTML = uid + ' (он вам не понадобится, это просто подтверждение вашего участия в анкетировании с данного браузера).';
  orgs = (await get_orgs()).orgs;
  fill_categories();
  draw_orgs();
  collect_data_from_form();
}