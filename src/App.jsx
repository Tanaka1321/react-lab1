import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardList from './components/CardList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const organization = 'ООО «Ромашка»';
  const pageTitle = 'Наши услуги';
  const pageSubtitle = 'Мы делаем вашу жизнь проще и ярче';
  const items = [
    { id: 1, title: 'Консультация', text: 'Поможем разобраться в вашей задаче.' },
    { id: 2, title: 'Разработка', text: 'Создадим продукт под ваши нужды.' },
    { id: 3, title: 'Поддержка', text: 'Останемся с вами и после запуска.' },
    { id: 4, title: 'Обучение', text: 'Научим вашу команду работать с продуктом.' },
  ];

  return (
    <>
      <Header organization={organization} />
      <Navbar />
      <Hero title={pageTitle} subtitle={pageSubtitle} />
      <CardList items={items} />
      <Footer organization={organization} />
    </>
  );
}

export default App;