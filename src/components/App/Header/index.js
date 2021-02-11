import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

function Header() {
  // We only use this to delete the cookies, don't worry
  const [cookies, setCookie, removeCookie] = useCookies();

  function signOut() {
    removeCookie("user");
  }

  let loggedIn = "";

  if (cookies.user) {
    loggedIn = cookies.user;
  }

  return (
    <header className="App-header">
      <img
        src="/images/plusMentor/plusMentor_gradient_resized.png"
        alt="plusMentor Logo"
        width="350"
      />
      <nav>
        <NavLink to="/intro">Introduction</NavLink>
        &nbsp;
        <NavLink to="/icebreaker">Icebreaker</NavLink>
        &nbsp;
        <NavLink to="/GetTip">Talking Points</NavLink>
        &nbsp;
        <NavLink to="/interaction">Your sessions</NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p>{loggedIn}</p>
        <NavLink to="/">
          <button id="signOutButton" onClick={signOut}>
            Sign Out
          </button>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
