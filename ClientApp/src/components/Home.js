import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {

    fetch('https://warhammerapi.azurewebsites.net/api/values', {
      method: 'get',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function(response) {
      console.log(response);

      // return response;
      // return response.json();
    }).then(function(data) {
      // ChromeSamples.log('Created Gist:', data.html_url);
      console.log(data);
    });


    return (
      <div>
        <h1>Army<br/>Ultra First Company</h1>

        <img src="ultraSpaceMarine.jpg" alt="Marin" className="center"></img>

        <button className="add-button">
          <span>
            <i className="fas fa-plus"></i>
          </span>
        </button>


      </div>
    );
  }
}
