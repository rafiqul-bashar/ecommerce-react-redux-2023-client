import React from "react";
import { Link } from "react-router-dom";

export default function SingleCategoryCollection() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery?limit=4")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Jewelery Collection
          </h2>

          <p className="max-w-md mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {data?.map((el, i) => (
            <li key={i}>
              <Link
                to={`/products/${el?.id}`}
                className="block overflow-hidden group"
              >
                <img
                  src={el?.image}
                  alt={el?.title}
                  className="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-3 bg-white">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {el?.title}
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      ${el?.price} USD{" "}
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
