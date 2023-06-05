import { useState } from 'react';
import Input from '../Input/Input';
import KontoAnzeige from '../KontoAnzeige/KontoAnzeige';
import Btn from '../Btn/Btn';
import './Konto.css'


let Kontooo = () => {
  const [kontostand, setKontostand] = useState(0);
  const [betrag, setBetrag] = useState(0);

  const Einzahlen = () => {
    setKontostand(kontostand + betrag);
  };

  const Auszahlen = () => {
    setKontostand(kontostand - betrag);
  };

  const BetragChange = (e) => {
    setBetrag(Number(e.target.value));
  };

  return (
    <div>
      <KontoAnzeige kontostand={kontostand} id='KtoStand'/>
      <Input betrag={betrag} BetragChange={BetragChange} />
      <article id='btns'>
        <Btn Btntext="Einzahlen" Click={Einzahlen} />
        <Btn Btntext="Auszahlen" Click={Auszahlen} />
      </article>
    </div>
  );
};

export default Kontooo;