export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">ЖК "Премьер"</h1>
          <div className="space-x-4">
            <a href="#about" className="text-gray-600 hover:text-blue-600">О комплексе</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600">Особенности</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Контакты</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Премьер-класс жилье в центре города</h2>
        <p className="text-xl text-gray-600 mb-8">Современный жилой комплекс с премиум-сервисом для вашей семьи</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700">
          Узнать больше
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">О ЖК "Премьер"</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-blue-600 mb-4">✓ Расположение</h4>
              <p className="text-gray-700">Комплекс находится в престижном районе города, рядом с парками, школами и центрами развлечения.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-blue-600 mb-4">✓ Архитектура</h4>
              <p className="text-gray-700">Современный дизайн зданий, панорамные окна, просторные квартиры с отличным освещением.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-blue-600 mb-4">✓ Инфраструктура</h4>
              <p className="text-gray-700">Паркинг, детские площадки, спортзал, совещательный центр, 24/7 охрана.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-blue-600 mb-4">✓ Качество</h4>
              <p className="text-gray-700">Только лучшие материалы, профессиональное мастерство, каждая деталь продумана.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Особенности комплекса</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-gray-700">Квартир различных планировок</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-4xl font-bold text-blue-600 mb-2">7</p>
              <p className="text-gray-700">Жилых корпусов</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-4xl font-bold text-blue-600 mb-2">100%</p>
              <p className="text-gray-700">Готовность к заселению</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Свяжитесь с нами</h3>
          <p className="text-lg mb-4">Наши специалисты помогут вам выбрать идеальное жилье</p>
          <div className="flex justify-center gap-8">
            <div>
              <p className="font-bold">📞 Телефон</p>
              <p>+7 (999) 123-45-67</p>
            </div>
            <div>
              <p className="font-bold">📧 Email</p>
              <p>info@zkpremier.ru</p>
            </div>
            <div>
              <p className="font-bold">📍 Адрес</p>
              <p>ул. Премьерная, д. 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2024 ЖК "Премьер". Все права защищены.</p>
      </footer>
    </div>
  );
