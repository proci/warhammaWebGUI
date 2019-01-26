import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Army<br/>Ultra First Company</h1>

        <img src="ultraSpaceMarine.jpg" alt="Marin" className="center"></img>

        <button className="add-button"><span class="fas fa-angry"></span></button>

        <span style="font-size: 3em; color: Tomato;">
          <i class="fas fa-igloo"></i>
        </span>
      </div>
    );
  }
}
