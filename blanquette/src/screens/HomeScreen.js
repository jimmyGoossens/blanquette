import EventSlider from "../components/EventSlider";
import Footer from "../components/Footer";
import HeaderComp from "../components/HeaderComp";
import NavMenu from "../components/NavMenu";
import { DescriContainer, TeamContainer, TitleContainer } from "../styles/OutStyles";
import { useTranslation } from "react-i18next";

function HomeScreen() {
  const { t } = useTranslation();
    return (
        <div>
            <NavMenu />
            <HeaderComp
             title='Home'
            />
            <DescriContainer>
                <img width='90%' src="/media/home_what.jpg" />
                <div>
                    <h3>{t('home.whatTitle')}</h3>
                    <p>{t('home.whatWeAre')}</p>
                </div>
            </DescriContainer>
            <DescriContainer revrse={true}>
                <div>
                    <h3>{t('home.specialTitle')}</h3>
                    <p>{t('home.special')}</p>
                </div>
                <img src='/media/specialHome.jpg' width="90%"/>
            </DescriContainer>
            <TitleContainer>
            <h3>{t('home.TestimonyTitle')}</h3>

            </TitleContainer>
            <TeamContainer>
                <div>
                {t('home.TestimonyOne')}"
                </div>
                <div>
                {t('about.valueTitle')}
                </div>
                <div>
                {t('about.valueTitle')}
                </div>
            </TeamContainer>
        <Footer/>
        </div>
    );
}

export default HomeScreen;