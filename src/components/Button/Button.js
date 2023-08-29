export default function Button({value,onClick,className}) {

    return (
        <button className={className} onClick={onClick}>{value}</button>
    );
  }