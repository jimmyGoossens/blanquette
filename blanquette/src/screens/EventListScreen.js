import EventSlider from "../components/EventSlider";
import Footer from "../components/Footer";
import HeaderComp from "../components/HeaderComp";
import NavMenu from "../components/NavMenu";

function EventListScreen() {

  let testEvent = [
    {name:'techno test', 
    description:'une soirée techno',
    address: '36, rue de la moire, 1000 BXL',
    photoUrl:'/url',
    date:'01/18/2024',
    artists:['robin','blanquette master']
}]
    return (
      <div>
        <NavMenu/>
        <HeaderComp
        backImage='/media/eventHead.jpg'
        title='Unique & Innovante'
        />
        <EventSlider/>
          <Footer></Footer>
      </div>
    );
  }
  
  export default EventListScreen;