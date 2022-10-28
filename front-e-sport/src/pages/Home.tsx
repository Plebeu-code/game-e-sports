import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GameBanner } from "../components/GameBanner";
import { CreateAdBanner } from "../components/CreateAdBanner";
import logo from "../assets/imgs/logo-home.svg";
import { CreateAdModal } from "../components/CreateAdModal";
import axios from "axios";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module

interface ApiGameProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}



function Home() {
  const [games, setGames] = useState<ApiGameProps[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games")
      .then((res) => {
        setGames(res.data);
      });
  }, []);

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: false,
    rtl: true,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 600px)": {
        slides: { perView: 3, spacing: 15 },
      },
      "(min-width: 800px)": {
        slides: { perView: 4, spacing: 15 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 6, spacing: 15 },
      },
    },
  })


  return (
    <div className="max-w-[1344px] px-7 mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />

      <h1 className=" text-white text-4xl font-black mt-20 md:text-6xl">
        Seu
        <span className="bg-lab-gradient text-transparent bg-clip-text text fill-transparent md:text-6xl">
          duo
        </span>
        está aqui!
      </h1>
      <div className=" keen-slider mt-10" ref={ref}>
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default Home;
