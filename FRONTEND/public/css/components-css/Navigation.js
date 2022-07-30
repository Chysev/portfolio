const navigation = document.createElement("style");
navigation.textContent = `
  #navigation {
    display: flex;
    justify-content: space-around;
    align-items: center;
    filter: contrast(85%);
    background-color: transparent;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    height: 7vh;
    font-family: 'Rubik', sans-serif;
  }
  .navigation-title {
    display: flex;
  }
  .navigation-title h1, .secondary-navigation a {
    color: whitesmoke;
  }
  .nav-controler {
    display: none;
  }
  .primary-navigation {
    display: flex;
  }
  .secondary-navigation {
    display: flex;
    justify-content: space-around;
  }
  .secondary-navigation li {
    margin: 0px 10px;
    list-style: none;
  }
  .secondary-navigation a {
    text-decoration: none;
  }
`;
document.head.appendChild(navigation);
