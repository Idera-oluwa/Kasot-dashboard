import { Bar } from "react-chartjs-2";
const BarChart = ({ chartData }) => {
  return (
    <div className="w-[70%] bg-white">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Number of weekly downloads"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};

export default BarChart