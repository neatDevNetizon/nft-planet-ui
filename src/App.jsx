import { BrowserRouter, Routes, Route }               from "react-router-dom";
import Layout                                         from "./pages/layout";
import Land                                           from "./pages/land"
import Main                                           from "./pages/main"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Land />} />
          <Route path="/main" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
