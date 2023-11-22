import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import HiddenButton from "../components/HiddenButton";

const Layout = () => {
  const [isLayoutOpen, setIsLayoutOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      {isLayoutOpen && (
        <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
          <h2 className="text-4xl font-black text-center text-white">
            CRM - Clientes
          </h2>

          <nav className="mt-10 ">
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? "text-blue-300" : "text-white"
              } text-2xl block mt-2 hover:text-blue-30`}
            >
              Clientes
            </Link>
            <Link
              to="/clientes/nuevo"
              className={`${
                location.pathname === "/clientes/nuevo"
                  ? "text-blue-300"
                  : "text-white"
              } text-2xl block mt-2 hover:text-blue-30`}
            >
              Nuevo Cliente
            </Link>
          </nav>
        </aside>
      )}

      <main className="md:w-full p-10 md:h-screen overflow-scroll relative">
        <HiddenButton
          isLayoutOpen={isLayoutOpen}
          setIsLayoutOpen={setIsLayoutOpen}
        />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
