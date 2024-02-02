import logo from '../logo.svg';
import { HeaderContainer, EventInfo } from '../styles/OutStyles';
import EventCardComp from './EventCardComp';
const events = [{
    coverImg:'/media/blanquetteBackground.jpg', 
    date:'01/01/2024',
    address:'36, rue marchand duboisc 1000 Bruxelles Belgium',
    price:'10 euro',
    artits:['ArtistA', 'Artist B'],
    eventID : '122',
    title:'techno test', 
}]

function EventSlider(props) {
    return (
      <div style={{margin:'2%'}}>
        {events.map(party => <EventCardComp props={party}/>)}
      </div>
    );
  }
  
  export default EventSlider;