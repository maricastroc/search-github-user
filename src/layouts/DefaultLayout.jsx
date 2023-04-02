import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {SearchBar} from "../components/SearchBar/SearchBar";

export function DefaultLayout() {
    return (
        <>
            <SearchBar />
            <Outlet />
        </>
    );
}
