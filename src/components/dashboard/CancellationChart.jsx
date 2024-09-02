// src/components/DoughnutChart.js
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React, { useEffect, useRef } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const CancellationChart = () => {
  const chartRef = useRef(null);

  const data = {
    datasets: [
      {
        data: [20, 9, 35, 10],
        backgroundColor: ["#97DFFF", "#C68CFF", "#FFC59B", "#FBBB5E"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: false, // Disable the default tooltip
        external: function (context) {
          // Tooltip Element
          let tooltipEl = document.getElementById("chartjs-tooltip");

          // Create element on first render
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "chartjs-tooltip";
            tooltipEl.style.opacity = 0;
            tooltipEl.style.position = "absolute";
            tooltipEl.style.pointerEvents = "none";
            tooltipEl.style.transition = "opacity 0.2s ease";
            document.body.appendChild(tooltipEl);
          }

          // Hide if no tooltip
          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }

          function getBody(bodyItem) {
            return bodyItem.lines;
          }

          // Set Text
          if (tooltipModel.body) {
            const bodyLines = tooltipModel.body.map(getBody);
            const labels = [
              "Dishant Gajera",
              "John Doe",
              "Jane Smith",
              "Alice Johnson",
            ];
            const sessionCounts = [20, 9, 35, 10];
            const index = tooltipModel.dataPoints[0].dataIndex;
            const label = labels[index];
            const count = sessionCounts[index];

            const innerHtml = `
              <div class="p-2.5 bg-white rounded shadow-[0px_4px_15px_0px_#00000040]">
                <p class="text-xs_18 text-primary">${label}</p>
                <p class="pt-2.5 text-sm font-medium text-primary">${count} session cancelled</p>
              </div>
            `;

            tooltipEl.innerHTML = innerHtml;
          }

          const position = context.chart.canvas.getBoundingClientRect();
          tooltipEl.style.opacity = 1;
          tooltipEl.style.left =
            position.left + window.pageXOffset + tooltipModel.caretX + "px";
          tooltipEl.style.top =
            position.top + window.pageYOffset + tooltipModel.caretY + "px";
          tooltipEl.style.font = tooltipModel.options.bodyFont.string;
        },
      },
    },
  };

  return (
    <Doughnut
      ref={chartRef}
      data={data}
      options={options}
      className="!w-full !h-full"
    />
  );
};

export default CancellationChart;
