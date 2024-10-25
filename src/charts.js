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
        min: -14,
        max: 14,
        ticks: {
          stepSize: 2,
          callback: (v) => v > 0 ? v : -v,
        },      
      },
  },
};

function draw_chart() {
  const ages_data = calc_ages();

  let existing_chart = Chart.getChart("chart"); // <canvas> id
  if (existing_chart != undefined)
    existing_chart.destroy();

  new Chart('chart', {
    type: 'bar',
    options: options,
    data: {
      labels: ['до 14 лет', '15-19 лет', '20-24 лет', '25-29 лет', '30-34 лет', '35-39 лет', '40-44 лет', '45-49 лет', '50-54 лет', '55-59 лет', '60-64 лет', '65-69 лет', 'от 70 лет'].reverse(),
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