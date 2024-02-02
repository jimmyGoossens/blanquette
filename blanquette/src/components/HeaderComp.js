import logo from '../logo.svg';
import { HeaderContainer, EventInfo } from '../styles/OutStyles';
const events = [{
    coverImg:'/media/blanquetteBackground.jpg', 
    date:'01/01/2024',
    place:'36, rue marchand duboisc 1000 Bruxelles Belgium',
    price:'10 euro',
    artits:['ArtistA', 'Artist B'],
    eventID : '122'
}]

function HeaderComp(props) {
    return (
      <HeaderContainer
      backImage={props.backImage}
      >
         <EventInfo>
          <h1>{props.title} </h1>
         </EventInfo>
         

      </HeaderContainer>
    );
  }
  
  export default HeaderComp;