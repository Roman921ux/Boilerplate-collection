import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { HomePage } from "../Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
