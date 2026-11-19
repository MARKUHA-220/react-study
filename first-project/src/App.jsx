import Header from './componets/Header/Header'
import Hero from './componets/Hero/Hero'
import BookCard from './componets/BookCard/BookCard'
import About from './componets/About/About'
import Footer from './componets/Footer/Footer'

// import CharacterCard from './componets/CharacterCard/CharacterCard'

import FACT from '/assets/FACT.png'
import FACT2 from '/assets/FACT2.png'
import FACT3 from '/assets/FACT3.png'
import FACT4 from '/assets/FACT4.png'

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
    image: FACT,
  },
  {
    id: 2,
    title: "Miško paslaptis",
    author: "Tomas Vėjas",
    category: "Nuotykiai",
    description: "Netikėti atradimai prasideda nuo vieno žingsnio.",
    price: 12.5,
    image: FACT2,
  },
  {
    id: 3,
    title: "Maži kasdienybės stebuklai",
    author: "Rūta Saulė",
    category: "Gyvenimo būdas",
    description: "Įkvėpimas džiaugtis paprastais dalykais.",
    price: 16.0,
    image: FACT3,
  },
  {
    id: 4,
    title: "Užmirštas miestas",
    author: "Mantas Girėnas",
    category: "Fantastika",
    description: "Po žeme slypi miestas, kurio nėra jokiame žemėlapyje.",
    price: 18.9,
    image: FACT4,
  },
  {
    id: 5,
    title: "Paskutinis laiškas",
    author: "Gabija Beržė",
    category: "Detektyvas",
    description: "Senas laiškas atskleidžia ilgai slėptą šeimos paslaptį.",
    price: 13.49,
    image: FACT,
  },
  {
    id: 6,
    title: "Skonių kelionė",
    author: "Lukas Pipiras",
    category: "Kulinarija",
    description: "Paprasti receptai, įkvėpti skirtingų pasaulio virtuvių.",
    price: 22.0,
    image: FACT2,
  },
  {
    id: 7,
    title: "Kalnų takais",
    author: "Austėja Kalnytė",
    category: "Kelionės",
    description: "Pasakojimai apie žygius, drąsą ir atradimus kalnuose.",
    price: 17.5,
    image: FACT3,
  },
  {
    id: 8,
    title: "Pirmasis kodas",
    author: "Domas Bitas",
    category: "Technologijos",
    description: "Pažintis su programavimu per pavyzdžius ir užduotis.",
    price: 19.99,
    image: FACT4,
  },
];

function App() {
  return (
    <>
      <Header siteTitle={siteTitle} />
      <main>
        <Hero title={heroTitle} subtitle={heroSubtitle} />
        <section className="books">
          <h2>Rekomenduojamos knygos</h2>
          <div className="book-list">
            <BookCard
              title={bookList[0].title}
              author={bookList[0].author}
              category={bookList[0].category}
              description={bookList[0].description}
              price={bookList[0].price}
              image={bookList[0].image}
            />

            <BookCard
              title={bookList[1].title}
              author={bookList[1].author}
              category={bookList[1].category}
              description={bookList[1].description}
              price={bookList[1].price}
              image={bookList[1].image}
            />

            <BookCard
              title={bookList[2].title}
              author={bookList[2].author}
              category={bookList[2].category}
              description={bookList[2].description}
              price={bookList[2].price}
              image={bookList[2].image}
            />

            <BookCard
              title={bookList[3].title}
              author={bookList[3].author}
              category={bookList[3].category}
              description={bookList[3].description}
              price={bookList[3].price}
              image={bookList[3].image}
            />

            <BookCard
              title={bookList[4].title}
              author={bookList[4].author}
              category={bookList[4].category}
              description={bookList[4].description}
              price={bookList[4].price}
              image={bookList[4].image}
            />

            <BookCard
              title={bookList[5].title}
              author={bookList[5].author}
              category={bookList[5].category}
              description={bookList[5].description}
              price={bookList[5].price}
              image={bookList[5].image}
            />

            <BookCard
              title={bookList[6].title}
              author={bookList[6].author}
              category={bookList[6].category}
              description={bookList[6].description}
              price={bookList[6].price}
              image={bookList[6].image}
            />

            <BookCard
              title={bookList[7].title}
              author={bookList[7].author}
              category={bookList[7].category}
              description={bookList[7].description}
              price={bookList[7].price}
              image={bookList[7].image}
            />
          </div>
        </section>
        <About text={aboutText} />
      </main>
      <Footer year={currentYear} siteTitle={siteTitle} />
    </>
  );
}

export default App;
