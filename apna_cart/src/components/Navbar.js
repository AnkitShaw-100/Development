import React from 'react';
import { Component } from 'react';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Apna Cart
          </a>
        </div>
      </nav>
      );
      
    }
}
 
export default Navbar;