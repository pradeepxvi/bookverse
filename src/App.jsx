import { NavBar, Footer, MainContext } from "./";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <MainContext>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <div className="flex-grow">
          <Outlet />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </MainContext>
  );
}

export default App;
