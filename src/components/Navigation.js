import React, { Component } from 'react';
import { NavLink, Redirect, withRouter } from 'react-router-dom';
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      collapsed: true
    };
  }

  logout() {
    localStorage.setItem('token', '');
    this.props.history.push('/login');
    window.location.reload();
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {

    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler collapsed' : 'navbar-toggler';
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
        <div className="menu-container">
          <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">MENU</span>
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <div class="left-container">
            <ul className="menu">
              <li className="menu-item">
                <NavLink exact className="menu-link logo" onClick={this.props.toggleTheme.toggleTheme} to="#" >SWAPP</NavLink>
              </li>
            </ul>
            </div>
            <div class='right-container'>
              <ul className="menu">
                <li className="menu-item">
                  <NavLink className="menu-link" to="/episodes">Episodes</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink className="menu-link" to="/characters">Characters</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink className="nav-link" to="/logout" onClick={this.logout}>Logout</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default withRouter(Navigation);