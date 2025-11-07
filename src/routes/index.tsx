import { Suspense } from "react";
import Loading from "../components/loading";
import { type RouteProps, routes } from "./routes";
import { Route, Routes } from "react-router-dom";

export default function CustomRoutes() {
  return (   
      <Routes>
        {routes.map(({ path, component }: RouteProps) => {
          return (
            <Route key={path} path={path}
              element={<Suspense fallback={<Loading />}>{component}</Suspense>}
            />
          );
        })}
      </Routes>
  );
}