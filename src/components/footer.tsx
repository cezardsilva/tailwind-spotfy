"use client";

import { ButtonPlay1 } from "@/app/_components/buttonplay1";
import { Home as  LayoutList, Maximize, Repeat2, MonitorSpeaker, Volume2 } from "lucide-react"
import Image from "next/image";

export function Footer() {

    return (
        <footer className="bg-zinc-950 border-t border-zinc-900 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Image src="/pinkfloyd.jpeg" width={24} height={24} alt="Capa do álbum Foo Fighters" className="w-full" />
                <div className="flex flex-col">
                    <strong className="font-normal whitespace-nowrap">Whish You Where Here</strong>
                    <span className="text-xs text-zinc-400 whitespace-nowrap">Pink Floyd</span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-6">
                    {/* <Shuffle size={20} className="text-zinc-200" /> */}
                    <button
                        title="Enable shufrle"
                    >
                        <svg width="25" height="25" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                            <path d="M19.2132 3.55711C19.4935 3.44103 19.816 3.5052 20.0305 3.71969L22.2804 5.96959C22.5733 6.26248 22.5733 6.73735 22.2804 7.03025L20.0303 9.28035C19.8158 9.49485 19.4932 9.55902 19.213 9.44293C18.9327 9.32683 18.75 9.05334 18.75 8.74999L18.7501 7.24999L17.1865 7.25002C16.9686 7.25002 16.7614 7.34484 16.6189 7.50981L12.741 12L16.6189 16.4902C16.7614 16.6552 16.9685 16.75 17.1865 16.75L18.7501 16.75L18.7502 15.25C18.7502 14.9466 18.933 14.6732 19.2132 14.5571C19.4935 14.441 19.816 14.5052 20.0305 14.7197L22.2804 16.9696C22.5733 17.2625 22.5733 17.7374 22.2804 18.0302L20.0303 20.2803C19.8158 20.4949 19.4932 20.559 19.213 20.4429C18.9327 20.3268 18.75 20.0533 18.75 19.75L18.7501 18.25L17.1865 18.25C16.5326 18.25 15.9111 17.9656 15.4837 17.4707L11.75 13.1475L8.01634 17.4707C7.58894 17.9656 6.96738 18.25 6.31349 18.25H3.25C2.83579 18.25 2.5 17.9142 2.5 17.5C2.5 17.0858 2.83579 16.75 3.25 16.75H6.31349C6.53145 16.75 6.73864 16.6552 6.8811 16.4902L10.759 12L6.8811 7.50981C6.73864 7.34485 6.53145 7.25002 6.31349 7.25002H3.25C2.83579 7.25002 2.5 6.91424 2.5 6.50002C2.5 6.08581 2.83579 5.75002 3.25 5.75002H6.31349C6.96738 5.75002 7.58894 6.03449 8.01634 6.52938L11.75 10.8526L15.4837 6.52938C15.9111 6.0345 16.5326 5.75003 17.1865 5.75002L18.7501 5.74999L18.7502 4.24999C18.7502 3.94665 18.933 3.67318 19.2132 3.55711Z" fill="#c4c4c4" />
                        </svg>
                    </button>

                    {/* <SkipBack size={20} className="text-zinc-200" /> */}
                    <button
                        title="Previous"
                    >
                        <svg width="25" height="25" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                            <path d="M5.91406 4.5C5.91406 4.08579 6.24985 3.75 6.66406 3.75C7.07828 3.75 7.41406 4.08579 7.41406 4.5V9.83812L15.567 4.27346C17.0605 3.2541 19.0854 4.32365 19.0854 6.13185L19.0854 17.868C19.0854 19.6762 17.0605 20.7457 15.567 19.7264L7.41406 14.1617V19.4999C7.41406 19.9142 7.07828 20.25 6.66406 20.25C6.24985 20.25 5.91406 19.9142 5.91406 19.4999V4.5Z" fill="#c4c4c4" />
                        </svg>
                    </button>

                    <ButtonPlay1 />
                    {/* <SkipForward size={20} className="text-zinc-200" /> */}
                    <button
                        title="Next"
                    >
                        <svg width="25" height="25" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                            <path d="M18.3354 3.75C18.7496 3.75 19.0854 4.08579 19.0854 4.5V19.4999C19.0854 19.9142 18.7496 20.25 18.3354 20.25C17.9212 20.25 17.5854 19.9142 17.5854 19.4999V14.1617L9.43248 19.7264C7.939 20.7457 5.91406 19.6762 5.91406 17.868V6.13185C5.91406 4.32365 7.939 3.2541 9.43248 4.27346L17.5854 9.83812V4.5C17.5854 4.08579 17.9212 3.75 18.3354 3.75Z" fill="#c4c4c4" />
                        </svg>
                    </button>

                    <button title="Repeat">
                        <Repeat2 size={20} className="text-zinc-200" />
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400">0:31</span>
                    <div className="h-1 rounded-full w-96 bg-zinc-600">
                        <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
                    </div>
                    <span className="tex-xs text-zinc-400">2:14</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                {/* <MicVocal size={20} /> */}

                <button title="Lyrics">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                        <path d="M19.0897 4.90859C16.8795 2.69844 13.2962 2.69844 11.086 4.90859C9.77098 6.22364 9.23894 8.02539 9.48801 9.7317L9.51667 9.92805L3.79624 16.56C3.02657 17.4524 3.07577 18.7874 3.90902 19.6206L4.37791 20.0895C5.21116 20.9228 6.54617 20.972 7.43849 20.2023L14.0707 14.4817L14.2666 14.5103C15.9729 14.7593 17.7746 14.2273 19.0897 12.9123C21.2998 10.7021 21.2998 7.11874 19.0897 4.90859ZM12.1467 5.96925C13.771 4.34489 16.4047 4.34489 18.029 5.96925C19.6534 7.59362 19.6534 10.2272 18.029 11.8516C17.1239 12.7567 15.9059 13.158 14.7212 13.0538L10.9445 9.27704C10.8403 8.09239 11.2416 6.87438 12.1467 5.96925ZM4.93209 17.5398L10.5601 11.0149L12.9836 13.4385L6.45876 19.0664C6.16132 19.323 5.71632 19.3066 5.43857 19.0289L4.96968 18.56C4.69193 18.2822 4.67553 17.8372 4.93209 17.5398Z" fill="#c4c4c4" fillRule="evenodd" clipRule="evenodd" />
                    </svg>

                </button>

                <LayoutList size={20} />
                <MonitorSpeaker size={20} />
                <div className="flex items-center gap=2">
                    <Volume2 size={20} />
                    <div className="h-1 rounded-full w-24 bg-zinc-600">
                        <div className="bg-zinc-200 w-16 h-1 rounded-full"></div>
                    </div>
                </div>

                <Maximize size={18} />
            </div>
        </footer>
    )
}