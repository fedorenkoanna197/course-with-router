import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Search } from "./search";
import { Card } from "./card";
import { fetchLessonsName } from "./fetchLessonName";
import { ErrorPage } from "./ErrorPage";
export const routing = createHashRouter([
 {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Search />,
      },
      {
        path: "/card/:name",
        element: <Card />,
        loader: fetchLessonsName,
      },
    ],
  },
]);
