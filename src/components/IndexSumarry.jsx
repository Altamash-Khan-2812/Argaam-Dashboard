import { ArrowUp, ArrowDown } from "lucide-react";

export default function IndexSummary({ name, value, change, percent }) {
  const isPositive = percent.includes("+");

  return (
    <div className="flex-shrink-0 px-4 py-2 border-r border-gray-200 flex items-center gap-3 min-w-[180px] bg-white">
      <div
        className={`p-2 rounded ${
          isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}
      >
        {isPositive ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
      </div>

      <div>
        <p className="text-lg font-bold">{value}</p>
        <div className="flex gap-2 text-sm">
          <span className={isPositive ? "text-green-600" : "text-red-600"}>
            {percent}
          </span>
          <span className={isPositive ? "text-green-600" : "text-red-600"}>
            {change}
          </span>
        </div>
      </div>
    </div>
  );
}
