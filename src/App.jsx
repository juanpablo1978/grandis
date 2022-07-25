
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  
  return (
    <div>
      <NavBar/>
      <div>
        <h2>Productos</h2>
            <div>
              <ItemListContainer /> 
            </div>
        </div>
    </div>    
  )
}

export default App
