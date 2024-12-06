import React, { memo, useEffect } from "react";

type Props = {
  theme: string;
};

function Footer({ theme }: Props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className={`text-center mt-auto ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
      <div className='container'>
        <ul className='nav justify-content-center py-2'>
          <li className='nav-item pe-1'> Ishanvi Chauhan</li>
        </ul>
      </div>
    </footer>
  );
}

export default memo(Footer);
