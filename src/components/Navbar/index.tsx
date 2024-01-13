import { Link } from "react-router-dom";
import { LinkWrapper } from "./styled.component";

const Navbar = () => {
  return (
    <LinkWrapper>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <hr />
    </LinkWrapper>
  );
};

export default Navbar;
