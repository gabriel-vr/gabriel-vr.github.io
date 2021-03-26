import { Header } from "./components/Header";
import './App.css'
import {GlobalStyle} from './styles/global'
import { AboutMe } from "./components/AboutMe";
import { Formacao } from "./components/Formacao";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <AboutMe/>
      <Formacao/>
      <Skills />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
