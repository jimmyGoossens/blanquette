import EventSlider from "../components/EventSlider";
import Footer from "../components/Footer";
import HeaderComp from "../components/HeaderComp";
import NavMenu from "../components/NavMenu";
import { EventContainer, GalleryContainer } from "../styles/OutStyles";

function GalleryScreen() {
    return (
      <div>
        <NavMenu/>
        <HeaderComp
        backImage='/media/galleryImage.jpg'
        title='Belle & appétissante'
        />
        <EventContainer>
        <h2>Photo</h2>
          <h2>video</h2>
          <h2>NFT</h2>
        </EventContainer>

        <GalleryContainer>
        <img src='/media/specialHome.jpg' width="90%"/>
        <img src='/media/specialHome.jpg' width="90%"/>
        <img src='/media/specialHome.jpg' width="90%"/>
        <img src='/media/specialHome.jpg' width="90%"/>
        <img src='/media/specialHome.jpg' width="90%"/>
        <img src='/media/specialHome.jpg' width="90%"/>
        

        </GalleryContainer>
        <Footer></Footer>
      </div>
    );
  }
  
  export default GalleryScreen;