import { useState } from 'react';
import EventSlider from "../components/EventSlider";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";
import { TeamContainer, TitleContainer, TextContainer, TeamCard } from "../styles/OutStyles";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import NextEventVue from "./NextEventVue";
import PastEventVue from "./PastEventVue";

function AdminScreen() {
  const { t } = useTranslation();
  let testEvent = [
    {
      title: 'techno test',
      description: 'une soirée techno',
      address: '36, rue de la moire, 1000 BXL',
      photoUrl: '/url',
      date: '01/18/2024',
      artists: ['robin', 'blanquette master']
    }]
  const [past, setPast] = useState(false);
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex' }}>
        <div onClick={() => setPast(true)}><p>Past Events</p> </div>
        <div onClick={() => setPast(false)} ><p>Next Events</p> </div>

      </div>


      {past ? <PastEventVue /> : <NextEventVue events={testEvent} />}
    </div>
  );
}

export default AdminScreen;