import { useRouteError } from "react-router-dom";
import Nav from "./Components/nav";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="bg-darkgrey h-screen">
            <Nav />
            <span className="text-2xl flex items-center justify-center text-white">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p >
                    <i>{error.statusText || error.message}</i>
                </p>
            </span>

        </div>
    );
}
