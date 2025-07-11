import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="grid place-items-center h-screen text-center px-4">

      <div>

        <h1 className="text-3xl font-bold mb-4">Oops! An error occurred</h1>

        {error && <p className="mb-4 text-red-600">{error.data}</p>}

        <NavLink to="/">
          <button>
            Go Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};
