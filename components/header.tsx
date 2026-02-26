import hansStarBg from "@/public/hans-stars.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative max-h-screen -z-1">
      <Image
        src={hansStarBg}
        alt="Header Background image"
        className="object-cover"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 ">
        <h1 className="text-white font-bold">
          MArket needs Data. Iam Your Data. Data is Data
        </h1>
        <p className="text-white">jsut fill foe now</p>
      </div>
    </div>
  );
}
