import "./style.css";
import { Link } from "react-router-dom";

export function ErrorPage() {
  /*  const error = useRouteError();
  console.error(error); */

  return (
    <div className="error-page">
      <h1>Not found</h1>
      <span className="link">
        <Link to={"/"}>Go to home page</Link>
      </span>
      {/* <i>{error.statusText || error.message}</i> */}
    </div>
  );
}
