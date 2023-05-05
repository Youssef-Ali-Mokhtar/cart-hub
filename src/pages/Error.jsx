import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return ( <div className="page">
        <h1>{error.message}</h1>
    </div> );
}
 
export default Error;