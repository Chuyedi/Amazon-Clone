import { useContext, useEffect } from "react";
import { DataContext } from "../Context/DataProvider";
import { useNavigate } from "react-router";

function ProtectedRoute({ children, msg, redirect }) {
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user]);
  return children;
}

export default ProtectedRoute;
