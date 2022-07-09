import Product from "./Product";

import { useEffect, useState, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import clsx from "clsx";
import InfiniteScroll from "react-infinite-scroll-component";

function ProductFeed({ products }) {
  const [filter, setFilter] = useState(products);

  const filterProduct = (cat) => {
    const updateList = products.filter((item) => item.category === cat);
    setFilter(updateList);
  };

  const sortByPrice = () => {
    let newData = filter.slice().sort((a, b) => a.price - b.price);
    setFilter(newData);
  };
  const sortByRating = () => {
    let newData = filter.slice().sort((a, b) => a.rating.rate - b.rating.rate);
    newData.reverse();
    setFilter(newData);
  };

  // const triggerRef = useRef(null);
  // const NUM_PER_PAGE = 8;
  // const TOTAL_PAGES = 2;
  // const onGrabData = (currentPage) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       const data2 = filter.slice(
  //         ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
  //         NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
  //       );
  //       resolve(data2);
  //     }, 1000);
  //   });
  // };

  // const { data, loading } = useLazyLoad(triggerRef, onGrabData);

  const [posts, setPosts] = useState(filter);
  const [update, setUpdate] = useState(8);

  const getMorePosts = () => {
    let end = filter.length;
    if (update + 8 < filter.length) {
      end = update + 8;
    }
    const res = filter.slice(update, end);
    setUpdate(update + 8);

    setPosts((posts) => [...posts, ...res]);
  };

  return (
    <div>
      <h1 className="text-center md:text-lg pt-12 pb-5 text-yellow-700">
        TOP CATAGORIES
      </h1>
      <div className="text-sm md:text-lg flex gap-x-3 gap-y-1 justify-center flex-wrap">
        <button
          className="px-3 py-1 border-2 border-black"
          onClick={() => setFilter(products)}
        >
          All
        </button>
        <button
          className="px-3 py-1 border-2 border-black"
          onClick={() => filterProduct("men's clothing")}
        >
          Men&apos;s clothing
        </button>
        <button
          className="px-3 py-1 border-2 border-black"
          onClick={() => filterProduct("women's clothing")}
        >
          Women&apos;s clothing
        </button>
        <button
          className="px-3 py-1 border-2 border-black"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="px-3 py-1 border-2 border-black"
          onClick={() => filterProduct("electronics")}
        >
          Electronics
        </button>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              Filter
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Menu.Items className="origin-top-right z-30 absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={sortByPrice}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Price (low-high)
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={sortByRating}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Rating (high-low)
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>

      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto">
        {filter
          .slice(0, 4)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
            />
          ))}

        <img
          className="md:col-span-full"
          src="https://links.papareact.com/dyz"
          alt=""
        />

        <div className="md:col-span-2">
          {filter
            .slice(4, 5)
            .map(
              ({ id, title, price, description, category, image, rating }) => (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  rating={rating}
                />
              )
            )}
        </div>

        {/* <InfiniteScroll
          dataLength={8}
          next={getMorePosts}
          hasMore={true}
          loader={<p>loading...</p>}
          endMessage={<p>Yay! you have seen it all</p>}
        > */}
        {filter
          .slice(5, products.length)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
            />
          ))}
        {/* </InfiniteScroll> */}
      </div>
      {/* <div
        ref={triggerRef}
        className={clsx("trigger", { visible: loading })}
      ></div> */}
    </div>
  );
}

export default ProductFeed;
