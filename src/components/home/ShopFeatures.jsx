import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiPhoneFindLine } from "react-icons/ri";
import { AiFillGift } from "react-icons/ai";

export default function ShopFeatures() {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
      {" "}
      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <RiPhoneFindLine className="h-8 w-8" />
              </div>
              <h2 className="text-gray-900 text-lg title-font font-bold">
                Order Tracking
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <TbTruckDelivery className="h-8 w-8" />
              </div>
              <h2 className="text-gray-900 text-lg title-font font-bold">
                Fast Delivery
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <AiFillGift className="h-8 w-8" />
              </div>
              <h2 className="text-gray-900 text-lg title-font font-bold">
                Gift Cards
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
