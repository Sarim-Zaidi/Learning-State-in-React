import Header from './components/Header'
import Form from './components/Form'
import Challenge from './components/Challenges';
// import Img from './components/Img'
import './my.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      {/* <Img /> */}
      <Challenge />
    </div>
  );
}

export default App;
