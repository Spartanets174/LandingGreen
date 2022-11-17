import './App.scss';
// import Btn from './components/btn/btn';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
function App() {
    return (
      <div className='container'>
          {/* <Btn cls={"button button__green button__small"} text="Я владос"/>
          <Btn cls={"button button__dark button__small"} text="Я владос"/>
          <Btn cls={"button button__white button__small"} text="Я владос"/>
          <Btn cls={"button button__border button__small"} text="Я владос"/> */}
            <Header/>
            <Main/>
            <Footer/>
      </div>
    )   
  }

export default App;
