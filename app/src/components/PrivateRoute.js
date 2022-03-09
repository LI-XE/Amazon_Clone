import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import { Routes } from "../../node_modules/react-router-dom/index";

export default function PrivateRoute = ({ children }) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (userInfo ? children : <Navigate to="/signin" />);
};

// export default function PrivateRoute({ component: Component, ...rest }) {
//   const userSignin = useSelector((state) => state.userSignin);
//   const { userInfo } = userSignin;
//   return (
//     <Routes>
//       <Route
//         {...rest}
//         render={(props) =>
//           userInfo ? (
//             <Component {...props}></Component>
//           ) : (
//             <Navigate to="/signin" />
//           )
//         }
//       ></Route>
//     </Routes>
//   );
// }
