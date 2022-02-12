import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Container>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Shop
            </a>
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
                  <a class="nav-link active" href="#">
                    <i className="fas fa-shopping-cart"></i>
                    Cart
                    <span class="visually-hidden">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i className="fas fa-user"></i>
                    Sign-in
                  </a>
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
