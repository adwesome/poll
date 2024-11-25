var options = {
  indexAxis: 'y',
  plugins: {
    tooltip: {
      callbacks: {
        label: (c) => {          
          const value = Number(c.raw);
          const positiveOnly = value > 0 ? value : -value;
          return `${c.dataset.label}: ${positiveOnly.toString()}`;
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Кол-во человек',
      },
      suggestedMin: -16,
      suggestedMax: 16,
      //min: -14,
      //max: 14,
      ticks: {
        //stepSize: 2,
        callback: (v) => v > 0 ? v : -v,
      },      
    },
  },
};

const a = [
  'demonstration',
  '1vAbLmGz',//nb
  '2RImVByD',//mk
  '3JrdNoOG',//vsl
  '4ynB1E2A',//galan
  '5QcimI2E',//dns
  '6XsrX7k5',//ulr
  '7TBDqDie',//uvlrp
  '8kZdDx0X',//lnt
  '9D1Mj07D',//ugvos
  '10FR5qq',
  '11IPyos',
  '12nlQut',
  '13luJFQ',
  '14kwl2d',
  '15mU6Zd',
  '16vhQzS',
  '17TgFVx',
  '18lXhs4',
  '19zVIKB',
  '20aeDzy',
  '21ITf18',
  '22fcfGr',
  '23IkpMq',
  '24gbUS7',
  '25fOtgL',
  '26xfyUP',
  '27evarg',
  '28lI1wB',
  '29TXEpH',
  '30dYQiM',
  '315TlP8',
  '321fA6m',
  '33ajKmB',
  '34JfhDr',
  '356sZR0',
  '36y6K6f',
  '37aPddo',
  '38gqcYg',
  '39T6ou2',
  '40MTeDK',
  '41y1Z22',
  '429IE0V',
  '432daKw',
  '44pH1pV',
  '45TLjrO',
  '46uDlAF',
  '47A4PXS',
  '48xN5AJ',
  '49ehXYH',
  '50Zzvkf',
  '519WNep',
  '52lXUdy',
  '53Ml9fN',
  '54SGRij',
  '55OeGEt',
  '56omfXQ',
  '57fbwBg',
  '58QX2DN',
  '59cSFUl',
  '60rEClr',
  '611fOBE',
  '62Lj2QU',
  '6369ZiB',
  '64tPLFE',
  '65vgG8s',
  '66XPi7s',
  '67EIHTs',
  '68L2OYk',
  '69kiKEt',
  '70qC39A',
  '71CjNsr',
  '726EBvE',
  '73sa30a',
  '74uKEGE',
  '75okcsO',
  '76WEnYO',
  '77dNYGQ',
  '78vCSye',
  '79lSKKo',
  '80q7iEK',
  '81YCbov',
  '82byjl8',
  '83Ydxz2',
  '84WCaQG',
  '85mZPF8',
  '86hqx5K',
  '87n0Q7C',
  '88PeuvE',
  '89AttEu',
  '90SzcKT',
  '9188zKH',
  '92xN31Y',
  '93OqxNu',
  '94vuylC',
  '95MJokk',
  '96owOd7',
  '97UfinJ',
  '98fvCIF',
  '99vYov9',
];

function compose_labels() {
  let labels = [];
  for (key in ages) {
    labels.push(ages[key]);
  }
  return labels;
}

function draw_chart(canvas_id, ages_data) {
  if (!canvas_id)
    canvas_id = 'chart';
  if (!ages_data)
    ages_data = calc_ages();

  let existing_chart = Chart.getChart(canvas_id);
  if (existing_chart != undefined)
    existing_chart.destroy();

  new Chart(canvas_id, {
    type: 'bar',
    options: options,
    data: {
      labels: compose_labels().reverse(),
      datasets: [
        {
          label: "Мужчины",
          stack: "Stack 0",
          backgroundColor: "steelblue",
          data: ages_data['males'].reverse().map((k) => -k),
          //barThickness: 24,
          barPercentage: 1.17,
        },
        {
          label: "Женщины",
          stack: "Stack 0",
          backgroundColor: "#EE7989",
          data: ages_data['females'].reverse(),
          //barThickness: 24,
          barPercentage: 1.17,
        },
      ],
    }
  });

  ages_data = calc_ages();
  canvas_id = 'chart-sexes'
  existing_chart = Chart.getChart(canvas_id);
  if (existing_chart != undefined)
    existing_chart.destroy();

  new Chart(canvas_id, {
    type: 'doughnut',
    //options: options,
    data: {
      labels: [
        'Женщины',
        'Мужчины',
      ],
      datasets: [{
        //label: 'My First Dataset',
        data: [sum_of_array(ages_data.females), sum_of_array(ages_data.males)],
        backgroundColor: [
          '#EE7989',
          'steelblue',
        ],
        hoverOffset: 4
      }]
    }
  });

  canvas_id = 'chart-females'
  existing_chart = Chart.getChart(canvas_id);
  if (existing_chart != undefined)
    existing_chart.destroy();

  const fs = sum_of_array(ages_data.females);
  var rest = females - fs;
  new Chart(canvas_id, {
    type: 'doughnut',
    //options: options,
    data: {
      labels: [
        'Женщины',
        'Остальные женщины',
      ],
      datasets: [{
        //label: 'My First Dataset',
        data: [fs, rest],
        backgroundColor: [
          '#EE7989',
          '#f5cad0',
        ],
        hoverOffset: 4
      }]
    }
  });

  canvas_id = 'chart-males'
  existing_chart = Chart.getChart(canvas_id);
  if (existing_chart != undefined)
    existing_chart.destroy();

  const ms = sum_of_array(ages_data.males);
  rest = males - ms;
  
  new Chart(canvas_id, {
    type: 'doughnut',
    //options: options,
    data: {
      labels: [
        'Мужчины',
        'Остальные мужчины',
      ],
      datasets: [{
        //label: 'My First Dataset',
        data: [ms, rest],
        backgroundColor: [
          'steelblue',
          '#cbdbe9',
        ],
        hoverOffset: 4
      }]
    }
  });

}


