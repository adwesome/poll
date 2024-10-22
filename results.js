//var SERVER_HOSTNAME = 'http://127.0.0.1:5000';
//if (location.hostname)
  SERVER_HOSTNAME = 'https://scratchit.cards';

var uid, orgs, votes, visitors, participants, votes_clean = [], ages_stats = {}, orgs_dict = {};
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

  let result = '';
  for (key in ages_stats) {
    let total = ages_stats[key].total;
    let total_p = parseInt(total * 100 / participants);
    result += `${ages[key]}: ${total} (${total_p}%) (из которых Женщин: ${ages_stats[key].f}, Мужчин: ${ages_stats[key].m})<br>`;
  }
  document.getElementById('ages').innerHTML = result;
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
  for (oid in orgs_stats) {
    const org = orgs_stats[oid];
    org['tp'] = Math.round((100 * org.total / participants) * 10) / 10;
    
    result += `<tr>`;
    result += `<td>${orgs_dict[oid].name}</td>`;
    result += `<td>${orgs_dict[oid].type}</td>`;
    result += `<td>-</td>`;
    result += `<td>${orgs_dict[oid].address}</td>`;
    result += `<td>${org.total}</td>`;
    result += `<td>${org.tp}</td>`;
    result += `<td>${org.f}</td>`;
    result += `<td>${org.m}</td>`;
    result += `</tr>`;
  }

  document.getElementById('results-fact-tbody').innerHTML = result;
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

window.onload = async function() {
  uid = get_uid();
  orgs = (await get_smth('orgs')).orgs;
  orgs_to_dict();

  votes = (await get_smth('votes')).votes.slice(0, 900);
  visitors = votes.length;

  calc_votes_clean();
  participants = votes_clean.length;

  //calc_voters();
  //calc_sexes();
  //calc_ages();
  calc_orgs_stats('total');
  //calc_orgs_normalized_stats();
}