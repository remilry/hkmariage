import "./BurgerButton.scss";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};
export const BurgerButton = ({ isOpen, onClick }: Props) => {
  return (
    <header>
      <div className="menu-btn" onClick={onClick}>
        <span className={isOpen ? "activeBar" : "bar"}></span>
        <span className={isOpen ? "activeBar" : "bar"}></span>
        <span className={isOpen ? "activeBar" : "bar"}></span>
      </div>
    </header>
  );
};
