import { useEffect, useState } from "react";
import { getLessons } from "../utils/getLessons";

export const useCorse = () => {
  const [lesson, setLessons] = useState();
  const [search, setSearch] = useState();
  const [click, setClick] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });

  const changeSearche = (element) => {
    setSearch(element);
  };

  const changeClick = (e) => {
    setClick(e);
  };

  useEffect(() => {
    if (click) {
      setClick(false);
      fetch(`https://react-course-api.azurewebsites.net/lesson/${search}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Something went wrong");
        })
        .then((data) => {
          if (data.length === 0) {
            throw new Error("Not found. Try again");
          }
          setLessons(getLessons(data));
          setError({ error: false });
        })
        .catch((error) => {
          setError({ error: true, message: error.message });
        });
    }
  }, [click]);

  return [lesson, search, changeSearche, changeClick, error];
};
