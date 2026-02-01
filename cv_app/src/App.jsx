import './App.css'
import Navbar from './components/Navbar'
import Cvpage from "./pages/Cvpage";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Cvpage />
      </main>
    </div>
  );
}

export default App