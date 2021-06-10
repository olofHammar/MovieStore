import React, { useState, useEffect } from "react"
import "../styles/myOrders.css"
import { db } from "../firebase"
import { getUserId } from "../features/userSlice"
import { useSelector } from "react-redux"
import NumberFormat from "react-number-format"

function MyOrders() {
  const userId = useSelector(getUserId)
  const [receipts, setReceipts] = useState([])

  const getReciepts = () => {
    //console.log('started fetch');
    if (userId === null) return

    const ref = db.collection("users").doc(userId).collection("receipts")
    ref.onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        order: doc.data(),
      }))
      //console.log(tempItems)
      let sortedByDate = tempItems.sort((a, b) => b.order.date - a.order.date)
      setReceipts(sortedByDate)
    })
    //console.log(receipts)
  }

  useEffect(() => {
    getReciepts()
  })

  return (
    <div className="myOrdersContainer">
      {userId === null ? (
        <>
          <h4 className="myOrdersNoUserMessage">
            Sign in to access this feature.
          </h4>
        </>
      ) : (
        <>
          {receipts.length === 0 ? (
            <>
              <div className="myOrdersTitleContainer">My Orders</div>
              <h4 className="myOrdersNoUserMessage">
                You havn't made any orders yet.
              </h4>
            </>
          ) : (
            <>
              <div className="myOrdersTitleContainer">My Orders</div>
              <div className="receiptsContainer">
                {receipts.map((order, i) => (
                  <div className="receiptContainer">
                    <div className="receiptTitle">
                      <h4>
                        {" "}
                        {`Order made ${new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        }).format(order.order.date)} by ${order.order.user}`}
                      </h4>
                    </div>
                    {order.order.orderInfo.split("...").map((orderDoc, i) => (
                      <p key={i} className="orderDetail">
                        {orderDoc}
                      </p>
                    ))}
                    <h4 className="orderTotalPrice">
                      Total price:{" "}
                      <NumberFormat
                        value={Math.round(order.order.totalPrice * 100) / 100}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                    </h4>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default MyOrders
