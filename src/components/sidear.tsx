import { Search, Library } from "lucide-react"
import React from "react"
import Image from "next/image";
import { Music } from "lucide-react"

export function Sidebar() {
    return (
        <aside className="w-64 bg-zinc-950 p-6 group">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            <nav className="space-y-5 mt-10">
                <a href="#" className="flex items-center gap-3 text-xs font-semibold text-zinc-300" >
                    <svg width="30" height="30" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                        <path d="M13.85 3.70391C13.05 3.10391 11.95 3.10391 11.15 3.70391L4.65 8.57891C4.08344 9.00383 3.75 9.6707 3.75 10.3789V18.5003C3.75 19.743 4.75736 20.7503 6 20.7503H10.25C10.6642 20.7503 11 20.4145 11 20.0003V17.0003C11 16.1719 11.6716 15.5003 12.5 15.5003C13.3284 15.5003 14 16.1719 14 17.0003V20.0003C14 20.4145 14.3358 20.7503 14.75 20.7503H19C20.2426 20.7503 21.25 19.743 21.25 18.5003V10.3789C21.25 9.6707 20.9166 9.00383 20.35 8.57891L13.85 3.70391Z" fill="#fdfdfd" />
                    </svg>
                    Home
                </a>
                <a href="#" className="flex items-center gap-3 text-xs font-semibold text-zinc-300">
                    <Search />
                    Search
                </a>
                <a href="#" className="flex items-center gap-3 text-xs font-semibold text-zinc-200 relative">
                    {/* Library icone inicial oculto */}
                    <Library className="absolute left-0 opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />

                    {/* Your Library sempre visível e movendo para a direita */}
                    <span className="ml-0 group-hover:ml-6 transition-all duration-300">Your Library</span>
                </a>
            </nav>

            <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                    <div className="flex items-center gap-2">
                        {/* <Image src="/album.jpg" width={60} height={60} alt="Capa do álbum Foo Fighters" /> */}
                        <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center">
                            <Music width={24} height={24} />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-base text-green-500 font-bold">Anos 90</p>
                            <p className="text-xs whitespace-nowrap">Playlist . Diego Fernandez</p>
                        </div>
                    </div>
                </a>

                 <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                    <div className="flex items-center gap-2">
                        <Image src="/pinkfloyd.jpeg" width={48} height={48} alt="Capa do álbum Wish You Where Here" />
                        <div className="flex flex-col">
                            <p className="text-base text-zinc-200 font-bold">Pink Floyd</p>
                            <p className="text-xs whitespace-nowrap">Playlist . Diego Fernandez</p>
                        </div>
                    </div>
                </a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                    <div className="flex items-center gap-2">
                        {/* <Image src="/album.jpg" width={60} height={60} alt="Capa do álbum Foo Fighters" /> */}
                        <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center">
                            <Music width={24} height={24} />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-base text-green-500 font-bold">Bandas 70</p>
                            <p className="text-xs whitespace-nowrap">Playlist . Diego Fernandez</p>
                        </div>
                    </div>
                </a>

                <div className="h-96"> </div>


            </nav>

        </aside>
    )
}