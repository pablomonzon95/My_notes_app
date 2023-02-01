import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Pagina de error</h1>
   
        <i>{error.statusText || error.message}</i>
      
    </div>
  );
}