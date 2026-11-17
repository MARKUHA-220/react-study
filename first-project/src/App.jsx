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
      name: "Hero",
      age: 25,
      job: "Warrior",
      image: FACT
    },
    {
      name: "Mage",
      age: 30,
      job: "Wizard",
      image: FACT2
    },
    {
      name: "Robot",
      age: 100,
      job: "Engineer",
      image: FACT3
    },
    {
      name: "Archer",
      age: 22,
      job: "Hunter",
      image: FACT4
    },
    {
      name: "Healer",
      age: 28,
      job: "Doctor",
      image: FACT
    },
    {
      name: "Soldier",
      age: 35,
      job: "Fighter",
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