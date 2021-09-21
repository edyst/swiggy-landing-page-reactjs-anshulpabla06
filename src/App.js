
import './App.css';
import './index.css';
import Hero from './Herosection/Hero';
import Image from './Herosection/Image';
import Feature from './Feature';
import Restraunt from './Restraunt';
import Footer from './Footer';
import image1 from './images/fimg1.png'
import image2 from './images/fimg2.png'
import image3 from './images/fimg3.png'
function App() {
  return (
    <>
    <Hero/>
    <Image/>
    <div class="wrapper">
    <Feature
    imgsrc={image1}
    title="No Minimum Order"
    data="Order in for yourself or for the group, with no restrictions on order value"/>
    <Feature
     imgsrc={image2}
     title="Live Order Tracking"
     data="Know where your order is at all times, from the restaurant to your doorstep"/>
    <Feature
     imgsrc={image3}
     title="Lightning-Fast Delivery"
     data="Experience Swiggy's superfast delivery for food delivered fresh & on time"/>
</div>
    <Restraunt/>
    <Footer/>
</>
  );
}

export default App;
