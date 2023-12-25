import Link from "next/link";

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link id="Content_Manager" className="navbar-item" href="/">
            <h1>Content Manager</h1>
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <div className=" navbar-item">
              <div className="control has-icons-left">
                <input className="input is-rounded" type="email" placeholder="Search" />
                <span className="icon is-left">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
            <Link id="Home" href="/" className="navbar-item is-active is-size-5 has-text-weight-semibold">
              Home
            </Link>

            <Link id="add" href="/resources/new" className="navbar-item is-size-5 has-text-weight-semibold">
              Add
            </Link>

            {/* <Link legacyBehavior href="/resources/new">
              <a className="navbar-item is-size-5 has-text-weight-semibold">
                Add
              </a>
            </Link> */}
            {/* <a className="navbar-item is-size-5 has-text-weight-semibold">
              Add
            </a> */}

            <Link id="Features" href="../" className="navbar-item is-size-5 has-text-weight-semibold">
              Features
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;