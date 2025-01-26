import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="bg-black w-full min-h-screen  justify-center items-center">
          <Navbar/>
            <Home />
        </div>
    );
}

export default App;

