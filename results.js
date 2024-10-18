//var SERVER_HOSTNAME = 'http://127.0.0.1:5000';
//if (location.hostname)
  SERVER_HOSTNAME = 'https://scratchit.cards';

var uid, orgs, votes;
const sexes = {1: 'Женский', 2: 'Мужской'};
const ages = {
  1: 'до 14 лет включительно',
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
  13: 'от 70 лет включительно',
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
  votes.forEach((vote) => {
    if (vote[ids.votes] != '')
      ;//console.log(vote);
  });
}

function calc_participants() {
  let p = 0;
  votes.forEach((vote) => {
    if (vote[ids.votes] != '')
      p++;
  });
  return p;
}

function calc_voters() {
  const visitors = votes.length;
  const participants = calc_participants();
  const cr = parseInt(participants * 100 / visitors);
  let result = `Пришли на страничку: ${visitors}. Отметились: ${participants}. CR: ${cr}%`;
  document.getElementById('voters').innerHTML = result;
}

window.onload = async function() {
  uid = get_uid();
  orgs = (await get_smth('orgs')).orgs;
  votes = (await get_smth('votes')).votes;

  calc_voters();
  calc_sexes();
}