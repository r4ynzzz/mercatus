import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="h-screen flex justify-center items-center bg-linear-to-t/oklab from-black from-5% via-10% to-30% to-white">
      <div className="bottom-5 left-5">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-sans text-black">
          Market Data.
        </h3>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-sans text-black">
          Pure.
        </h3>
        <p className="text-black font-semibold text-sm lg:text-base">
          For the data nerds...
        </p>
        <div className="flex justify-center p-4">
          <Button className="mr-2">Sign In</Button>
          <Button className="ml-2">Scanner</Button>
        </div>
      </div>
    </div>
  );
}
