import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { findWithCategory } from "../../redux/features/filters/filterSlice";

export default function FeaturedSection() {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const handleFeatureProduct = () => {
    dispatch(findWithCategory("electronics"));
  };

  //   console.log();
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Electronics
                </h2>

                <p className="mt-4 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  rerum quam amet provident nulla error!
                </p>
              </header>

              <button onClick={handleFeatureProduct}>
                <Link
                  to="/products"
                  className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </Link>
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              {data
                ?.reverse()
                .slice(4)
                .map((el, i) => (
                  <li key={i}>
                    <Link to={`/products/${el?.id}`} className="block group">
                      <img
                        src={el?.image}
                        alt={el?.title}
                        className="object-cover w-full rounded aspect-square"
                      />

                      <div className="mt-3">
                        <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                          {el?.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-700">
                          ${el?.price}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
