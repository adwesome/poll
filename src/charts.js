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
        text: 'Человек',
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
}