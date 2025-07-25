import React, { useEffect, useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";

import axios from "axios";
import Loading from "../../../components/loading/Loading";
import style from "./Cart.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../../components/user/context/CartContext";

export default function cart() {
  const [cart, setCart] = useState(null);
  const [isLoading, SetIsLoadin] = useState(true);
  const { cartCount, SetCartCount } = useContext(CartContext);

  const getCart = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.get(
       ` ${import.meta.env.VITE_BURL}/cart`,
        {
          headers: {
            Authorization: `Tariq__${token}`,
          },
        }
      );
      setCart(response.data.products);
    //  SetCartCount(response.data.count);

      console.log(response.data.products);
    } catch (error) {
      console.log("error", error);
    } finally {
      SetIsLoadin(false);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const incQty = async (productId) => {
    const token = localStorage.getItem("userToken");
    const response = await axios.patch(
      `${import.meta.env.VITE_BURL}/cart/incraseQuantity`,
      {
        productId: productId,
      },
      {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      }
    );
    getCart();
  };

  const decQty = async (productId) => {
    const token = localStorage.getItem("userToken");
    const response = await axios.patch(
      `${import.meta.env.VITE_BURL}/cart/decraseQuantity`,
      {
        productId: productId,
      },
      {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      }
    );
    getCart();
  };

  const DeleteItem = async (productId) => {
    try{
    const token = localStorage.getItem("userToken");

    const response = await axios.patch(
      `${import.meta.env.VITE_BURL}/cart/removeItem`,
      {
        productId: productId,
      },
      {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      }
    );
      if (response.status === 200) {
        toast.success("Delete item successfully!");
          SetCartCount(cartCount-1);
        getCart();

      }
    
    } catch (error) {
      toast.error("Failed to clear cart");
      console.error("Clear Cart Error:", error);
    }

 
  };
  const ClearCart = async () => {
    const token = localStorage.getItem("userToken");

    try {
      const response = await axios.patch(
        "https://ecommerce-node4.onrender.com/cart/clear",
        {}, 
        {
          headers: {
            Authorization: `Tariq__${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Cart cleared successfully!");
        
        SetCartCount(0);getCart();
      }
    } catch (error) {
      toast.error("Failed to clear cart");
      console.error("Clear Cart Error:", error);
    }
  };

  return (
    <section className="cart">
      <div className="container">
        <div
          className={`${style.head} d-flex justify-content-center align-items-center mt-5 mb-3`}
        >
          <h1>Your Cart</h1>

        </div>
        <div className="d-flex justify-content-end mb-3">

        <Button
       
          variant="danger"
          size="sm"
          onClick={() => ClearCart()}
        >
          Clear Cart
        </Button>
         </div>
        <Table bordered hover>
          <thead className={style.headTable}>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={item.details.mainImage.secure_url}
                      alt={item.details.name}
                      width="50"
                    />
                  </td>
                  <td>{item.details.name}</td>
                  <td>{item.details.finalPrice}$</td>
                  <td>
                    <div className="d-flex align-items-center gap-2 justify-content-center bg-light px-2 py-1 rounded">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => decQty(item.productId)}
                      >
                        <FaMinus />
                      </Button>

                      <span className="fw-semibold fs-6">{item.quantity}</span>

                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => incQty(item.productId)}
                      >
                        <FaPlus />
                      </Button>
                    </div>
                  </td>

                  <td>{item.quantity * item.details.finalPrice}$</td>
                  <td>
                    {" "}
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => DeleteItem(item.productId)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}
