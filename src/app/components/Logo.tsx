import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="text-2xl font-bold italic font-sans">
      <span>Reza Hosseinzadeh</span>
    </Link>
  );
};

export default Logo;
