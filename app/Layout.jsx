import React from 'react';
import {Link} from 'react-router';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

export default (props) => {
   return (
   	<div>
   	<Navbar>
	   	<Navbar.Header>
	      <Navbar.Brand>
	        <a href="#">MI Meeting Calculator</a>
	      </Navbar.Brand>
	    </Navbar.Header>
   	</Navbar>
   	<div>{props.children}</div>
   	</div>
	       /*<div>
	           <ul className="nav-bar-links">
	               <li className="nav-bar-link"><Link to="/login">login</Link></li>
	               <li className="nav-bar-link"><Link to="/chat">chat</Link></li>
	           </ul>
	           <div>{props.children}</div>
	       </div>*/
   )
};