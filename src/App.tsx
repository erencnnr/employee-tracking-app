import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NewEmployee from "./pages/NewEmployee";
import OldEmployee from "./pages/OldEmployee";



function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/new-employee" element={<NewEmployee />} />
            <Route path="/old-employee" element={<OldEmployee />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
