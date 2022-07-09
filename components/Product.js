import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

function Product({ id, title, price, description, category, image, rating }) {
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div key={id} className="relative flex flex-col m-5 bg-white p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>

      {rating && (
        <div className="flex items-center ">
          {Array(Math.floor(rating.rate))
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
          <h1 className="ml-3"> {rating.rate}</h1>
        </div>
      )}

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <h1>Rs. {(price * 80).toFixed(2)}</h1>
      </div>

      {/* {hasPrime && (
        <>
          <div className="flex items-center my-1 justify-end mx-2 -mt-5">
            <img className="w-12" src="/Prime-tag-.png" alt="image" />

            <h1 className="text-xs text-gray-500">FREE Next-day Delivery</h1>
          </div>
        </>
      )} */}

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
