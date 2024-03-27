import './App.css'
import Home from './Route/Home'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route} from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path = '/limitedEdition' element={<ShopCategory category="LimitedEdition"/>}/>
        <Route path = '/cases' element={<ShopCategory category="Cases"/>}/>
        <Route path = '/screenProtecter' element={<ShopCategory category="ScreenProtecter"/>}/>
        <Route path = '/gaming' element={<ShopCategory category="Gaming"/>}/>
        <Route path = '/artifacts' element={<ShopCategory category="Artifacts"/>}/>
        <Route path = '/help' element={<ShopCategory category="Help"/>}/>
        <Route path = '/cart' element={<Cart/>}/>
        <Route path = '/login' element={<LoginSigup/>}/>  */}
     </Routes>
    </BrowserRouter>
  )
}

export default App
