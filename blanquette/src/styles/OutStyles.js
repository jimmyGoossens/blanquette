import styled from 'styled-components'

export const MenuBar = styled.div`
  //  background-image: ;
  width: 100%;
  display: flex;
  justify-content:space-between;
  align-items: center;
  position: absolute;
  z-index:90;
  a {
    margin: 8px;
    color: white;
    text-decoration: none;
    font-family: 'Nova Square', sans-serif;
  }
`

export const HeaderContainer = styled.div`
position: relative;
z-index:30;
  background-image: url(${props => props.backImage ? props.backImage : '/media/blanquetteBackground.jpg'});
  background-repeat:no-repeat;
  color: white;
  background-size:cover;
  min-height: 600px;
  @import url('https://fonts.googleapis.com/css2?family=Nova+Square&display=swap');
  font-family: 'Nova Square', sans-serif;
 // background-color: green;
`
export const CardContainer = styled.div`
width: 20%;
border-radius: 20px;
border: 2px solid white;
  background-image: url(${props => props.backImage ? props.backImage : '/media/blanquetteBackground.jpg'});
  background-repeat:no-repeat;
  color: white;
  background-size:cover;
  @import url('https://fonts.googleapis.com/css2?family=Nova+Square&display=swap');
  font-family: 'Nova Square', sans-serif;
 // background-color: green;
`


export const EventInfo = styled.div`
    position: absolute;
    bottom: 0;
`

export const TicketButton = styled.button`
    background-color: blue;
`
export const FooterContainer = styled.div`
    background-color:  rgba(26,9,115,1);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px 30px;

`
export const TitleContainer = styled.div`
    height: 30px;
    background-color: rgba(26,9,115,0.5);
    text-decoration: underline;
    font-family: 'Nova Square', sans-serif;
    text-align: center;

`
export const TextContainer = styled.div`
margin: 5% 10%;

`
export const SideImageCard = styled.div`
display: grid;
    grid-template-columns:${props => props.grid ? props.grid : '1fr 3fr '};
    grid-gap:  ${props => props.gap ? props.gap : '30px 30px'};
`

export const TeamContainer = styled.div`
display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: '30px 30px';
    align-items: center;
    margin: 5%;
`
export const TeamCard = styled.div`
    justify-self: center;
    height:300px;
    width: 200px;
    background-image:  url(${props => props.backImage ? props.backImage : '/media/blanquetteBackground.jpg'});
`
export const EventContainer = styled.div`
display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px 30px;
    align-items: center;
    text-align: center;

`

export const GalleryContainer = styled.div`
display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap:30px 30px;
    align-items: center;
    margin: 2%;
`
export const EventCard = styled.div`
    height:300px;
    width: 200px;
    background-image:  url(${props => props.backImage ? props.backImage : '/media/blanquetteBackground.jpg'});
`

export const DescriContainer = styled.div`
    text-align: ${props => props.revrse ? 'center' : 'center'};
    display: grid;
    grid-template-columns: ${props => props.revrse ? '2fr 1fr' : '1fr 2fr'} ;
    grid-gap: '30px 30px';
    margin: 5% 10%;
`