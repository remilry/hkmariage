import styles from "./ContactsPage.module.scss";
import BulleImg from "../../assets/bulle.webp";
import { House, Mail, Phone } from "lucide-react";
import styled from "@emotion/styled";

export const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <ContactCard
        name="Hélène"
        email="leroy445@gmail.com"
        phone="06 51 56 97 10"
        adress="1 avenue du Pin 63570 Auzat la Combelle"
        photo={BulleImg}
      />
      <Divider />
      <ContactCard
        name="Kévin"
        email="kevin@gmail.com"
        phone="06 89 03 55 59"
        adress="1 avenue du Pin 63570 Auzat la Combelle"
        photo={BulleImg}
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
          <div>
            <House color={"RGB(50, 50, 50"} size={32} />
          </div>
          <p className={styles.field}>Adresse : {adress}</p>
        </div>
        <div className={styles.row}>
          <Phone color={"RGB(50, 50, 50"} size={32} />
          <p className={styles.field}>N° de téléphone : {phone}</p>
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
