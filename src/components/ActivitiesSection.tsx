import Icon from "@/components/ui/icon";

const ActivitiesSection = () => {
  const activities = [
    {
      title: 'Занятие "Моя Родина - Россия"',
      duration: "30 минут",
      age: "5-6 лет",
      description:
        "Знакомство с картой России, государственными символами и народными традициями",
      goals: [
        "Формирование представлений о России как о Родине",
        "Знакомство с флагом и гербом",
        "Развитие чувства гордости за свою страну",
      ],
      materials: ["Карта России", "Изображения символов", "Народные игрушки"],
    },
    {
      title: 'Праздник "День защитника Отечества"',
      duration: "45 минут",
      age: "6-7 лет",
      description:
        "Тематическое мероприятие с играми, песнями и рассказами о героях",
      goals: [
        "Воспитание уважения к защитникам Родины",
        "Развитие патриотических чувств",
        "Формирование представлений о военных профессиях",
      ],
      materials: [
        "Военная атрибутика",
        "Музыкальное сопровождение",
        "Подарки папам",
      ],
    },
    {
      title: 'Творческая мастерская "Народные промыслы"',
      duration: "40 минут",
      age: "5-7 лет",
      description: "Изготовление поделок в стиле русских народных промыслов",
      goals: [
        "Знакомство с народным творчеством",
        "Развитие художественных навыков",
        "Воспитание интереса к культуре России",
      ],
      materials: ["Краски", "Кисти", "Заготовки матрёшек", "Образцы росписи"],
    },
  ];

  return (
    <section
      id="activities"
      className="py-20 bg-gradient-to-br from-red-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            Примеры занятий
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовые сценарии и методические разработки для проведения
            патриотических занятий в детском саду
          </p>
        </div>

        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="font-montserrat font-bold text-2xl mb-2 md:mb-0">
                    {activity.title}
                  </h3>
                  <div className="flex space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={16} />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={16} />
                      <span>{activity.age}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {activity.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-montserrat font-bold text-lg text-gray-800 mb-3 flex items-center">
                      <Icon
                        name="Target"
                        className="mr-2 text-red-600"
                        size={20}
                      />
                      Цели занятия
                    </h4>
                    <ul className="space-y-2">
                      {activity.goals.map((goal, goalIndex) => (
                        <li
                          key={goalIndex}
                          className="flex items-start space-x-2"
                        >
                          <Icon
                            name="CheckCircle"
                            className="text-green-500 mt-1 flex-shrink-0"
                            size={16}
                          />
                          <span className="text-gray-600">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-montserrat font-bold text-lg text-gray-800 mb-3 flex items-center">
                      <Icon
                        name="Package"
                        className="mr-2 text-blue-600"
                        size={20}
                      />
                      Необходимые материалы
                    </h4>
                    <ul className="space-y-2">
                      {activity.materials.map((material, matIndex) => (
                        <li
                          key={matIndex}
                          className="flex items-center space-x-2"
                        >
                          <Icon
                            name="Dot"
                            className="text-gray-400"
                            size={16}
                          />
                          <span className="text-gray-600">{material}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-yellow-400 text-black p-6 rounded-2xl max-w-2xl mx-auto">
            <Icon
              name="Download"
              className="mx-auto mb-3 text-black"
              size={32}
            />
            <h4 className="font-montserrat font-bold text-xl mb-2">
              Скачать полные методички
            </h4>
            <p className="mb-4">
              Получите подробные планы всех занятий с пошаговыми инструкциями
            </p>
            <button className="bg-black text-yellow-400 font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200">
              Загрузить материалы
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
