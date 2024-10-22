import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { HomePage } from "../Pages/Home";
import Layout from "./layouts/SideBarLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
