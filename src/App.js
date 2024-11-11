import Section from './components/Seection-Agency/Agency';
import Services from './components/Services/Services';
import About from './components/About/About';
import GroupCard from './components/GroupCard/GroupCard';
import Protfolio from './components/Portfolio/Portfolio';
import Team from './components/Team/Team'
import Client from './components/Clients/Client';
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Section/>
      <Services/>
      <About/>
      <GroupCard/>
      <Protfolio/>
      <Team/>
      <Client/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
