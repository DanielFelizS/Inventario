import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
    canActivate,
    redirectPath = '/'
}: { 
    canActivate: any, 
    redirectPath?: string 
}) => {
    if (!canActivate) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
}

export default ProtectedRoute;
