import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const principles = [
    {
      icon: "Heart",
      title: "Любовь к Родине",
      description:
        "Формируем эмоциональную привязанность к родной стране, её природе и людям",
    },
    {
      icon: "BookOpen",
      title: "Изучение традиций",
      description:
        "Знакомим с народными праздниками, обычаями и культурным наследием",
    },
    {
      icon: "Users",
      title: "Уважение к людям",
      description:
        "Воспитываем уважение к старшим, героям и защитникам Отечества",
    },
    {
      icon: "Star",
      title: "Гордость за страну",
      description: "Развиваем чувство гордости за достижения и историю России",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            Почему это важно?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Старший дошкольный возраст (5-7 лет) — это период активного
            формирования ценностных ориентаций и эмоционального отношения к
            окружающему миру
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={principle.icon as any}
                  className="text-red-600"
                  size={32}
                />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-gray-800 mb-3">
                {principle.title}
              </h3>
              <p className="text-gray-600">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-800 text-white p-8 rounded-2xl">
          <div className="flex items-center justify-center mb-4">
            <Icon name="TrendingUp" className="text-yellow-400" size={48} />
          </div>
          <h3 className="font-montserrat font-bold text-2xl text-center mb-4">
            Статистика эффективности
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">85%</div>
              <p>детей проявляют интерес к истории страны</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">92%</div>
              <p>знают государственные символы</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">78%</div>
              <p>активно участвуют в патриотических мероприятиях</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
