
import './App.css'
import CardBooks from './components/CardBooks'

function App() {

  return (
    <>
      <div>
        <CardBooks
          titulo = 'Percy Jackson: A Maldição do Titã'
          autor = 'Rick Riordan'
        />
        <CardBooks
          titulo = 'Percy Jackson: O Ladrão de Raios'
          autor = 'Rick Riordan'
        />
        <CardBooks
          titulo = 'Percy Jackson: O Mar de Monstros'
          autor = 'Rick Riordan'
        />
      </div>
    </> 
  )
}

export default App
