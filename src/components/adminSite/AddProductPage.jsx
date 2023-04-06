import React, { useEffect } from "react";
import {
  useAddProductMutation,
  useGetProductsCategoryQuery,
} from "../../redux/features/product/productApi";
import { toast, Toaster } from "react-hot-toast";
export default function AddProductPage() {
  const { data: categories } = useGetProductsCategoryQuery();

  const [addProduct, { data, isSuccess, isLoading, isError }] =
    useAddProductMutation();
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState(null);
  const [selectedFile, setSelectedFile] = React.useState();

  const [preview, setPreview] = React.useState();
  const handleAddProduct = (e) => {
    e.preventDefault();
    addProduct({
      title,
      price,
      description,
      category,
    });

    toast.success("Product Added Successfully.");
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setCategory(null);
    setDescription("");
    setPrice(0);
    setSelectedFile(undefined);
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
      <h2>Add New Product :</h2>
      <br />
      <h4>*Fill all the information</h4>
      <form onSubmit={handleAddProduct}>
        <div className="flex flex-col space-y-3">
          <fieldset className="w-full space-y-1 ">
            <label className="block text-sm font-medium">Product name</label>
            <div className="flex">
              <input
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
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full bg-gray-100 focus:outline-none capitalize"
            >
              {categories?.map((el, i) => (
                <option key={i} value={el} className="capitalize ">
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
              src={
                selectedFile
                  ? preview
                  : "https://preyash2047.github.io/assets/img/no-preview-available.png?h=824917b166935ea4772542bec6e8f636"
              }
              className="h-28  mx-auto py-2"
            />
            <input
              required
              type="file"
              onChange={onSelectFile}
              className="text-gray-800 bg-gray-100 cursor-pointer"
            />
          </fieldset>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-emerald-600 py-1 font-semibold  text-white "
          >
            Add Product
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
