import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div
          className="flex flex-col gap-6 p-12 rounded-md bg-black/75 text-white w-4/5 sm:max-w-96 mx-auto sm:text-2xl 
        hover:bg-black/85 hover:cursor-pointer transition ease-in-out duration-200"
        >
          <h1 className="text-4xl font-bold text-yellow-400 hover:text-gray-700 transition ease-in-out duration-200">
            Dan's Computer <br /> Repair Shop
          </h1>
          <address className="  text-yellow-400 hover:text-gray-700 transition ease-in-out duration-200">
            555 Geteway Lane <br /> Kansas City, KS 55555
          </address>
          <p className=" text-yellow-400 hover:text-gray-700 transition ease-in-out duration-200">
            Open Daily: 9 AM to 5 PM
          </p>
          <Link
            href="tel:5555555555"
            className="hover:underline  text-yellow-400 hover:text-gray-700 transition ease-in-out duration-200"
          >
            555-555-5555
          </Link>
        </div>
      </main>
    </div>
  );
}
