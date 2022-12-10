import { Link, useLoaderData } from "react-router-dom";

export const Card = () => {
  const lesson = useLoaderData();
  return lesson.map((element, i) => (
      <article key={i}>
        <div className="card" key={i}>
          <h3>{element.title}</h3>
          <p>Type: {element.type}</p>
          {element.keyPoints !== undefined ? (
            <>
              <p>Key points : </p>
              <ul>
                {element.keyPoints.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <p>Links: </p>
              <ul>
                {element.links.map((e, i) => (
                  <li key={i}>
                    <a href={e[1]}>{e[0]}</a>
                  </li>
                ))}
              </ul>
            </>
          )}
          {element.youtube !== undefined ? (
            <p>
              <a href={element.youtube}>YouTube</a>
            </p>
          ) : null}
          <Link to={"/"}>
          <p>Search</p>
        </Link>
        </div>
        
      </article>
  ));
};
