// import {lazy} from 'react'

// // use lazy for better code splitting, a.k.a. load faster
// const Dashboard = lazy(() => import('../Pages/Dashboard'))
// // const Reports = lazy(() => import('../Pages/reports'))
// const page404 = lazy(() => import('../Pages/404'))

import React, { lazy } from "react";

const Resume = lazy(() => import("../pages/Resume"));
const Contact = lazy(() => import("../pages/Contact"));
const Skills = lazy(() => import("../pages/Skills"));
const Projects = lazy(() => import("../pages/Projects"));
const Experiences = lazy(() => import("../pages/Experiences"));

interface RouteConfig {
  path: string;
  title: string;
  component?: React.ComponentType; // Ensure correct typing for React components
}

const routes: RouteConfig[] = [
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/resume",
    title: "Resume",
    component: Resume,
  },
  {
    path: "/projects",
    title: "Projects",
    component: Projects,
  },
  {
    path: "/experiences",
    title: "Experiences",
    component: Experiences
  },
  {
    path: "/skills",
    title: "Skills",
    component: Skills,
  },
  {
    path: "/contact",
    title: "Contact",
    component: Contact,
  },
];

export default routes;
