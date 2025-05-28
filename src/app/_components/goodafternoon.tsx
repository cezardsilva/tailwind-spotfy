import Image from "next/image";
import { PlayBt } from "./playicon";


export default function GoodAfternoon() {
    return (
        <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="bg-white/5 group flex items-center gap-4 hover:bg-white/10 transition-colors">
                <Image src="/pinkfloyd.jpeg" width={80} height={80} alt="Capa do álbum Pink Floyd" />
                <strong className="text-sm">Wish You Where Here</strong>

                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-400 translate-y-6 opacity-0">
                    <PlayBt />
                </button>

            </a>
            <a href="" className="bg-white/5 group flex items-center gap-4 hover:bg-white/10 transition-colors">
                <Image src="/police.jpeg" width={80} height={80} alt="Capa do álbum The Police" />
                <strong className="text-sm">The Police</strong>

                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-400 translate-y-6 opacity-0">
                    <PlayBt />
                </button>

            </a>
            <a href="" className="bg-white/5 group flex items-center gap-4 hover:bg-white/10 transition-colors">
                <Image src="/cristopher.jpeg" width={80} height={80} alt="Capa do álbum Cristopher Cross" />
                <strong className="text-sm">Cristopher Cross</strong>

                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-400 translate-y-6 opacity-0">
                    <PlayBt />
                </button>

            </a>
            <a href="" className="bg-white/5 group flex items-center gap-4 hover:bg-white/10 transition-colors">
                <Image src="/tonybraxton.jpeg" width={80} height={80} alt="Capa do álbum Umbrake My Heart" />
                <strong className="text-sm">Tony Braxton</strong>

                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-400 translate-y-6 opacity-0">
                    <PlayBt />
                </button>

            </a>
            <a href="" className="bg-white/5 group flex items-center gap-4 hover:bg-white/10 transition-colors">
                <Image src="/album.jpg" width={80} height={80} alt="Capa do álbum Foo Fighters" />
                <strong className="text-sm">Foo Fighters</strong>

                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-400 translate-y-6 opacity-0">
                    <PlayBt />
                </button>

            </a>
            <a href="" className="bg-white/5 group flex items-center gap-4 hover:bg-white/10 transition-colors">
                <Image src="/toto.jpeg" width={80} height={80} alt="Capa do álbum Foo Fighters" />
                <strong className="text-sm">Toto</strong>

                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-400 translate-y-6 opacity-0">
                    <PlayBt />
                </button>

            </a>
        </div>
    )
}