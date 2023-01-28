import {Route, Routes} from "react-router-dom";
import {AboutPage, HomePage, NotFoundPage, PostsPage, UsersPage} from "./pages";
import {Header} from "./components";
import {MainLayout} from "./layouts";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'about'} element={<AboutPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>

    );
};

export {App};