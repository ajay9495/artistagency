import './App.css';
import './Theme/CommonTheme.css'
import './Theme/AppTheme.css'

import Wrapper from './Components/BaseComponents/Wrapper/Wrapper';
import Row from './Components/BaseComponents/Row/Row';
import Col from './Components/BaseComponents/Col/Col';
import Section from './Components/BaseComponents/Section/Section';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Stories from './Components/Stories/Stories';
import Talent from './Components/Talent/Talent';
import Partners from './Components/Partners/Partners';
import Footer from './Components/Footer/Footer';



function App() {
  return (

    <Wrapper classList={'bo main-wrapper'}>
      <div id="section-1">
        <Header />
        <Hero />
      </div>

      <div id="section-2" >
        <About />
      </div>

      <div id='section-3'>
        <Talent />
      </div>

      <div id='section-4'>
        <Stories />
      </div>

      <div id='section-5'>
        <Partners />
      </div>

      <div id='section-6'>
        <Footer />
      </div>

    </Wrapper>

  );
}

export default App;
