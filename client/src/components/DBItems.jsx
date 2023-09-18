import React from "react";

import { DataTable } from "../components";

import { TbCurrencyNaira } from "../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteAProduct, getAllProducts } from "../api";
import { setAllProducts } from "../context/actions/productActions";
import { alertNULL, alertSuccess } from "../context/actions/alertAction";
const DBItems = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center  justify-self-center gap-4 pt-6 w-full">
      <DataTable
        columns={[
          {
            title: "Image",
            field: "imageURL",
            render: (rowData) => (
              <img
                alt=""
                src={rowData.imageURL}
                className="w-32  h-16 object-contain rounded-md "
              />
            ),
          },
          { title: "Name", field: "product_name" },
          { title: "Category", field: "product_category" },
          {
            title: "Price",
            field: "product_price",
            render: (rowData) => (
              <p className=" text-xl  font-semibold text-textColor flex items-center justify-center  ">
                <TbCurrencyNaira className=" text-red-400" />
                {parseFloat(rowData.product_price).toFixed(2)}
              </p>
            ),
          },
        ]}
        data={products}
        title="List of Products"
        actions={[
          {
            icon: "edit",
            tooltip: "Edit Data",
            onClick: (event, rowData) => {
              alert("You want to edit" + rowData.productId);
            },
          },
          {
            icon: "delete",
            tooltip: "Delete Data",
            onClick: (event, rowData) => {
              if (
                window.confirm(
                  "Are you sure you,you want to prform this action"
                )
              ) {
                deleteAProduct(rowData.productId).then((res) => {
                  dispatch(alertSuccess("Product Deleted"));
                  setInterval(() => {
                    dispatch(alertNULL());
                  }, 3000);
                  getAllProducts().then((data) => {
                    dispatch(setAllProducts(data));
                  });
                });
              } else {
              }
            },
          },
        ]}
      />
    </div>
  );
};

export default DBItems;
// productId(pin):1693580957966
// imageURL(pin):"https://firebasestorage.googleapis.com/v0/b/fullstack-food-app-react-1c9c1.appspot.com/o/images%2F1693580943496_c6.png?alt=media&token=56987bf4-397e-4b74-99d0-1aedd5e7af17"
// product_price(pin):"19"
// product_name(pin):"monster"
// product_category(pin):"drinks"
