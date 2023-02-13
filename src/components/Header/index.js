import React from "react"
import { Link, Navigate } from "react-router-dom"
import menus from "./menus"

const Header = () => {
  return (
    <header id="header" className="header header-style">
      <div className="container">
        <div className="flex-header d-flex justify-content-between align-items-center">
          <div id="logo" className="logo">
            <Link
              to="/"
              onClick={() => {
                ;<Navigate replace to="/" />
              }}
              title="Logo"
            >
              <img src="images/logo.png" alt="logo" width={132} />
            </Link>
          </div>
          <div dir="rtl" className="btn-menu">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
            <div className="line line-4" />
          </div>
          <div className="content-menu d-flex">
            <div className="nav-wrap">
              <nav
                id="mainnav"
                className="mainnav"
                data-menu-style="horizontal"
              >
                <ul className="menu">
                  <li>
                    <Link to="#home" className="active">
                      Home
                    </Link>
                  </li>

                  {menus.map((menu) => (
                    <li key={menu.id}>
                      <Link to={menu.link} className="click-model">
                        {menu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
