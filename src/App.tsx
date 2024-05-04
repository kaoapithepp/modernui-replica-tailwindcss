import { MenuBar } from "./components/MenuBar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="h-screen w-screen">
      <header className="fixed left-0 top-0 z-[100] w-full">
        <div className="w-full p-3 shadow-lg backdrop-blur-lg">
          <MenuBar />
        </div>
      </header>
      <div className="w-full">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
