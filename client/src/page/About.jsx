import { useAuth } from "../store/auth";

const About = () => {
  const { user } = useAuth();

  return (
    <div>
      <h4>Welcome {user ? user.username : "to our website"}</h4>
      About
    </div>
  );
};

export default About;
