import TypingEffect from "@/components/typingEffect";
import { NextPage } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div
      className={`${montserrat} w-full h-full flex flex-col justify-between`}
    >
      <header className="w-full px-4 py-4 flex flex-row justify-center items-center sm:justify-start gap-4">
        <img className="h-28" src="/brand/logo.svg" alt="icon" />
        <div className="flex flex-col">
          <h1 className="font-black text-4xl uppercase">Helix</h1>
          <h2 className="font-black text-4xl uppercase">Identity</h2>
        </div>
      </header>
      <div className="px-4 py-4 w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center sm:text-left font-semibold uppercase">
          Access control for your
        </h1>
        <TypingEffect
          globalClassName="text-5xl text-center sm:text-left font-semibold uppercase"
          words={[
            { text: "Arena", className: "text-red-400" },
            { text: "Festival", className: "text-[#e879f9]" },
            { text: "Airport", className: "text-blue-400" },
            { text: "Stadium", className: "text-orange-400" },
            { text: "Train Station", className: "text-purple-400" },
          ]}
        />
      </div>
      <footer className="w-full px-4 py-4 flex flex-row justify-between">
        <div>{/* <a>Github</a> */}</div>

        <p className="text-sm text-gray-500 uppercase font-semibold">
          &copy; 2024 Helix Identity
        </p>
      </footer>
    </div>
  );
};

export default Home;
