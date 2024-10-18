import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`${montserrat} w-full h-full flex flex-col justify-between`}
    >
      <header className="w-full px-4 py-4 flex flex-row justify-center items-center sm:justify-start gap-4">
        <img className="h-32" src="/brand/logo.svg" alt="icon" />
        <div className="flex flex-col">
          <h1 className="font-black text-5xl uppercase">Helix</h1>
          <h2 className="font-black text-5xl uppercase">Identity</h2>
        </div>
      </header>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-6xl uppercase">Not Found</h1>
        <p className="text-md text-gray-800 uppercase">
          Stay on the right side of the barrier please.
        </p>
      </div>
      <footer className="w-full px-4 py-4 flex flex-row justify-between">
        <div>{/* <a>Github</a> */}</div>

        <p className="text-sm text-gray-500 uppercase font-semibold">
          &copy; 2024 Helix Identity
        </p>
      </footer>
    </div>
  );
}
