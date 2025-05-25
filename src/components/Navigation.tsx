import { useState } from "react";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Главная", href: "#home" },
    { name: "О важности", href: "#about" },
    { name: "Методы", href: "#methods" },
    { name: "Занятия", href: "#activities" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <nav className="bg-red-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" className="text-yellow-400" size={28} />
            <span className="font-montserrat font-bold text-xl">
              ПатриотДетство
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 hover:text-yellow-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
