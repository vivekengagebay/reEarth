import { useContext } from "react";
import "./../styles/Header.scss"
import { GoEarth } from "../utilis";

function Header() {
  const parentContext = useContext(GoEarth)

  function handleLogOut(e) {
    e.preventDefault()
    const initialUserDTO = {

      username: "",
      email: "",
      city: "",
      firstname: "",
      lastname: "",
      state: "",
      mobilenumber: 0,
      pincode: "",
      password: ""
    }
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    parentContext.setUserDTO({ ...initialUserDTO })
    parentContext.setIsLoggedIn(false)
  }

  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
    //   <div className="container">
    //     <a className="navbar-brand" href="#">
    //       <img src="https://i.ibb.co/pXXNchk/Go-earth-removebg-preview-1-1.png" height={50} />
    //     </a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link " aria-current="page" href="/">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/add-waste">Add waste</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/Rewards">Rewards</a>
    //         </li>
    //         {!parentContext.isLoggedIn ? (
    //            <li className="nav-item">
    //            <a className="nav-link" href="/login">Login</a>
    //          </li>
    //         ) : <></>}
    //        {!parentContext.isLoggedIn ? (
    //         <li className="nav-item">
    //           <a className="nav-link" href="/signup">Signup</a>
    //         </li>
    //         ) : <></>}
    //       </ul>
    //       {/* <form className="d-flex" role="search">
    //     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //     <button className="btn btn-outline-success" type="submit">Search</button>
    //   </form> */}
    //     </div>
    //   </div>
    // </nav>

    <>
      <section data-bs-version="5.1" class="menu menu1 earth-perk-nav-bar" once="menu" id="amenu1-1">
        <nav class="navbar navbar-dropdown navbar-expand-lg">
          <div class="container">
            <div class="navbar-brand navbar-brand-main">

              <span class="navbar-caption-wrap">
                <a className="navbar-brand" href="#">
                  <img src="https://i.ibb.co/TmKP0pk/earth-parents-wiki-ver-1-removebg-preview.png" height={50} />
                  <span><strong>Planet perks</strong></span>
                </a>
              </span>
            </div>

            <ul class="navbar-nav navbar-nav-main nav-dropdown" data-app-modern-menu="true">
              <li class="nav-item">
                <a class="nav-link link text-white display-4" href="/">
                  Home
                </a></li>
              <li class="nav-item"><a class="nav-link link text-white display-4" href="/add-waste">
                recycle
              </a></li>
              <li class="nav-item"><a class="nav-link link text-white display-4" href="/rewards">
                rewards
              </a></li>
              {localStorage.getItem('email') ? (
                <>
                  {/* <li class="nav-item">
                    <a class="nav-link link text-white display-4" onClick={(e) =>  handleLogOut(e) }>
                    Logout
                  </a></li> */}
                  <li className="nav-item">
                    <a className="nav-link link text-white display-4">
                      <div class="dropdown">
                        <div
                          class="dropdown-toggle"
                          // type="button"
                          id="dropdownMenuButton"
                          data-mdb-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Profile
                        </div>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <li><a class="dropdown-item" href="/user-details">User details</a></li>
                          <li><a class="dropdown-item d-none" href="/reset-password">Reset password</a></li>
                          <li><a class="dropdown-item" href="#" onClick={(e) => handleLogOut(e)} >Logout</a></li>
                        </ul>
                      </div>
                    </a>

                  </li>
                </>
              ) :
                <>

                  <li class="nav-item"><a class="nav-link link text-white display-4" href="/login">
                    login
                  </a></li>
                  <li class="nav-item"><a class="nav-link link text-white display-4" href="/signup">
                    signup
                  </a></li>
                </>}

            </ul>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;