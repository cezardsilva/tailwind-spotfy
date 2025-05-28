import { Footer } from "../components/Footer"
import { Sidebar } from "../components/Sidear"
import { Home as ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
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

          <div className="grid grid-cols-6 gap-8 mt-4">
            <a href="" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={120} height={120} alt="Capa do álbum Foo Fighters" className="w-full" />
              <strong className="font-semibold">Wasting Light</strong>
              <span className="text- text-zinc-500">Foo Fighters</span>
            </a>
            <a href="" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={120} height={120} alt="Capa do álbum Foo Fighters" className="w-full" />
              <strong className="font-semibold">Wasting Light</strong>
              <span className="text- text-zinc-500">Foo Fighters</span>
            </a>
            <a href="" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={120} height={120} alt="Capa do álbum Foo Fighters" className="w-full" />
              <strong className="font-semibold">Wasting Light</strong>
              <span className="text- text-zinc-500">Foo Fighters</span>
            </a>
            <a href="" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={120} height={120} alt="Capa do álbum Foo Fighters" className="w-full" />
              <strong className="font-semibold">Wasting Light</strong>
              <span className="text- text-zinc-500">Foo Fighters</span>
            </a>
            <a href="" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={120} height={120} alt="Capa do álbum Foo Fighters" className="w-full" />
              <strong className="font-semibold">Wasting Light</strong>
              <span className="text- text-zinc-500">Foo Fighters</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
