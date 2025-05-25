import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-800 via-red-600 to-blue-900 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8">
          <Icon name="Flag" className="mx-auto text-yellow-400" size={80} />
        </div>

        <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6 leading-tight">
          Патриотическое воспитание детей
        </h1>

        <p className="text-xl md:text-2xl mb-4 text-blue-100">
          в старшем дошкольном возрасте
        </p>

        <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-200">
          Формируем любовь к Родине, уважение к традициям и ценностям нашего
          народа через игры, сказки и творчество
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#about"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full transition-colors duration-200 flex items-center space-x-2"
          >
            <Icon name="BookOpen" size={20} />
            <span>Узнать больше</span>
          </a>

          <a
            href="#activities"
            className="border-2 border-white hover:bg-white hover:text-blue-800 font-semibold px-8 py-3 rounded-full transition-all duration-200 flex items-center space-x-2"
          >
            <Icon name="Users" size={20} />
            <span>Примеры занятий</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
