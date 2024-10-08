import useAuthorization from "../hooks/useAuthorization"
import { useLocation, Navigate, Outlet } from "react-router-dom"

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation()
  const { roles } = useAuthorization()

  const content = roles.some((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
  return content
}
export default RequireAuth
