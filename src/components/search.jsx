import { useSearchParams } from "react-router-dom";
import { Cards } from "./cards";
import { useCorse } from "./fetchAllLessons";
export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [lesson, search, changeSearche, changeClick, error] = useCorse();

  const setOrdering = () => {
    const newOrdering = search;
    searchParams.set("q", newOrdering);
    setSearchParams(searchParams, { replace: false });
    changeClick(true);
  };

  return (
    <>
      <label htmlFor="input">Enter the lesson you want to find</label>
      <input
        type="text"
        placeholder="Enter course"
        id="input"
        onBlur={(e) => {
          changeSearche(e.target.value);
        }}
      />
      <button onClick={setOrdering}>Search</button>
      {error.error === false ? (
        <Cards lessons={lesson} />
      ) : (
        <p className="error">Error: {error.message}</p>
      )}
    </>
  );
};
