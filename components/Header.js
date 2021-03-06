import {
  SearchIcon,
  MenuIcon,
  ChevronDownIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
// import { useSelector } from "react-redux";
// import { selectItems } from "../src/slices/basketSlice";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  const [colorChange, setColorchange] = useState(false);
  const [yScroll, setYScroll] = useState(window.scrollY);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 100) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };

    window.addEventListener("scroll", changeNavbarColor);

    return function unMount() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, [yScroll]);

  //   const items = useSelector(selectItems);

  return (
    <div
      className={` ${
        !colorChange ? "bg-black bg-opacity-80" : "bg-yellow-600 shadow-md"
      } z-50 fixed top-0 left-0 right-0`}
    >
      {/* <div className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 text-white text-center py-3 overflow-hidden">
                <p className="animate-ping spin-slow duration-900">Carestack sees uptake of 47% on close rate after adding Convin&apos;s Conversation Intelligence in their sales stack.</p>
             </div> */}
      <div className="">
        <div className="flex justify-between max-w-screen-2xl xl:mx-auto items-center mx-5 py-5 md:py-8 xl:px-24">
          <p
            onClick={() => router.push("/")}
            className={` ${
              !colorChange ? "text-yellow-700" : "text-black"
            } cursor-pointer font-bold  text-lg sm:text-xl md:text-4xl flex-shrink-0`}
          >
            Daily Shoppy
          </p>

          <div className="flex space-x-8 text-white">
            <div className="hidden lg:flex space-x-6 text-xl">
              <button className="hover:opacity-80 border-b border-transparent hover:border-white">
                Home
              </button>

              <div className="relative flex items-center group">
                <button className="flex items-center hover:opacity-80">
                  Prime
                  <ChevronDownIcon className="w-4 ml-1" />
                </button>
                <div className="absolute top-0 w-24 hidden group-hover:inline-block">
                  <div className="text-gray-700 mt-12 -ml-24 grid grid-cols-2 gap-3 w-max p-5 bg-white shadow-md rounded-lg text-base">
                    <div className="space-y-3">
                      <p className="hover:bg-blue-100 p-2 cursor-pointer">
                        Try Prime
                      </p>
                      <p className="hover:bg-blue-100 p-2 cursor-pointer">
                        Prime Reading
                      </p>
                      <p className="hover:bg-blue-100 p-2 cursor-pointer">
                        Prime Music
                      </p>
                      <p className="hover:bg-blue-100 p-2 cursor-pointer">
                        Prime Videos
                      </p>
                      <p className="hover:bg-blue-100 p-2 cursor-pointer">
                        Prime Games
                      </p>
                      <p className="hover:bg-blue-100 p-2 cursor-pointer">
                        Explore More
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="hover:bg-blue-100 p-2 cursor-pointer">
                        Free Delivery
                      </p>
                      <p className="hover:bg-blue-100 p-2 cursor-pointer">
                        3 days delivery
                      </p>
                      <p className="hover:bg-blue-100 p-2 cursor-pointer">
                        Deals
                      </p>
                      <p className="hover:bg-blue-100 p-2 cursor-pointer">
                        Saving
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center group">
                <button className="flex items-center hover:opacity-80">
                  Categories
                  <ChevronDownIcon className="w-4 ml-1" />
                </button>
                <div className="absolute top-0 w-24 hidden group-hover:inline-block">
                  <div className="text-gray-700 mt-12 -ml-6 w-max p-5 bg-white shadow-md rounded-lg text-base space-y-3">
                     <p className="hover:bg-blue-100 p-2 cursor-pointer">
                      Fashion & Beauty
                    </p>
                    <p className="hover:bg-blue-100 p-2 cursor-pointer">
                      Grocerries
                    </p>
                    <p className="hover:bg-blue-100 p-2 cursor-pointer">
                      Health
                    </p>
                    <p className="hover:bg-blue-100 p-2 cursor-pointer">
                      Home, Furniture
                    </p>
                    <p className="hover:bg-blue-100 p-2 cursor-pointer">
                      Toys,books
                    </p>
                  </div>
                </div>
              </div>

              <button className="hover:opacity-80 border-b border-transparent hover:border-white">
                Account
              </button>
              <button className="hover:opacity-80 border-b border-transparent hover:border-white">
                About Us
              </button>
            </div>

            <div className="flex text-xs md:text-lg space-x-4 xl:space-x-6">
              <button
                className={` border-2 ${
                  !colorChange
                    ? "border-yellow-600 bg-yellow-600  text-white"
                    : "border-black bg-black  text-white"
                } px-3 py-1 rounded-full `}
              >
                Sign In
              </button>
              <div className="cursor-pointer">
                <ShoppingCartIcon
                  onClick={() => router.push("/checkout")}
                  className={`w-8 ${
                    !colorChange
                      ? "hover:text-red-600 text-white"
                      : "text-white hover:text-black"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
