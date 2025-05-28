import { Footer } from "../components/footer"
import { Sidebar } from "../components/sidear"
import { ChevronLeft, ChevronRight } from "lucide-react"
import GoodAfternoon from "./_components/goodafternoon";
import MadeFrom from "./_components/madefrom";

export default function Home() {
  return (
    <div className="h-screen flex flex-col relative">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar com scroll caso o conteúdo seja maior que a tela */}
        <div className="h-full overflow-auto">
          <Sidebar />
          <div className="pb-12"></div>
        </div>

        {/* Main com scroll, garantindo espaço para o Footer */}
        <main className="flex-1 p-4 h-screen overflow-auto pb-16">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="text-semibold text-2xl mt-10">Good Afternoon</h1>
          <GoodAfternoon />

          <h2 className="text-semibold text-xl mt-10">Made from Diego Schell Fernandez</h2>
          <MadeFrom />
          <div className="pb-12"></div>
        </main>
      </div>

      {/* Footer fixo na parte inferior da tela */}
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

