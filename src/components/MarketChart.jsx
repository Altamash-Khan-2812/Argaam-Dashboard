import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = {
  TASI: {
    value: 10639.62,
    change: +20.52,
    percent: "+0.19%",
    color: "text-green-600",
    data: [
      { time: "10:00", value: 10610 },
      { time: "11:00", value: 10640 },
      { time: "12:00", value: 10620 },
      { time: "13:00", value: 10650 },
      { time: "14:00", value: 10630 },
    ],
  },
  NOMU: {
    value: 21000.55,
    change: -35.12,
    percent: "-0.16%",
    color: "text-red-600",
    data: [
      { time: "10:00", value: 21020 },
      { time: "11:00", value: 21010 },
      { time: "12:00", value: 20980 },
      { time: "13:00", value: 21005 },
      { time: "14:00", value: 20990 },
    ],
  },
  MT30: {
    value: 1380.61,
    change: +5.06,
    percent: "+0.37%",
    color: "text-green-600",
    data: [
      { time: "10:00", value: 1375.55 },
      { time: "11:00", value: 1379.20 },
      { time: "12:00", value: 1381.00 },
      { time: "13:00", value: 1380.20 },
      { time: "14:00", value: 1381.50 },
    ],
  },
};

const ranges = [
  "1 Day",
  "5 Days",
  "3 Months",
  "6 Months",
  "9 Months",
  "Year",
  "2 Years",
  "5 Years",
  "All",
];

export default function MarketChart() {
  const [activeTab, setActiveTab] = useState("TASI");
  const [activeRange, setActiveRange] = useState("1 Day");

  const { value, change, percent, color, data } = chartData[activeTab];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Saudi Arabia (Tadawul)</h3>
        <span className="text-sm text-gray-500">
          {new Date().toLocaleDateString()}
        </span>
      </div>

      <div className="flex gap-4 mb-4 border-b">
        {["TASI", "NOMU", "MT30"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-2 font-medium ${
              activeTab === tab
                ? "border-b-2 border-orange-500 text-orange-600"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl font-semibold">{value}</span>
        <span className={`${color} text-sm`}>
          {change} ({percent})
        </span>
      </div>

      <div className="flex gap-3 mt-4 text-sm text-gray-500 mb-5">
        {ranges.map((range) => (
          <button
            key={range}
            onClick={() => setActiveRange(range)}
            className={`pb-1 ${
              activeRange === range
                ? "text-orange-600 border-b-2 border-orange-500 font-medium"
                : "hover:text-orange-600"
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#f97316"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
