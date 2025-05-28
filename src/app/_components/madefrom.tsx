import Image from "next/image";
import { PlayBt } from "./playicon";

export default function MadeFrom() {
    return (
        <div className="grid grid-cols-5 gap-8 mt-4">
            <a href="" className="relative p-2 rounded-md flex flex-col gap-2 hover:bg-white/3 transition-colors group">
                <div className="relative w-full overflow-hidden">
                    <Image src="/direstraits.jpeg" width={120} height={120} alt="Capa do álbum Foo Fighters" className="w-full" />

                    {/* Botão começando completamente dentro da imagem */}
                    <button className="absolute bottom-0 right-2 w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        <PlayBt />
                    </button>
                </div>

                <strong className="font-semibold">Remix</strong>
                <span className="text-sm text-zinc-500">Dire Straits</span>
            </a>

            <a href="" className="relative p-2 rounded-md flex flex-col gap-2 hover:bg-white/3 transition-colors group">
                <div className="relative w-full overflow-hidden">
                    <Image src="/barbara.jpeg" width={120} height={120} alt="Capa do álbum Foo Fighters" className="w-full" />

                    {/* Botão começando completamente dentro da imagem */}
                    <button className="absolute bottom-0 right-2 w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        <PlayBt />
                    </button>
                </div>

                <strong className="font-semibold">The Way We Were</strong>
                <span className="text- text-zinc-500">Barbara Streisand</span>
            </a>

            <a href="" className="relative p-2 rounded-md flex flex-col gap-2 hover:bg-white/3 transition-colors group">
                <div className="relative w-full overflow-hidden">
                    <Image src="/album.jpg" width={120} height={120} alt="Capa do álbum Foo Fighters" className="w-full" />

                    {/* Botão começando completamente dentro da imagem */}
                    <button className="absolute bottom-0 right-2 w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        <PlayBt />
                    </button>
                </div>
                
                <strong className="font-semibold">Wasting Light</strong>
                <span className="text- text-zinc-500">Foo Fighters</span>
            </a>

            <a href="" className="relative p-2 rounded-md flex flex-col gap-2 hover:bg-white/3 transition-colors group">
                <div className="relative w-full overflow-hidden">
                    <Image src="/peterf.jpeg" width={120} height={120} alt="Capa do álbum Foo Fighters" className="w-full" />

                    {/* Botão começando completamente dentro da imagem */}
                    <button className="absolute bottom-0 right-2 w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        <PlayBt />
                    </button>
                </div>
                
                <strong className="font-semibold">Peter Frampton</strong>
                <span className="text- text-zinc-500">Peter Frampton</span>
            </a>

            <a href="" className="relative p-2 rounded-md flex flex-col gap-2 hover:bg-white/3 transition-colors group">
                <div className="relative w-full overflow-hidden">
                    <Image src="/80rock.jpeg" width={120} height={120} alt="Capa do álbum Foo Fighters" className="w-full" />

                    {/* Botão começando completamente dentro da imagem */}
                    <button className="absolute bottom-0 right-2 w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        <PlayBt />
                    </button>
                </div>
                <strong className="font-semibold">80s Rock Classic</strong>
                <span className="text- text-zinc-500">80s Rock Classic</span>
            </a>
        </div>
    )
}