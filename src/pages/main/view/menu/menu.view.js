import React, { useState } from "react";

import "./assets/menu.style.css"

export function MenuView() {
  const [isMenuActive, setMenuActive] = useState(false);
  const menuClass = isMenuActive ? 'active' : 'negative';
  return <div id="menu" className={menuClass} onClick={() => { setMenuActive(!isMenuActive) }}>
    {
      isMenuActive && <div>

      </div>
    }
  </div>
}