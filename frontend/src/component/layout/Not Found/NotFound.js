import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

import { Typography } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <ErrorIcon />

      <Typography>Page Not Found </Typography>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
