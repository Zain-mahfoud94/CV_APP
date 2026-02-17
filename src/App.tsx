import { Route, Routes } from "react-router";
import HomeDE from "./pages/HomeDE.tsx";
import HomeEN from "./pages/HomeEN.tsx";
// import AppBackground from "./components/AppBackground.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeDE />} />
        <Route path="/en" element={<HomeEN />} />
      </Routes>
    </>
  );
}

export default App;
