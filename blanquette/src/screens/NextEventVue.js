import EventSlider from "../components/EventSlider";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";
import { TeamContainer, TitleContainer, TextContainer, TeamCard } from "../styles/OutStyles";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import EventCardComp from "../components/EventCardComp";

function NextEventVue({ events }) {
    const { t } = useTranslation();
    return (
        <div style={{ textAlign: 'center' }}>
            {events.map((party) => {
                return (
                    <EventCardComp props={party} />
                )
            })}

        </div>
    );
}

export default NextEventVue;