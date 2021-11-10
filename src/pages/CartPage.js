import React, { useContext } from "react";
import Header from "../components/Header";
import bg_header_services from "../images/bg-header-services.jpg";
import CartContext from "../modules/CartContext";
import {
  CurrencyDollar,
  DashSquareFill,
  PlusSquareFill,
  TrashFill,
  ArrowLeftCircle,
  ArrowRightCircle,
} from "react-bootstrap-icons";

import "../styles/tableCartPage.css";
import { formatCurrency } from "../modules/string";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function CartPage() {
  const CartCtx = useContext(CartContext);

  return (
    <div>
      <Header fondo={bg_header_services} />

      <div className="col-lg-9 col-md-9 col-sm-12 container">
        <div className="col-lg-12 col-sm-12">
          <h2 className="text-center fst-italic">SHOPPING CART</h2>
        </div>
        {CartCtx.cart.length > 0 ? (
          <div className="col-lg-12 col-sm-12 hero-feature position-relative">
            <div className="table-responsive">
              <table className="table table-bordered tbl-cart">
                <thead>
                  <tr>
                    <td className="hidden-xs">Image</td>
                    <td>Product Name</td>
                    <td>Size</td>
                    <td className="td-qty">Quantity</td>
                    <td>Unit Price</td>
                    <td> Sub Total</td>
                    <td>Remove</td>
                  </tr>
                </thead>
                <tbody>
                  {CartCtx.cart.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td align="center" className="hidden-xs">
                          <img
                            src={item.photo}
                            alt="Added product"
                            title=""
                            width="192"
                          />
                        </td>
                        <td className="upper" align="center">
                          <span>{`${item.name} ${item.type}`}</span>
                        </td>
                        <td className="upper" align="center">
                          <span>{item.size}</span>
                        </td>
                        <td>
                          <div className="input-group">
                            <input
                              type="number"
                              name=""
                              value={item.qty}
                              min={1}
                              className="input-qty form-control text-center"
                              style={{ width: "1rem" }}
                              onChange={(e) =>
                                CartCtx.changeQty(
                                  item,
                                  parseInt(e.target.value)
                                )
                              }
                            />
                          </div>
                        </td>
                        <td align="center" className="price">
                          <CurrencyDollar
                            className="currencyDollar"
                            color="#8dc859"
                            size={18}
                          />
                          {item.price}
                        </td>

                        <td align="center">
                          <CurrencyDollar
                            className="currencyDollar"
                            color="#8dc859"
                            size={18}
                          />
                          {formatCurrency(item.price * item.qty)}
                        </td>

                        <td align="center">
                          <button
                            className="notButton"
                            onClick={() => CartCtx.removeFromCart(item)}
                          >
                            <TrashFill color="red" size={25} />
                          </button>
                        </td>
                      </tr>
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

              <button type="button" className="btn btn-primary">
                Checkout <ArrowRightCircle size={22} />
              </button>
            </div>
          </div>
        ) : (
          <div className="sinItems">
            <p>Aún no Agrega elementos al carrito!</p>
            <Link to="/deploy-store/Menu">
              <Button variant="success">Ir al carrito</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
