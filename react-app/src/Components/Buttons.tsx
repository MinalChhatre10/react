interface Props {
  children: string;
  //color?: string; //to specify the property is optional to typscript we add ?
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

const Buttons = ({ children, onClick, color = "warning" }: Props) => {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Buttons;
