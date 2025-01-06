import "./HostingPage.scss";
import BulleImg from "../../assets/bulle.webp";
import ChambreImg from "../../assets/chambre.webp";
import FrontDoor from "../../assets/frontDoor.webp";
import Cabane from "../../assets/cabane.webp";
import GiteImg from "../../assets/gite.webp";

export const HostingPage = () => {
  return (
    <div className="container">
      <h1 className="title">Les logements</h1>
      {/* <p>
        Plusieurs options sont disponibles pour se loger: bulles, chambres,
        tentes
      </p> */}
      <div className="slice imageRight">
        <div className="textContainer">
          <div className="textInsideContainer">
            <h2>Les bulles</h2>
            <ul>
              <li>Nombre de bulles : 5</li>
              <li>Nombre de personnes par bulle : 4</li>
              <li>{"Prix : 30€ / personne (vendredi & samedi)"}</li>
            </ul>
          </div>
        </div>
        <img className="imgRight" src={BulleImg} alt="bulle" />
      </div>
      <Spacer />
      <div className="slice imageLeft">
        <img className="imgLeft" src={ChambreImg} alt="chambre" />
        <div className="textContainer">
          <div className="textInsideContainer">
            <h2>Les chambres</h2>
            <ul>
              <li>Nombre de chambres : 4</li>
              <li>Nombre de personnes par chambre : 4 à 6</li>
              <li>{"Prix : 30€ / personne (vendredi & samedi)"}</li>
              <li>Matelas en plus gratuit</li>
            </ul>
          </div>
        </div>
      </div>
      <Spacer />
      <div className="slice imageRight">
        <div className="textContainer">
          <div className="textInsideContainer">
            <h2>Gîte</h2>
            <ul>
              <li>Nombre de personnes : 6</li>
              <li>{"Prix : 30€ / personne (vendredi & samedi)"}</li>
            </ul>
          </div>
        </div>
        <img className="imgRight" src={GiteImg} alt="chambre" />
      </div>
      <Spacer />
      <div className="slice imageLeft">
        <img className="imgRight" src={FrontDoor} alt="chambre" />
        <div className="textContainer">
          <div className="textInsideContainer">
            <h2>Tente et caravane</h2>
            <span>
              Un terrain est prévu pour dormir en tente ou en caravanne. Il faut
              cependant ramener son matériel.
            </span>
          </div>
        </div>
      </div>
      <Spacer />
      <div className="slice imageRight">
        <div className="textContainer">
          <div className="textInsideContainer">
            <h2>Se loger en dehors</h2>
            <span>Quelques villes aux alentours : </span>
            <ul>
              <li>St Gervazy</li>
              <li>St Germain Lembron</li>
              <li>Issoire</li>
            </ul>
          </div>
        </div>
        <img className="imgLeft" src={Cabane} alt="chambre" />
      </div>
    </div>
  );
};

export const Spacer = () => {
  return <div className="spacer" />;
};
