
import  './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Slider from './components/Slider/Slider';

function App(props) {
  
  return (
    <div className='wrapper' >
       <Header />
        <Slider  className={true} itemsForSlider={props.itemsForSlider.itemsForSlider_1}/> 
        <Slider  className={false} itemsForSlider={props.itemsForSlider.itemsForSlider_2} /> 
       <Menu menuCol={props.menuCol} />
       <Footer footer={props.footer} />
    </div>
  
  );
}

export default App;
