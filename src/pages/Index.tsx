import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const apartmentTypes = [
  {
    id: 1,
    title: "1-комнатная квартира",
    price: "от 4 500 000 ₽",
    area: "42 м²",
    rooms: 1,
    complex: "ЖК «Южный»",
    image: "/img/c7b90e9a-5b75-4fda-88db-6982b54c91c8.jpg",
    mortgageTypes: ["Семейная", "IT ипотека"]
  },
  {
    id: 2,
    title: "2-комнатная квартира",
    price: "от 6 800 000 ₽",
    area: "65 м²",
    rooms: 2,
    complex: "ЖК «Центральный»",
    image: "/img/c7b90e9a-5b75-4fda-88db-6982b54c91c8.jpg",
    mortgageTypes: ["Семейная", "Военная", "IT ипотека"]
  },
  {
    id: 3,
    title: "3-комнатная квартира",
    price: "от 9 200 000 ₽",
    area: "85 м²",
    rooms: 3,
    complex: "ЖК «Премиум»",
    image: "/img/c7b90e9a-5b75-4fda-88db-6982b54c91c8.jpg",
    mortgageTypes: ["Семейная", "IT ипотека"]
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Building2" className="text-primary" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 font-sans">Недвижимость Краснодара</h1>
                <p className="text-sm text-gray-600 font-body">Новые жилые комплексы</p>
              </div>
            </div>
            <Button className="px-6 py-2">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Герой секция */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sans">
              Квартиры в новостройках Краснодара
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-body leading-relaxed">
              Специализируемся на продаже квартир от застройщиков в новых жилых комплексах. 
              Помогаем подобрать оптимальные условия ипотеки и сопровождаем сделку от начала до конца.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center space-x-2 text-primary">
                <Icon name="CheckCircle" size={20} />
                <span className="font-medium">Только новые ЖК</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Icon name="Shield" size={20} />
                <span className="font-medium">Юридическая поддержка</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Icon name="Calculator" size={20} />
                <span className="font-medium">Помощь с ипотекой</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О себе */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-sans">О специалисте</h3>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gray-200 rounded-2xl flex items-center justify-center">
                    <Icon name="User" size={48} className="text-gray-400" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 font-sans">Александр Петров</h4>
                  <p className="text-gray-600 mb-6 font-body leading-relaxed">
                    Более 8 лет работаю на рынке недвижимости Краснодара, специализируюсь исключительно 
                    на новостройках и сотрудничестве с застройщиками. Имею аккредитации в крупнейших 
                    банках для оформления льготных ипотечных программ.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Icon name="Award" size={20} className="text-primary" />
                        <span className="text-gray-700">Аккредитация в 15+ банках</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Users" size={20} className="text-primary" />
                        <span className="text-gray-700">500+ довольных клиентов</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Icon name="Building" size={20} className="text-primary" />
                        <span className="text-gray-700">25+ жилых комплексов</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Clock" size={20} className="text-primary" />
                        <span className="text-gray-700">Работаю без выходных</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Каталог квартир */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-sans">Доступные планировки</h3>
            <p className="text-gray-600 font-body">Выберите подходящую квартиру в новых ЖК Краснодара</p>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartmentTypes.map((apartment, index) => (
              <Card 
                key={apartment.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={apartment.image} 
                    alt={apartment.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900 font-sans">{apartment.title}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {apartment.rooms} комн.
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 font-body">{apartment.complex}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{apartment.price}</span>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Icon name="Home" size={16} />
                        <span>{apartment.area}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h5 className="text-sm font-semibold text-gray-900">Доступная ипотека:</h5>
                    <div className="flex flex-wrap gap-2">
                      {apartment.mortgageTypes.map((type, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          <Icon name="CreditCard" size={12} className="mr-1" />
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Узнать подробности
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 font-sans">Почему выбирают нас</h3>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-white/10 rounded-2xl p-6 mb-4 inline-block">
                <Icon name="Percent" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 font-sans">Лучшие условия ипотеки</h4>
              <p className="text-white/90 font-body">
                Семейная от 6%, военная от 2.2%, IT ипотека от 5%
              </p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white/10 rounded-2xl p-6 mb-4 inline-block">
                <Icon name="Handshake" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 font-sans">Прямые договоры</h4>
              <p className="text-white/90 font-body">
                Работаем напрямую с застройщиками без посредников
              </p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/10 rounded-2xl p-6 mb-4 inline-block">
                <Icon name="FileCheck" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 font-sans">Полное сопровождение</h4>
              <p className="text-white/90 font-body">
                От подбора до получения ключей — ведем сделку целиком
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-sans">Готовы найти свою квартиру?</h3>
            <p className="text-gray-600 mb-8 font-body">
              Оставьте заявку, и я подберу для вас лучшие предложения в новых ЖК Краснодара
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Телефон</p>
                    <p className="font-bold text-gray-900">+7 (861) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Icon name="MessageSquare" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">WhatsApp</p>
                    <p className="font-bold text-gray-900">+7 (861) 123-45-67</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="w-full md:w-auto px-12">
                <Icon name="Send" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Icon name="Building2" size={24} className="text-primary" />
              <span className="font-bold font-sans">Недвижимость Краснодара</span>
            </div>
            
            <p className="text-gray-400 text-sm font-body">
              © 2024 Александр Петров. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}