import { useState } from "react";

export function ButtonPlay1() {

    const [isPlaying, setIsPlaying] = useState(false);

    return (

        <button
            title={isPlaying ? "Pause" : "Play"}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black cursor-pointer"
            onClick={() => setIsPlaying(!isPlaying)}
        >
            {isPlaying ? (
                // Ícone de "Pause"
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(0 0 0)"
                >
                    <path
                        d="M7 3.25C5.75736 3.25 4.75 4.25736 4.75 5.5V18.4999C4.75 19.7426 5.75736 20.75 7 20.75H8.75C9.99264 20.75 11 19.7426 11 18.4999V5.5C11 4.25736 9.99264 3.25 8.75 3.25H7Z"
                        fill="#343C54"
                    />
                    <path
                        d="M16.25 3.25C15.0074 3.25 14 4.25736 14 5.5V18.4999C14 19.7426 15.0074 20.75 16.25 20.75H18C19.2426 20.75 20.25 19.7426 20.25 18.4999V5.5C20.25 4.25736 19.2426 3.25 18 3.25H16.25Z"
                        fill="#343C54"
                    />
                </svg>
            ) : (
                // Ícone de "Play"
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(0 0 0)"
                >
                    <path
                        d="M19.4357 13.9174C20.8659 13.0392 20.8659 10.9608 19.4357 10.0826L9.55234 4.01389C8.05317 3.09335 6.125 4.17205 6.125 5.93128L6.125 18.0688C6.125 19.828 8.05317 20.9067 9.55234 19.9861L19.4357 13.9174Z"
                        fill="#000000"
                    />
                </svg>
            )}
        </button>
    )

}