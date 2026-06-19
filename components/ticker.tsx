export default function Ticker() {
  return (
    <div className="overflow-hidden border-y border-[#e2e8e4] bg-white py-3 flex">
      <div className="flex w-max whitespace-nowrap animate-ticker">
        {[...Array(2)].map((_, i) => (
          <span key={`group-${i}`} className="inline-flex items-center">
            {[
              "SPCX",
              "NVDA",
              "AAPL",
              "AMD",
              "TSLA",
              "MSFT",
              "META",
              "GOOG",
            ].map((store, j) => (
              <span
                key={`${i}-${j}-${store}`}
                className="font-body text-xs font-medium text-gray-800 mx-8 tracking-widest uppercase"
              >
                {store}
                <span className="mx-8 text-emerald-200">·</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
