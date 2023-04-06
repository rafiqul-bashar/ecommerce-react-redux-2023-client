import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useEditProductMutation,
  useGetProductsCategoryQuery,
} from "../../redux/features/product/productApi";

import { toast, Toaster } from "react-hot-toast";
export default function EditProductPage() {
  const {
    data: categories,
    isLoading: categoryLoading,
    isError: categoryError,
  } = useGetProductsCategoryQuery();
  const [editProduct, { data, isSuccess, isLoading, isError }] =
    useEditProductMutation();
  const { productToEdit } = useSelector((state) => state.product);
  const [title, setTitle] = React.useState(productToEdit?.title);
  const [price, setPrice] = React.useState(productToEdit?.price);
  const [description, setDescription] = React.useState(
    productToEdit?.description
  );
  const [category, setCategory] = React.useState(productToEdit?.category);
  const [selectedFile, setSelectedFile] = React.useState();
  const [preview, setPreview] = React.useState();
  const navigate = useNavigate();
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    let imageUrl =
      selectedFile === undefined ? productToEdit?.image : selectedFile;
    editProduct({
      id: productToEdit?.id,
      data: {
        title,
        price,
        description,
        category,
      },
    });
    toast.success("Product Updated Successfully.");
    setTimeout(() => navigate("/products"), 1000);
  };

  React.useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="py-8 max-w-sm mx-auto">
      <h2>Edit Product :</h2>
      <br />
      <h4>*Fill all the information</h4>
      <form onSubmit={handleUpdateProduct}>
        <div className="flex flex-col space-y-3">
          <fieldset className="w-full space-y-1 ">
            <label className="block text-sm font-medium">Product name</label>
            <div className="flex">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                type="text"
                placeholder="e:g: t-shirt "
                className="flex flex-1 sm:text-sm rounded-l-sm focus:outline-none text-gray-800 bg-gray-100 "
              />
            </div>
          </fieldset>
          <fieldset className="w-full space-y-1 ">
            <label className="block text-sm font-medium">Product price</label>
            <div className="flex">
              <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-sm bg-gray-700  text-gray-100 ">
                $
              </span>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                type="number"
                placeholder="99 999,99"
                className="flex flex-1  border sm:text-sm rounded-r-sm focus:outline-none text-gray-800 bg-gray-100 "
              />
            </div>
          </fieldset>
          <fieldset className="w-full space-y-1 ">
            <label className="block text-sm font-medium">Select Category</label>
            <select
              defaultValue={category}
              required
              className="w-full bg-gray-100 focus:outline-none capitalize"
            >
              {categories?.map((el, i) => (
                <option
                  onClick={(e) => setCategory(e.target.value)}
                  key={i}
                  value={el}
                  className="capitalize "
                >
                  {el}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset className="w-full space-y-1 ">
            <label className="block text-sm font-medium">
              Product description
            </label>
            <div className="flex">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                type="text"
                placeholder="e:g: this is a cool product. "
                className="flex flex-1 sm:text-sm rounded-l-sm focus:outline-none text-gray-800 bg-gray-100 resize-none h-20"
              />
            </div>
          </fieldset>
          <fieldset className="w-full space-y-1 ">
            <label className="block text-sm font-medium">Product image</label>
            <img
              src={selectedFile ? preview : productToEdit?.image}
              className="h-28  mx-auto py-2"
            />
            <input
              type="file"
              onChange={onSelectFile}
              className="text-gray-800 bg-gray-100 cursor-pointer"
            />
          </fieldset>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-blue-600 py-1 font-semibold  text-white "
          >
            Update Product
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
