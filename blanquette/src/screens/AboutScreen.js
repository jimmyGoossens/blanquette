import EventSlider from "../components/EventSlider";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";
import { TeamContainer, TitleContainer, TextContainer, TeamCard } from "../styles/OutStyles";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import HeaderComp from "../components/HeaderComp";

function AboutScreen() {
  const { t } = useTranslation();
  return (
    <div style={{ textAlign: 'center' }}>
      <NavMenu />
      <HeaderComp
        backImage='/media/aboutHead.jpg'
        title='délicieuse & énergisante'
      />
      <TitleContainer>
        <h3>our story</h3>

      </TitleContainer>
      <TextContainer>
        <p>Deux théories s’affrontent quant à l’origine de ce plat bourgeois et aujourd'hui familial. La première, celle de Noël Flantier, reporter, soutient que la blanquette n'était à l’origine qu'une manière d’apprêter des restes de rôti de veau avec une sauce blanche additionné de vin blanc et de verjus puis découpé en morceaux que l’on fait dorer dans du saindoux.
          La seconde théorie, la nôtre, veut qu'une bonne blanquette se déguste sur des basses croustillantes, parmi les personnes les plus tendres et accompagnée de la crème des artistes underground émergent.e.s de Bruxelles et d'ailleurs.

          L'alliance entre la passion de la bass music et le goût prononcé pour la blanquette de veau qui vient régaler la capitale. </p>
      </TextContainer>
      <TitleContainer>
        <h3>{t('about.valueTitle')} </h3>

      </TitleContainer>
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2%' }}>
        <img src='/media/robMixing.jpg' />
        <div>
          <h3>Good Music</h3>
          <p>test</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around',margin: '2%' }}>
        <div>
          <h3>good ambi</h3>
          <p>taste our elcetric ambiance with our warm community of music enthousiasts </p>
        </div>
        <img src='/media/funDancing.jpg' />
      </div>
      <TitleContainer>
        <h3>The Team</h3>

      </TitleContainer>
      <TeamContainer>
        <TeamCard backImage='/media/robMixing.jpg'>
          <p>Robin</p>
        </TeamCard>
        <TeamCard  backImage='/media/robMixing.jpg'>
          <p>member 2</p>
        </TeamCard>
        <TeamCard  backImage='/media/robMixing.jpg'>
          <p>member 3</p>
        </TeamCard>
      </TeamContainer>
      <Footer />
    </div>
  );
}

export default AboutScreen;