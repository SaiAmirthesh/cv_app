import './App.css'
import Navbar from './components/navbar'
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