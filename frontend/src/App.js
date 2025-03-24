import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentPage from "./pages/PaymentPage";
import Success from "./components/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentPage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
