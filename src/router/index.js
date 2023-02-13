import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import routes from "./routes"
import Home from "../views/Home"
import PageNotFound from "../views/PageNotFound"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
