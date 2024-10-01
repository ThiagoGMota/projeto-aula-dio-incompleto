import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Conta from "./pages/conta";
import Home from "./pages/home";
import ContaInfo from "./pages/contaInfo";
import { AppContext, AppContextProvider } from './components/AppContext';


// Exportando o contexto e o provider
export { AppContext, AppContextProvider };
const App = () => {
    return (
        <BrowserRouter>
            <AppContextProvider>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/conta/:id" element={<Conta/>}/>
                    <Route path="/contaInfo" element={<ContaInfo/>}/>
                </Routes>
            </AppContextProvider> 
        </BrowserRouter>
    );
};

export default App;