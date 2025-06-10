const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-800">
            Мы не просто агентство —{" "}
            <span className="text-blue-600">мы элитный бутик путешествий</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Наша миссия
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Дарить людям радость и счастье через незабываемые путешествия
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Наш девиз
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Для нас нет границ — мы создаем путешествия мечты по всему миру
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Наши принципы</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Планируем любые путешествия
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Каждый тур — шедевр до мелочей
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Консьерж-услуги 24/7
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  100% легко и безопасно
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
