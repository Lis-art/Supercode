import './Input.css'

const Input = ({ betrag, BetragChange }) => {
  return (
    <div>
      <input type="number" value={betrag === 0 ? "" : betrag} onChange={BetragChange} />
    </div>
  );
};

export default Input;