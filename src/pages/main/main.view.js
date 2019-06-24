import React, { Component } from "react";
import { MenuView as Menu } from './view/menu/menu.view.js';
import { AboutView as About } from './view/about/about.view.js';



export class MainView extends Component {
  render() {
    return <div>
      <Menu></Menu>
      <About></About>
    </div>
  }
}