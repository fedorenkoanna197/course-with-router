import { getLessons } from "./getLessons";
export const fetchAllLesson = ({ request }) => {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const searchLesson = params.get("ask");
  if (searchLesson === null) {
    return null;
  } else {
    return fetch(
      `https://react-course-api.azurewebsites.net/lesson/${searchLesson}`
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
  }
};
