import Icon from "@/components/ui/icon";

const MethodsSection = () => {
  const methods = [
    {
      icon: "Gamepad2",
      title: "Игровая деятельность",
      description:
        'Народные игры, ролевые игры "Защитники Родины", конструирование из кубиков достопримечательностей',
      activities: [
        "Русские народные игры",
        "Военные сюжеты",
        "Строительство городов",
      ],
    },
    {
      icon: "Palette",
      title: "Художественное творчество",
      description:
        "Рисование флага, лепка народных игрушек, аппликации с символами России",
      activities: [
        "Роспись матрёшек",
        "Изготовление флажков",
        "Поделки к праздникам",
      ],
    },
    {
      icon: "Music",
      title: "Музыкальные занятия",
      description:
        "Разучивание патриотических песен, народных танцев и слушание гимна страны",
      activities: ["Хоровое пение", "Народные танцы", "Музыкальные праздники"],
    },
    {
      icon: "BookOpen",
      title: "Чтение и рассказы",
      description:
        "Русские народные сказки, рассказы о героях, знакомство с историей через книги",
      activities: ["Сказки о богатырях", "Истории о войне", "Легенды о России"],
    },
  ];

  return (
    <section id="methods" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            Методы воспитания
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Разнообразные подходы к формированию патриотических чувств через
            деятельность, близкую и понятную детям
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {methods.map((method, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-red-600 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <Icon
                    name={method.icon as any}
                    className="text-white"
                    size={28}
                  />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-gray-800">
                  {method.title}
                </h3>
              </div>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {method.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Примеры деятельности:
                </h4>
                {method.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="flex items-center space-x-2">
                    <Icon name="Star" className="text-yellow-500" size={16} />
                    <span className="text-gray-600">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-r-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <Icon
                name="Lightbulb"
                className="text-yellow-600 mr-2"
                size={24}
              />
              <h4 className="font-montserrat font-bold text-xl text-gray-800">
                Важный принцип
              </h4>
            </div>
            <p className="text-gray-700 text-lg">
              Все занятия должны проходить в атмосфере радости и
              заинтересованности, учитывая возрастные особенности детей 5-7 лет
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodsSection;
