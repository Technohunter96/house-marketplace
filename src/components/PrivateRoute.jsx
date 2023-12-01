import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"
import Spinner from "./Spinner"

const PrivateRoute = () => {
   const { loggedIn, checkingStatus } = useAuthStatus()

   if (checkingStatus) {
      return <Spinner />
   }

   return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoute

// zkontroluje to jestli je uživatel přihlášený skrze hook useAuthStatus a pokud ano, tak se provede navigace k obsahu pro přihlášené uživatele
