import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SignIn } from "@/components/sign-in";
import Ticker from "@/components/ticker";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <SignIn />
    </>
  );
}
