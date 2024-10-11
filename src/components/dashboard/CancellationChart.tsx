// src/components/DoughnutChart.js
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
  ChartOptions,
} from "chart.js";
import { useRef } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  // data: {
  //   labels: string[];
  //   datasets: Array<{
  //     label: string;
  //     data: number[];
  //     backgroundColor: string[];
  //     borderColor: string[];
  //     borderWidth: number;
  //   }>;
  // };
  options?: unknown; // Optional for custom chart options
}

const CancellationChart: React.FC<DoughnutChartProps> = () => {
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

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: {
        position: "top" as const,
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
            tooltipEl.style.opacity = "0";
            tooltipEl.style.position = "absolute";
            tooltipEl.style.pointerEvents = "none";
            tooltipEl.style.transition = "opacity 0.2s ease";
            document.body.appendChild(tooltipEl);
          }

          // Hide if no tooltip
          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = "0";
            return;
          }

          // function getBody(bodyItem) {
          //   return bodyItem.lines;
          // }

          // Set Text
          if (tooltipModel.body) {
            // const bodyLines = tooltipModel.body.map(getBody);
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
          tooltipEl.style.opacity = "1";
          tooltipEl.style.left =
            position.left + window.pageXOffset + tooltipModel.caretX + "px";
          tooltipEl.style.top =
            position.top + window.pageYOffset + tooltipModel.caretY + "px";
          tooltipEl.style.font = (
            tooltipModel.options.bodyFont as { string: string }
          ).string;
        },
      },
    },
  };

  return (
    <div className="relative">
      <Doughnut
        ref={chartRef}
        data={data}
        options={options}
        className="!w-full !h-full relative"
      />
      <div className="w-48 h-48 absolute top-[51.5%] left-1/2 -translate-x-[49%] -translate-y-1/2  border-2 border-[#BABABA] border-dashed rounded-full text-center flex justify-center items-center">
        <div>
          <h3 className="text-xl/7 text-black font-semibold">70</h3>
          <p className="text-sm/7 text-black font-medium">Session cancelled</p>
        </div>
      </div>
    </div>
  );
};

export default CancellationChart;
