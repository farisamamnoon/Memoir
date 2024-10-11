import { useRouteError } from "react-router-dom";

export default function Error() {
  const message = useRouteError();

  return (
    <div className="error-boundary">
      <h1>Error</h1>
      <p>{message}</p>
      <button onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
}
