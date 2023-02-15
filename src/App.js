import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppHeader from "./components/appHeader/AppHeader";
import Spinner from "./components/spinner/Spinner";

const Main = lazy(() => import(/* webpackChunkName: "Main" */'./pages/Main'));
const Comics = lazy(() => import(/* webpackChunkName: "Comics" */'./pages/Comics'));
const SingleComicLayout = lazy(() => import(/* webpackChunkName: "SingleComic" */'./pages/SingleComicLayout'));
const Page404 = lazy(() => import(/* webpackChunkName: "Page404" */'./pages/404'));
const SingleCharacterLayout = lazy(() => import('./pages/singleCharacterLayout'));
const SinglePage = lazy(() => import('./pages/SinglePage'));

const App = () => {

    return (
        <BrowserRouter>
            <div className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path="/" element={
                            <Suspense fallback={<Spinner />}>
                                <Main />
                            </Suspense>
                        } />
                        <Route path="/comics" element={
                            <Suspense fallback={<Spinner />}>
                                <Comics />
                            </Suspense>
                        } />
                        <Route path="/comics/:id" element={
                            <Suspense fallback={<Spinner />}>
                                <SinglePage Component={SingleComicLayout} dataType='comic' />
                            </Suspense>
                        } />
                        <Route path="/characters/:id" element={
                            <Suspense fallback={<Spinner />}>
                                <SinglePage Component={SingleCharacterLayout} dataType='character' />
                            </Suspense>
                        } />
                        <Route path="*" element={
                            <Suspense fallback={<Spinner />}>
                                <Page404 />
                            </Suspense>
                        } />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;