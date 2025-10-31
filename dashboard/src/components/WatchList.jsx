import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";



const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">9/ 50</span>
      </div>

      <ul className="list">
        
      </ul>


    </div>
  );
};

export default WatchList;

