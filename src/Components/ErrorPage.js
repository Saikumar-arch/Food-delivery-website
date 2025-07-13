import React from 'react';
import { useRouteError } from "react-router-dom"; // Importing useRouterError to access the error object

const ErrorPage = ( ) => {
    const error = useRouteError();
    console.log("Error occurred:", error); // Log the error for debugging


    return(
        <div>
            <h1>Oops!!!...{error.status} {error.statusText}</h1>
            <p>Page not found!!!....{error.message}</p>
        </div>
    )
}
export default ErrorPage;