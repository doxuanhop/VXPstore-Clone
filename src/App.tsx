import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AppPreview from "./pages/AppPreview";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app/:id" element={<AppPreview />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
