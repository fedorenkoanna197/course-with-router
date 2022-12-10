import { getLessons } from "../utils/getLessons";
export const fetchLessonsName = ({ params }) => {
  let res;
  return fetch(
    `https://react-course-api.azurewebsites.net/lesson/${params.name}`
  )
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      return (res = getLessons(data));
    })
};
