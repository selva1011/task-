import { MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa";
const NavBar = () => {
  const navLinks = [
    { href: "#Joinus", label: "JOIN US" },
    { href: "#Classes", label: "Classes" },
    { href: "#Products", label: "Products" },
    { href: "#Aboutus", label: "About Us" },
  ];

  return (
    <header className="fixed z-10 w-full bg-white drop-shadow">
      <nav className="padding-y padding-x flex justify-between text-black ">
        <div className="flex gap-10 justify-center items-center">
          <h1 className="text-lg font-Rubik font-[400] cursor-pointer">
            Karo Abhayaas
          </h1>
        </div>
        <div className="flex flex-row gap-12">
          <ul className="flex gap-6 justify-center items-center font-Rubik text-sm max-md:hidden ">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))} 
          </ul>
          <div className="flex flex-row gap-10">
            <FaUser size={18} />
            <MdShoppingCart size={20} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
