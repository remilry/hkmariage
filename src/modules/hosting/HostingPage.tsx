import "./HostingPage.scss";
import BulleImg from "../../assets/bulle.webp";
import ChambreImg from "../../assets/chambre.webp";
import FrontDoor from "../../assets/frontDoor.webp";
import Cabane from "../../assets/cabane.webp";
import { Divider } from "../../components/divider/Divider";

export const HostingPage = () => {
  return (
    <div id="container">
      <h1 id="title">Les logements</h1>
      {/* <p>
        Plusieurs options sont disponibles pour se loger: bulles, chambres,
        tentes
      </p> */}
      <div id="slice">
        <div id="textContainer">
          <div id="textInsideContainer">
            <h2>Les bulles</h2>
            <ul>
              <li>Nombre de bulles : 4</li>
              <li>Nombre de personnes par bulle : 4</li>
            </ul>
          </div>
        </div>
        <img id="imgRight" src={BulleImg} alt="bulle" />
      </div>
      <Divider />
      <div id="slice">
        <img id="imgLeft" src={ChambreImg} alt="chambre" />
        <div id="textContainer">
          <div id="textInsideContainer">
            <h2>Les chambres</h2>
            <ul>
              <li>Nombre de chambres : XX</li>
              <li>Nombre de personnes par chambre : 4 à 6</li>
              <li>Possibilité de rajouter des matelas</li>
            </ul>
          </div>
        </div>
      </div>
      <Divider />
      <div id="slice">
        <div id="textContainer">
          <div id="textInsideContainer">
            <h2>Tente et caravanne</h2>
            <p>
              Un terrain est prévu pour dormir en tente ou en caravanne. Il faut
              cependant ramener le matériel.
            </p>
          </div>
        </div>
        <img id="imgRight" src={FrontDoor} alt="chambre" />
      </div>
      <Divider />
      <div id="slice">
        <img id="imgLeft" src={Cabane} alt="chambre" />
        <div id="textContainer">
          <div id="textInsideContainer">
            <h2>Se loger en dehors</h2>
            <p>Bah demmerde toi !</p>
          </div>
        </div>
      </div>
    </div>
  );
};
