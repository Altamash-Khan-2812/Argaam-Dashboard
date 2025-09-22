import { stocks } from "../data/stocks";
import IndexSummary from "./IndexSumarry";
import StockItem from "./StockItem";

export default function StockTicker() {
  const scrollingStocks = [...stocks, ...stocks];

  return (
    <div className="flex border-y bg-white">
      <IndexSummary
        name="TASI"
        value="10,652.98"
        change="+33.88"
        percent="+0.32%"
      />

      <div className="overflow-hidden relative flex-1 group">
        <div className="flex whitespace-nowrap animate-marquee group:">
          {scrollingStocks.map((stock, index) => (
            <StockItem key={stock.id + "-" + index} {...stock} />
          ))}
        </div>
      </div>
    </div>
  );
}
