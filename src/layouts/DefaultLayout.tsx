import {Outlet} from "react-router-dom";
import {SearchBar} from "../components/SearchBar/SearchBar";

export function DefaultLayout() {
    return (
        <>
            <SearchBar />
            <Outlet />
        </>
    );
}
