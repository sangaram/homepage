import './App.scss';
import About from './components/about/About';
import Certifications from './components/certifications/Certifications';
// import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Main from './components/main/Main';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import SideBar from './components/sidebar/SideBar';
import Skills from './components/skills/Skills';
import SwitchButton from './components/switchButton/SwitchButton';

function App() {
  return (
    <div className="app">
      <div className='container'>
        <SideBar />
        <Main>
          <Home />
          <About />
          <Skills />
          <Resume />
          <Certifications />
          <Projects />
          {/* <Contact /> */}
          <SwitchButton />
        </Main>
      </div>
    </div>
  );
}

export default App;
