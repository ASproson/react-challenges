import { Link } from "react-router-dom";

export const Demo = () => {
  return (
    <div>
      <p className="text-white">Demo page</p>
      <Link to={"/"} className="text-white">
        Return home
      </Link>
    </div>
  );
};
