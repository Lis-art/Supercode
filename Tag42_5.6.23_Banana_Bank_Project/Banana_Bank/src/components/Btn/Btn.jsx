const Btn = ({ Btntext, Click }) => {
    return (
      <div>
        <button onClick={Click}>{Btntext}</button>
      </div>
    );
};
  
export default Btn;