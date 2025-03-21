import React, { useContext, useEffect } from "react";
import Router from "./Router";
import { DataContext } from "./Components/Context/DataProvider";
import { auth } from "./utils/firebase";

function App() {
   const [{ user }, dispatch] = useContext(DataContext);
   useEffect(() => {
     // check the auth state change from sign in to sign out vice versa and if the user signed in userInfo will be populated with the user data if not userInfo becomes null
     auth.onAuthStateChanged((userInfo) => {
       if (userInfo) {
         dispatch({ type: "SET_USER", user: userInfo });
       } else {
         dispatch({ type: "SET_USER", user: null });
       }
     });
   }, []);
  return (
        <Router />
  );
}

export default App;
