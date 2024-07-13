import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
/**
 * In this private route we create a condition to return if there is a currentUser to show the profile page using Outlet (this shows the children... what ever is inside the profile data as an outlet),  other wise we redirect the person to sign in page where we use component Navigate. different from useNavigate hook.
 *
 */

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? <Outlet /> : <Navigate to={"/sign-in"} />;
}
