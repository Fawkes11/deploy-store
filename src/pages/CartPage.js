import React, { useContext, useState } from "react";
import Header from "../components/Header";
import bg_cart from "../images/bg-cart.jpg";
import CartContext from "../modules/CartContext";
import {
  CurrencyDollar,
  ArrowLeftCircle,
  ArrowRightCircle,
} from "react-bootstrap-icons";

import "../styles/tableCartPage.css";
import { formatCurrency } from "../modules/string";
import { Link } from "react-router-dom";
import WithoutProducts from "../components/miniComponents/WithoutProducts";
import TableCartCard from "../components/Cards/TableCartCard";
import HeadTable from "../components/miniComponents/HeadTable";
import Checkout from "../components/Checkout";

export default function CartPage() {
  const CartCtx = useContext(CartContext);
  const [checkout, setCheckout] = useState(false);

  return (
    <div className="container-table">
      <Header fondo={bg_cart} position="top" />

      {checkout ? (
        <Checkout setCheckout={setCheckout} />
      ) : (
        <div className="col-lg-9 col-md-9 col-sm-12 container ">
          <div className="col-lg-12 col-sm-12">
            <h2 className="text-center fst-italic">SHOPPING CART</h2>
          </div>
          {CartCtx.cart.length > 0 ? (
            <div className="col-lg-12 col-sm-12 hero-feature position-relative">
              <div className="table-responsive">
                <table className="table table-bordered tbl-cart">
                  <HeadTable />
                  <tbody>
                    {CartCtx.cart.map((item) => {
                      return (
                        <TableCartCard
                          key={item.id}
                          item={item}
                          change={CartCtx.changeQty}
                          remove={CartCtx.removeFromCart}
                        />
                      );
                    })}
                    <tr className="total">
                      <td
                        colSpan="5"
                        align="right"
                        style={{ paddingRight: "20px" }}
                      >
                        Total
                      </td>
                      <td colSpan="2" style={{ paddingLeft: "20px" }}>
                        <CurrencyDollar
                          className="currencyDollar"
                          color="#8dc859"
                          size={18}
                        />
                        {formatCurrency(
                          CartCtx.cart.reduce(function (acc, item) {
                            return (
                              acc + parseFloat(item.price).toFixed(2) * item.qty
                            );
                          }, 0)
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="btn-group align-self-center">
                <Link to="/deploy-store/Menu">
                  <button type="button" className="btn btn-primary">
                    <ArrowLeftCircle size={22} /> Continue Shopping
                  </button>
                </Link>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCheckout(true)}
                >
                  Checkout <ArrowRightCircle size={22} />
                </button>
              </div>
            </div>
          ) : (
            <WithoutProducts />
          )}
        </div>
      )}
    </div>
  );
}
