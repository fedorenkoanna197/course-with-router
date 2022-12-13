import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
export const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div className="error">This page doesn't exist! <Link to={'/'}>Search</Link></div>;
    }

    if (error.status === 401) {
      return <div className="error">You aren't authorized to see this <Link to={'/'}>Search</Link></div>;
    }

    if (error.status === 503) {
      return <div className="error">Looks like our API is down <Link to={'/'}>Search</Link></div>;
    }
  }

  return <div className="error">Something went wrong <Link to={'/'}>Search</Link></div>;
}