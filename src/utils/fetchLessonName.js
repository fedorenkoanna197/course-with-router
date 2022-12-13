import {getLessons} from './getLessons'
export const fetchLessonsName = ({ params }) => {
    return fetch(
      `https://react-course-api.azurewebsites.net/lesson/${params.name}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong", { status: 500 });
      })
      .then((data) => {
        if (data.length === 0) {
          throw new Response("Not found", { status: 404 });
        }
        return getLessons(data);
      });
};
