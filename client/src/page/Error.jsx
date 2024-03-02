import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <section>
        <div className="contant">
          <div className="mainError">404</div>
          <h2>Sorry ! Page not found</h2>
          <p>this page is not presant</p>
          <div className="btn">
            <NavLink to="/">Return home </NavLink>
            <NavLink to="/contact">report problam</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
