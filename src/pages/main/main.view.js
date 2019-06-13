import React, { Component } from "react";
import { HeaderView as Header } from './view/header/header.view.js';
import { MenuView as Menu } from './view/menu/menu.view.js';
import { AboutView as About } from './view/about/about.view.js';



export class MainView extends Component {
  render() {
    return <div>
      <Header></Header>
      <Menu></Menu>
      <About></About>
    </div>
  }
}