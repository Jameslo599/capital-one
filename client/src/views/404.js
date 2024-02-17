import "../styles/reset.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to="/">OK</Link>
    </div>
  );
}

export default NotFound;