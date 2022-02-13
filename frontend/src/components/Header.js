import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Container>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              Shop
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <Link class="nav-link active" to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    Cart
                    <span class="visually-hidden">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    <i className="fas fa-user"></i>
                    Sign-in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
