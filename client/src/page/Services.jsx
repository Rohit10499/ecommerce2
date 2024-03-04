import { useAuth } from "../store/auth";
const Services = () => {
  const { services } = useAuth();
  return (
    <>
      <section className="service-section">
        <div className="container">
          <h4>Services </h4>
        </div>
        <div className="container grid grid-three-cols">
          {services.map((ele, index) => {
            const { price, description, provider, service } = ele;
            return (
              <div className="cart" key={index}>
                <div className="img">
                  <img
                    src="/images/design.png"
                    alt="out services info"
                    width={"200"}
                  />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <p>{service}</p>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
