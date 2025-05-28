import { Home as Search, Library } from "lucide-react"
import React from "react"

export function Sidebar() {
    return (
        <aside className="w-64 bg-zinc-950 p-6">
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
                <a href="#" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
                    <Library />
                    Your Libary
                </a>
            </nav>

            <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" >Hot Hits Brasil</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" >Aniver Funk</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" >Playlist 1</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" >Ny Playlist</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" >Playlist 1</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" >Playlist 1</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" >Playlist 1</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" >Playlist 1</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" >Playlist 1</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" >Playlist 1</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" >Playlist 1</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" >Playlist 1</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" >Playlist 1</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" >Playlist 1</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100" >Playlist 1</a>

            </nav>

        </aside>
    )
}