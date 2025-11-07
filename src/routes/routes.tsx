/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy } from "react";


// main pages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const Homepage = lazy(() => import("../pages/home"))

export type RouteProps = {

  Icon?: any,
  path: string,
  label: string,
  menu?: boolean,
  component: any,
  types?: string[],
  subs?: RouteProps[],
}

export const routes: RouteProps[] = [
  // auth pages >>>>>>>>>>>>>>>>>>>>>>>>>>
  {
    path: "/",
    label: "Home",
    component: <Homepage />,
  },
  
]

