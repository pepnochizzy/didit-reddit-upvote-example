"use client";
import glorpGif from "@/../public/glorpGif.gif";
import Image from "next/image";

export default function Error({ error, reset }) {
  return (
    <>
      <div className="max-w-screen-lg mx-auto pt-4 pr-4 flex flex-col items-center">
        <h1 className="text-2xl">So sorry, something went wrong!</h1>
        <h2 className="text-zinc-400 mb-4 text-xl">{error.message}</h2>
        <div className="pb-4">
          <Image src={glorpGif} alt={"error gif"} width={650} />
        </div>
        <button
          onClick={() => reset()}
          className="bg-pink-300 text-black px-3 py-2 rounded"
        >
          Try again
        </button>
      </div>
    </>
  );
}
