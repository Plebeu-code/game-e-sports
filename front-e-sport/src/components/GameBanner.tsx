interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <div className="keen-slider__slide">
      <a
        href=""
        className="relative testt rounded-lg overflow-hidden hover:scale-110 ease-in-out duration-300"
      >
        <img src={props.bannerUrl} alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
          <strong className="font-bold text-white block">{props.title}</strong>
          <span className="text-zinc-300 text-sm block">
            {props.adsCount} anúncios
          </span>
        </div>
      </a>
    </div>
  );
}
