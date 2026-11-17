// import Header from './componets/Header/Header'
// import CharacterCard from './componets/CharacterCard/CharacterCard'

// import FACT from '/assets/FACT.png'
// import FACT2 from '/assets/FACT2.png'
// import FACT3 from '/assets/FACT3.png'
// import FACT4 from '/assets/FACT4.png'

import Header from "./components/11-17_2/Header/Header";
import Hero from "./components/11-17_2/Hero/Hero";
import BookCard from "./components/11-17_2/BookCard/BookCard";
import About from "./components/11-17_2/About/About";
import Footer from "./components/11-17_2/Footer/Footer";
import "./App.css";

const siteTitle = "Mano knygų lentyna";
const heroTitle = "Atrask kitą savo knygą";
const heroSubtitle = "Istorijos tavo laisvalaikiui.";
const aboutText = "Dalijamės istorijomis, kurias verta perskaityti.";
const currentYear = 2026;

const bookList = [
  {
    id: 1,
    title: "Kelionė į rytojų",
    author: "Ieva Liepaitė",
    category: "Fantastika",
    description: "Nuotykis pasaulyje, kuriame viskas įmanoma.",
    price: 14.99,
    image: "FACT",
  },
  {
    id: 2,
    title: "Miško paslaptis",
    author: "Tomas Vėjas",
    category: "Nuotykiai",
    description: "Netikėti atradimai prasideda nuo vieno žingsnio.",
    price: 12.5,
    image: "FACT2",
  },
  {
    id: 3,
    title: "Maži kasdienybės stebuklai",
    author: "Rūta Saulė",
    category: "Gyvenimo būdas",
    description: "Įkvėpimas džiaugtis paprastais dalykais.",
    price: 16.0,
    image: "FACT3",
  },
  {
    id: 4,
    title: "Užmirštas miestas",
    author: "Mantas Girėnas",
    category: "Fantastika",
    description: "Po žeme slypi miestas, kurio nėra jokiame žemėlapyje.",
    price: 18.9,
    image: "FACT4",
  },
  {
    id: 5,
    title: "Paskutinis laiškas",
    author: "Gabija Beržė",
    category: "Detektyvas",
    description: "Senas laiškas atskleidžia ilgai slėptą šeimos paslaptį.",
    price: 13.49,
    image: "FACT",
  },
  {
    id: 6,
    title: "Skonių kelionė",
    author: "Lukas Pipiras",
    category: "Kulinarija",
    description: "Paprasti receptai, įkvėpti skirtingų pasaulio virtuvių.",
    price: 22.0,
    image: "FACT2",
  },
  {
    id: 7,
    title: "Kalnų takais",
    author: "Austėja Kalnytė",
    category: "Kelionės",
    description: "Pasakojimai apie žygius, drąsą ir atradimus kalnuose.",
    price: 17.5,
    image: "FACT3",
  },
  {
    id: 8,
    title: "Pirmasis kodas",
    author: "Domas Bitas",
    category: "Technologijos",
    description: "Pažintis su programavimu per pavyzdžius ir užduotis.",
    price: 19.99,
    image: "FACT4",
  },
];

function App() {
  return (
    <>
      <Header siteTitle={siteTitle} />
      <main>
        <Hero title={heroTitle} subtitle={heroSubtitle} />
        <section className="books">
          <h2>Mūsų knygos</h2>
          <div className="book-list">
            {bookList.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                category={book.category}
                description={book.description}
                price={book.price}
                image={book.image}
              />
            ))}
          </div>
        </section>
        <About text={aboutText} />
      </main>
      <Footer year={currentYear} siteTitle={siteTitle} />
    </>
  );
}

export default App;
