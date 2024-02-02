import { CardContainer, EventInfo } from '../styles/OutStyles';

function EventCardComp(props) {
  return (
    <CardContainer
      backImage={props.coverImg}
    >
      <div>
        <h1>{props.props.title} </h1>
        <h3>{props.props.date} </h3>
        <h3>{props.props.address} </h3>
      </div>


    </CardContainer>
  );
}

export default EventCardComp;