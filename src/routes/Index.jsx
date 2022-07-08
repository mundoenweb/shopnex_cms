import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import Login from "../pages/Login/Login"
import Private from "../pages/Private/Private"

const RouterGlobal = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Private />} >
          <Route element={<App />}>

          <Route path="tablero" >
              <Route index element={<h1>tablero principal</h1>} />
              {/* <Route index element={<Services />} />
              <Route path="nuevo" element={<NewServices />} />
              <Route path="editar/:id" element={<EditServices />} /> */}
            </Route>

          </Route>
        </Route>
        <Route path="*" element={<Login />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default RouterGlobal
