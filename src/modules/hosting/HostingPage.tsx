import "./HostingPage.scss";
import BulleImg from "../../assets/bulle.webp";
import ChambreImg from "../../assets/chambre.webp";
import FrontDoor from "../../assets/frontDoor.webp";
import Cabane from "../../assets/cabane.webp";
import { Divider } from "../../components/divider/Divider";

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
              <li>Nombre de bulles : 4</li>
              <li>Nombre de personnes par bulle : 4</li>
            </ul>
          </div>
        </div>
        <img className="imgRight" src={BulleImg} alt="bulle" />
      </div>
      <Divider />
      <div className="slice imageLeft">
        <img className="imgLeft" src={ChambreImg} alt="chambre" />
        <div className="textContainer">
          <div className="textInsideContainer">
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
      <div className="slice imageRight">
        <div className="textContainer">
          <div className="textInsideContainer">
            <h2>Tente et caravanne</h2>
            <span>
              Un terrain est prévu pour dormir en tente ou en caravanne. Il faut
              cependant ramener le matériel.
            </span>
          </div>
        </div>
        <img className="imgRight" src={FrontDoor} alt="chambre" />
      </div>
      <Divider />
      <div className="slice imageLeft">
        <img className="imgLeft" src={Cabane} alt="chambre" />
        <div className="textContainer">
          <div className="textInsideContainer">
            <h2>Se loger en dehors</h2>
            <span>Bah demmerde toi !</span>
          </div>
        </div>
      </div>
    </div>
  );
};
