import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Search } from "./search";
import { Card } from "./card";
import { ErrorPage } from "./ErrorPage";
import { fetchAllLesson } from "../utils/fetchAllLessons";
import { fetchLessonsName } from "../utils/fetchLessonName";
export const routing = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Search />,
        loader: fetchAllLesson
      },
      {
        path: '/card/:name',
        element: <Card />,
        loader: fetchLessonsName
      }
    ]
  }
])