//var SERVER_HOSTNAME = 'http://127.0.0.1:5000';
//if (location.hostname)
  SERVER_HOSTNAME = 'https://scratchit.cards';

var uid, orgs, votes, visitors, participants, votes_clean = [], ages_stats = {};
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
const ids = {'sex': 4, 'age': 5, 'votes': 7};

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
  r['fp'] = parseInt((r.f * 100 / participants));
  r['mp'] = parseInt((r.m * 100 / participants));
  let result = `Женщин: ${r.f} (${r.fp}%). Мужчин: ${r.m} (${r.mp}%).`;

  document.getElementById('sexes').innerHTML = result;
}

function calc_voters() {
  const cr = parseInt(participants * 100 / visitors);
  let result = `Пришли на страничку: ${visitors}. Отметились: ${participants}. CR: ${cr}%`;
  document.getElementById('voters').innerHTML = result;
}

function calc_votes_clean() {
  votes.forEach((vote) => {
    if (vote[ids.votes] != '')
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

window.onload = async function() {
  uid = get_uid();
  orgs = (await get_smth('orgs')).orgs;

  votes = (await get_smth('votes')).votes;
  visitors = votes.length;

  calc_votes_clean();
  participants = votes_clean.length;

  calc_voters();
  calc_sexes();
  calc_ages();
}