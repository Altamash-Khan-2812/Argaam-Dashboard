import Navbar from "../components/Navbar";
import StockTicker from "../components/StockTicker";
import MarketChart from "../components/MarketChart";
import NewsCard from "../components/NewsCard";
import news from "../data/news";
import { useState } from "react";

export default function Dashboard() {
  const [activeNews, setActiveNews] = useState(news[0]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <StockTicker />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* LEFT NEWS IMAGE + LIST */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 flex justify-center items-start">
              <img
                src={activeNews.image}
                alt={activeNews.title}
                className=" shadow-md w-full object-cover"
              />
            </div>

            <div className="col-span-2 space-y-3">
              {news.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveNews(item)}
                >
                  <NewsCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CHART */}
        <div className="lg:col-span-1">
          <MarketChart />
        </div>
      </div>
    </div>
  );
}
