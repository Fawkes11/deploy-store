import React from 'react'
import { CurrencyDollar, TrashFill } from 'react-bootstrap-icons'
import { formatCurrency } from '../../modules/string'


function TableCartCard(item) {
    return (
        <tr key={item.item.id}>
                        <td align="center" className="hidden-xs">
                          <img
                            src={item.item.photo}
                            alt="Added product"
                            title=""
                            width="192"
                          />
                        </td>
                        <td className="upper" align="center">
                          <span>{`${item.item.name} ${item.item.type}`}</span>
                        </td>
                        <td className="upper" align="center">
                          <span>{item.item.size}</span>
                        </td>
                        <td>
                          <div className="input-group">
                            <input
                              type="number"
                              name=""
                              value={item.item.qty}
                              min={1}
                              className="input-qty form-control text-center"
                              style={{ width: "1rem" }}
                              onChange={(e) =>
                                item.change(
                                    item.item,
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
                          {item.item.price}
                        </td>

                        <td align="center">
                          <CurrencyDollar
                            className="currencyDollar"
                            color="#8dc859"
                            size={18}
                          />
                          {formatCurrency(item.item.price * item.item.qty)}
                        </td>

                        <td align="center">
                          <button
                            className="notButton"
                            onClick={() => item.remove(item.item)}
                          >
                            <TrashFill color="red" size={25} />
                          </button>
                        </td>
                      </tr>
    )
}

export default TableCartCard
