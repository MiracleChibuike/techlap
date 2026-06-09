
/* eslint-disable no-unused-vars */
import { useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Orders = () => {
    return (
        <>
        <Helmet>
            <meta name="description" content="View all orders whether pending or approved" />
            <title>View Orders - Admin</title>
        </Helmet>
        <div className="parent">
            <div className="container">
                <h2>Orders</h2>
            </div>
        </div>
        </>
    );
};

export default Orders;