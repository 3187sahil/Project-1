import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InvestmentForm from "./InvestmentForm";
import AdminDashboard from "./AdminDashboard";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <AdminDashboard />

    //   </header>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/create-request" element={<InvestmentForm />} />
            {/* <Route path="/success" element={<SuccessPage />} /> */}
          </Routes>
        </div>
      </Router>
   // </div>
  );
}

export default App;
