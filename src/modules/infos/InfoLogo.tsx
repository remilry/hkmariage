import mairieLogo from "../../assets/mairieLogo.webp";
import egliseLogo from "../../assets/egliseLogo.webp";
import cortegeLogo from "../../assets/cortegeLogo.webp";
import photoLogo from "../../assets/photoLogo.webp";
import vinHonneurLogo from "../../assets/vinHonneurLogo.webp";
import partyLogo from "../../assets/partyLogo.webp";

export type InfoLogo =
  | "cityHall"
  | "church"
  | "cortege"
  | "photo"
  | "reception"
  | "party";

export const InfoLogo = ({ logo }: { logo: InfoLogo }) => {
  const image = getInfoLogo(logo);

  return <img src={image} width={64} height={64} />;
};

const getInfoLogo = (logo: InfoLogo) => {
  switch (logo) {
    case "cityHall":
      return mairieLogo;
    case "church":
      return egliseLogo;
    case "cortege":
      return cortegeLogo;
    case "photo":
      return photoLogo;
    case "reception":
      return vinHonneurLogo;
    case "party":
      return partyLogo;
  }
};
