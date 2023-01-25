import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppHeader from "./components/appHeader/AppHeader";
import { Main, Comics, Page404, SingleComic } from './pages';

const App = () => {

    return (
        <BrowserRouter>
            <div className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/comics" element={<Comics />} />
                        <Route path="comics/:id" element={<SingleComic />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;