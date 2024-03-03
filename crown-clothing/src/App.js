import { Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";


import Home from "./routes/home/home.component";
import Navigation from "./routes/naivgation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";


const Shop = () => {
  return(
    <h1>THis is meri dukan</h1>
  )
}

const App = () => {

  return(
    <Routes>
      <Route path="/" element = { <Navigation />}>
        <Route index element={ <Home />} />
        <Route path="shop" element={ <Shop />}/>
        <Route path="auth" element={ <Authentication />}/>
      </Route>
    </Routes>
  )
}

export default App;
