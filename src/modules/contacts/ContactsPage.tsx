import styles from "./ContactsPage.module.scss";
import { House, Mail, Phone } from "lucide-react";
import styled from "@emotion/styled";
import profilHeleneImg from "../../assets/profilHelene.webp";
import profilKevingImg from "../../assets/profilKevin.webp";

export const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <ContactCard
        name="Hélène Leroy"
        email="leroy445@gmail.com"
        phone="06&nbsp51&nbsp56&nbsp97&nbsp10"
        adress="1 avenue du Pin 63570 Auzat la Combelle"
        photo={profilHeleneImg}
      />
      <Divider />
      <ContactCard
        name="Kévin Bourbiaux"
        email="kevin.bourbiaux@gmail.com"
        phone="06&nbsp89&nbsp03&nbsp55&nbsp59"
        adress="1 avenue du Pin 63570 Auzat la Combelle"
        photo={profilKevingImg}
      />
    </div>
  );
};

const ContactCard = ({
  name,
  email,
  phone,
  photo,
  adress,
}: {
  name: string;
  email: string;
  phone: string;
  photo: string;
  adress: string;
}) => {
  return (
    <div className={styles.contactCard}>
      <div className={styles.photo}>
        <img src={photo} />
      </div>
      <span className={styles.name}>{name}</span>
      <div>
        <div className={styles.row}>
          <div className={styles.icon}>
            <House color={"RGB(50, 50, 50"} size={32} />
          </div>
          <p className={styles.field}>Adresse : {adress}</p>
        </div>
        <div className={styles.row}>
          <Phone color={"RGB(50, 50, 50"} size={32} />
          <p
            className={styles.field}
            dangerouslySetInnerHTML={{ __html: `N° de téléphone : ${phone}` }}
          >
            {/* N° de téléphone : {phone} */}
          </p>
        </div>
        <div className={styles.row}>
          <Mail color={"RGB(50, 50, 50"} size={32} />
          <p className={styles.field}>Email : {email}</p>
        </div>
      </div>
    </div>
  );
};

const Divider = styled.div({
  height: "auto",
  width: 1,
  backgroundColor: "RGB(50, 50, 50)",
});
