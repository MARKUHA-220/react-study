import Header from './componets/Header/Header'
import CharacterCard from './componets/CharacterCard/CharacterCard'
import FACT from '/assets/FACT.png'
import FACT2 from '/assets/FACT2.png'
import FACT3 from '/assets/FACT3.png'
import FACT4 from '/assets/FACT4.png'
import './App.css'

function App() {
  const characters = [
    {
      name: "B",
      age: 1465135165146,
      job: "Engineer",
      image: FACT
    },
    {
      name: "C",
      age: 416514521,
      job: "Engineer",
      image: FACT2
    },
    {
      name: "N",
      age: 29892786785621,
      job: "Engineer",
      image: FACT3
    },
    {
      name: "S",
      age: 786783213,
      job: "Hunter",
      image: FACT4
    },
    {
      name: "Q",
      age: 6786512,
      job: "Engineer",
      image: FACT
    },
    {
      name: "H",
      age: 8792313456,
      job: "Engineer",
      image: FACT2
    }
  ]

  return (
    <div className="App">
      <Header title="Character Catalog" />

      <div className="CharacterList">
        {characters.map((character, index) => (
          <CharacterCard
            key={index}
            name={character.name}
            age={character.age}
            job={character.job}
            image={character.image}
          />
        ))}
      </div>
    </div>
  )
}

export default App