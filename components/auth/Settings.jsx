
/* eslint-disable no-unused-vars */

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Settings = () => {

    return (
        <>
        <Helmet>
            <meta name="description" content="Customize your dashboard across all pages" />
            <title>Settings - Admin</title>
        </Helmet>
        <div className="parent">
            <div className="container">
                <h2>Settings</h2>
            </div>
        </div>
        </>
    );
};

export default Settings;