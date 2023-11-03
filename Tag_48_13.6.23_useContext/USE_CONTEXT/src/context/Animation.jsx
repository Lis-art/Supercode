import { useState, useEffect } from "react";
import Homepage from "../pages/Homepage";

const Animation = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 2000);
  }, []);

  return (
    <>
      <section>
        {animation ? <div className="svg-beer" /> : <Homepage />}
      </section>
    </>
  );
};

export default Animation;

