import React from 'react';
// import PropTypes from 'prop-types';

const Nav = (props) => {
  // const categories = ['a', 'b'];
  console.log(props);
  return (
    <header className="container remove-padding">
      <nav className="container d-flex justify-content-between">
        <div className="d-flex align-items-center justify-content-between w-75">
          <h5 className="d-flex">
            <span className="d-inline-block">
              Best Trader
            </span>
            <span className="d-inline-block">
              TM
            </span>
          </h5>
          <div className="d-flex justify-content-center align-items-center">
            <select className="form-select nav-item mx-3">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select className="form-select nav-item mx-3">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="m-auto">
          theme switch
        </div>
      </nav>
    </header>
  );
};

// Nav.propTypes = {

// };

export default Nav;
