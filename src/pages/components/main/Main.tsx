import React, { useContext } from "react";
import styles from "./Main.module.css";

function Main() {
  // const {
  //   previousPrompt,
  //   setPrevious,
  //   onSent,
  //   recentPrompt,
  //   setRecentPrompt,
  //   showResult,
  //   loading,
  //   resultData,
  //   setInput,
  //   input,
  // } = useContext(Context);
  return (
    <div className="main">

       
       
        <div className={styles.mainBottom}>
          <div className="search-box">
            <input
              onChange={(e) => {}}
              value={""}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              {/* <img src={assets.galleryIcon} alt="" />
              <img src={assets.micIcon} alt="" />
             
                <img  src={assets.sendIcon} alt="" /> */}
            </div>
          </div>
         
        </div>
      </div>
  );
}

export default Main;
