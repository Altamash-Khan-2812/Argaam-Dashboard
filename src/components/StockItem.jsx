import { ArrowUp, ArrowDown } from "lucide-react";

export default function StockItem({ code, name, price, change, percent }) {
  const isPositive = percent.includes("+");

  return (
    <div className="flex-shrink-0 px-4 py-2 min-w-[180px] border-r border-gray-200 group-hover:[animation-play-state:paused]">
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-gray-500">{code}</span>
        <span className="font-medium text-blue-600">{name}</span>
      </div>

      <div className="flex items-center gap-2 mt-1">
        <span className="font-semibold">{price}</span>

        <div
          className={`flex items-center gap-1 text-xs px-1.5 py-0.5 rounded ${
            isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {isPositive ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
          <span>{percent}</span>
        </div>

        <span className={isPositive ? "text-green-600 text-xs" : "text-red-600 text-xs"}>
          {change}
        </span>
      </div>
    </div>
  );
}
