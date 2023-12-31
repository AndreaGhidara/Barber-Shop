import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import FoundMe from "./pages/FoundMe";
import Review from "./pages/Review";
import Header from "./components/Header";
import Page404 from "./pages/Page404";
import Works from "./pages/Works";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col justify-between">
          <header className="sticky top-0 z-50">
            <Header></Header>
          </header>
          <main className="pt-20 pb-10">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/service" element={<Service />} />
              <Route path="/works" element={<Works />} />
              <Route path="/foundMe" element={<FoundMe />} />
              <Route path="/review" element={<Review />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
