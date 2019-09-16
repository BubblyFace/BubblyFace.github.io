import React from 'react';
import {MenuView as Menu} from './view/menu/menu.view.js';
import {AboutView as About} from './view/about/about.view.js';

/**
 * @return {JSX}
 */
export function MainView() {
  return <div>
    <Menu></Menu>
    <About></About>
  </div>;
}
