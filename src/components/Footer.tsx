import Icon from "@/components/ui/icon";

const Footer = () => {
  const contacts = [
    {
      icon: "MapPin",
      title: "Адрес",
      info: "г. Москва, ул. Образования, д. 15",
    },
    {
      icon: "Phone",
      title: "Телефон",
      info: "+7 (495) 123-45-67",
    },
    {
      icon: "Mail",
      title: "Email",
      info: "patriot@education.ru",
    },
  ];

  const links = [
    { name: "Методические материалы", href: "#methods" },
    { name: "Примеры занятий", href: "#activities" },
    { name: "О важности воспитания", href: "#about" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <footer id="contacts" className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Heart" className="text-yellow-400" size={32} />
              <span className="font-montserrat font-bold text-2xl">
                ПатриотДетство
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Методический центр по патриотическому воспитанию детей дошкольного
              возраста. Помогаем педагогам формировать любовь к Родине у наших
              малышей.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors duration-200"
              >
                <Icon name="Youtube" size={20} />
              </a>
              <a
                href="#"
                className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition-colors duration-200"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>

          {/* Полезные ссылки */}
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-6 text-yellow-400">
              Полезные ссылки
            </h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Icon name="ChevronRight" size={16} />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-6 text-yellow-400">
              Контакты
            </h3>
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-red-600 p-2 rounded-lg flex-shrink-0">
                    <Icon name={contact.icon as any} size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-400 text-sm">
                      {contact.title}
                    </h4>
                    <p className="text-gray-300">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2024 ПатриотДетство. Все права защищены.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Icon name="Shield" size={16} />
              <span className="text-sm">Сделано с любовью к России</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
