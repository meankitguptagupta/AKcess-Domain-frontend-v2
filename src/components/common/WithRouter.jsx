import { useLocation, useNavigate, useParams } from "react-router-dom";

export const WithRouter = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate();
        const location = useLocation();
        const queryparams = useParams()

        return (
            <Component navigate={navigate} location={location} {...props} queryparams={queryparams} />
        )
    }

    return Wrapper;
}