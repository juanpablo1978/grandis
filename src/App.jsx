import './App.scss'
import NavBar from './components/NavBar/_NavBar'
import ItemListContainer from './components/ItemListContainer/_ItemListContainer'

function App() {

  return (
    <div>
      <NavBar/>
      <div>
        <h2>Productos</h2>
            <div>
              <ItemListContainer title="Angélica Zapata" price="$2300" image={'angelica.png'}/> 
              <ItemListContainer title="Forastero" price="$1500" image={'forastero.png'}/> 
              <ItemListContainer title="Malabarista" price="2200" image={'malabarista.png'}/> 
              <ItemListContainer title="Las perdices" price="$2150" image={'perdices.png'}/> 
            </div>
        </div>
    </div>    
  )
}

export default App
