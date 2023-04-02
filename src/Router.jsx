import {Routes, Route} from "react-router-dom";
import {SearchUsers} from "./pages/SearchUsers";
import {UserCard} from "./pages/UserCard";
import {Index} from "./pages/Index";
import {DefaultLayout} from "./layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Index />} />
                <Route
                    path="/users/:name"
                    element={<SearchUsers />}
                />
                <Route
                    path="/user/:username/:user"
                    element={<UserCard />}
                />
            </Route>
        </Routes>
    );
}
