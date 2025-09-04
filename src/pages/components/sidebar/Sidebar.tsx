// import React, { useContext, useState } from "react";
// import "./sidebar.css";
// function Sidebar() {
//   const [extended, setExtended] = useState(false);

  

//   return (
//     <div className="sidebar">
//       <div className="top">
//         <img
//           onClick={() => {
//             setExtended((prev) => !prev);
//           }}
//           className="menu"
//           src={assets.menu}
//           alt="menu-icon"
//         />
        
//         {extended ? (
//           <div className="recent">
//             <p className="recent-title">Recent</p>
//             {previousPrompt.map((item, index) => {
//               return (
//                 <div onClick={() => loadPrompt(item)} className="recent-entry">
//                   <img src={assets.message} alt="" className="s" />
//                   <p>{item.slice(0, 18)} ...</p>
//                 </div>
//               );
//             })}
//           </div>
//         ) : null}
//       </div>
//       <div className="bottom">
//         <div className="bottom-item recent-entry">
//           <img src={assets.question} alt="" />
//           {extended ? <p>Help</p> : null}
//         </div>
//         <div className="bottom-item recent-entry">
//           <img src={assets.history} alt="" />
//           {extended ? <p>Activity</p> : null}
//         </div>
//         <div className="bottom-item recent-entry">
//           <img src={assets.settings} alt="" />
//           {extended ? <p>Settings</p> : null}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
