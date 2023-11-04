// const routes = [
//   { id: 0, path: "/", label: "Home Page" },
//   { id: 1, path: "/examples", label: "Examples" },
//   { id: 2, path: "/blog", label: "Blog" },
//   { id: 3, path: "/about", label: "About" },
//   { id: 4, path: "/login", label: "Login" },
// ];
import Home from "../pages/home/Home.jsx";
import Examples from "../pages/examples/Examples.jsx";
import Blog from "../pages/blog/Blog.jsx";
import About from "../pages/about/About.jsx";
import Login from "../pages/login/Login.jsx";
import Form from "../pages/form/Form.jsx";
import Chat from "../pages/messenger/Chat.jsx";

export const EXAMPLES_ROUTES_LIST = [
  {
    id: 1,
    component: Form,
    value: "Form",
    path: "example-1",
  },
  {
    id: 2,
    component: Chat,
    value: "Chat",
    path: "example-2",
  },
];
export const ROUTES_LIST = [
  {
    id: 1,
    component: Home,
    value: "Home",
    path: "/",
  },
  {
    id: 2,
    component: Examples,
    value: "Examples",
    path: "/examples",
    children: EXAMPLES_ROUTES_LIST,
  },
  {
    id: 3,
    component: Blog,
    value: "Blog",
    path: "/blog",
  },
  {
    id: 4,
    component: About,
    value: "About",
    path: "/about",
  },
  {
    id: 5,
    component: Login,
    value: "Login",
    path: "/login",
  },
];

const routeMap = (listOfRoutes) => {
  return listOfRoutes.map((route) => ({
    path: route.path,
    component: route.component,
    children: route.children ? routeMap(route.children) : [],
    exact: true,
  }));
};

export const routes = routeMap(ROUTES_LIST);
