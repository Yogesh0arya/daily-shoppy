function HeroScreen() {
  return (
    <div className="bg-[url('/hero-img.jpg')] h-screen bg-cover font-extrabold text-yellow-900">
      <div className="max-w-6xl bg-white h-screen bg-opacity-40 mx-auto px-5 flex flex-col items-center justify-center pt-44">
        <p className="text-lg md:text-3xl xl:text-4xl lg:w-[600px] 2xl:text-5xl">
          NEW ARRIVAL DAILY{" "}
        </p>
        <h1 className="text-lg md:text-3xl xl:text-4xl lg:w-[600px] 2xl:text-5xl lg:my-5">
          {" "}
          BEST SEASONAL HITS!
        </h1>

        <div className="bg-white rounded-sm p-2 w-full md:w-max">
          <input
            type="email"
            className="w-full md:mr-12 outline-none md:w-80 lg:w-96 text-black"
            placeholder="Serach your location..."
          />
          <button className="hidden text-white md:inline bg-gradient-to-r from-yellow-600 to-yellow-800 p-1 lg:p-3 xl:text-lg rounded-sm">
            Order Online
          </button>
        </div>
        <button className="mt-8 text-white md:hidden w-full bg-gradient-to-r from-yellow-600 to-yellow-800 p-1 lg:p-3 xl:text-lg rounded-full">
          Order Online
        </button>
      </div>
    </div>
  );
}

export default HeroScreen;
