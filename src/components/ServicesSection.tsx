import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Пакетные туры",
      description: "Готовые решения для комфортного отдыха",
      icon: "🏖️",
    },
    {
      title: "Сафари и экспедиции",
      description: "Приключения в дикой природе",
      icon: "🦁",
    },
    {
      title: "Свадебные туры",
      description: "Романтические путешествия для влюбленных",
      icon: "💒",
    },
    {
      title: "Лечение за границей",
      description: "Медицинский туризм высочайшего уровня",
      icon: "🏥",
    },
    {
      title: "Шоп-туры и ЭКСИ",
      description: "Эксклюзивные покупки по всему миру",
      icon: "🛍️",
    },
    {
      title: "Гастрономические туры",
      description: "Кулинарные путешествия для гурманов",
      icon: "🍷",
    },
    {
      title: "Туры по недвижимости",
      description: "Помощь в покупке зарубежной недвижимости",
      icon: "🏡",
    },
    {
      title: "Экскурсионные туры",
      description: "Познавательные путешествия с гидами",
      icon: "🗿",
    },
    {
      title: "Частные чартеры",
      description: "Индивидуальные перелеты для групп",
      icon: "✈️",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Наши услуги
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Работая с авиаперевозчиками, отельерами и организациями в сфере
            туризма и гостеприимства, предлагаем туры, круизы, путешествия
            любого формата и содержания
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-slate-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Онлайн сервис</h3>
            <p className="text-lg leading-relaxed">
              Мы работаем онлайн, используем электронный документооборот. Оплата
              услуг проходит удобным для вас способом — 100% легально и
              безопасно.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
