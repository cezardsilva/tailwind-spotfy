import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image";

export default function Home() {
  return (

    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className="space-y-5 mt-10">
            <a href="#" className="flex items-center gap-3 text-xs font-semibold text-zinc-300" >
              <HomeIcon />
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
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="text-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="bg-white/5 group flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum Foo Fighters" />
              <strong>Wasting Light</strong>

              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>

            </a>
            <a href="" className="bg-white/5 group flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum Foo Fighters" />
              <strong>Wasting Light</strong>

              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>

            </a>
            <a href="" className="bg-white/5 group flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum Foo Fighters" />
              <strong>Wasting Light</strong>

              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>

            </a>
            <a href="" className="bg-white/5 group flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum Foo Fighters" />
              <strong>Wasting Light</strong>

              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>

            </a>
            <a href="" className="bg-white/5 group flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum Foo Fighters" />
              <strong>Wasting Light</strong>

              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>

            </a>
            <a href="" className="bg-white/5 group flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum Foo Fighters" />
              <strong>Wasting Light</strong>

              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>

            </a>
          </div>

          <h2 className="text-semibold text-2xl mt-10">Made form Diego Schell Fernandez</h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <div className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={120} height={120} alt="Capa do álbum Foo Fighters" className="w-full" />
              <strong className="font-semibold">Wasting Light</strong>
              <span className="text-sm text-zinc-400">Foo Fighters</span>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
