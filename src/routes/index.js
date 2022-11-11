import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { LoaderAnimation } from "../components/common/LoaderAnimation"
import DomainDetailComponent from "../components/domain/domain-view/domain-detail-component";
import LogComponent from "../components/log/LogComponent";

import { isLogin } from "../service/auth";

const AuthComponent = lazy(() => import('../components/auth/AuthComponent')),
    DashboardComponent = lazy(() => import("../components/dashboard/DashboardComponent")),
    DomainsComponent = lazy(() => import("../components/domain/DomainsComponent"))

const RequireAuth = ({ children }) => {
    let location = useLocation()

    if (isLogin())
        return children
    return <Navigate to="/login" state={{ from: location }} />
}

export default (
    <Suspense fallback={<LoaderAnimation />}>
        <Routes>
            <Route exact path="/" element={<RequireAuth><DashboardComponent /></RequireAuth>} />
            <Route exact path="/login" element={<AuthComponent />} />
            <Route exact path="/domains" element={<RequireAuth><DomainsComponent /></RequireAuth>} />
            <Route path="/domains/:_id" element={<RequireAuth><DomainDetailComponent /></RequireAuth>} />
            <Route exact path="/logs" element={<RequireAuth><LogComponent /></RequireAuth>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Suspense>
)