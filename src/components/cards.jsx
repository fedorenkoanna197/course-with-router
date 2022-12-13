import {Link} from "react-router-dom";

export const Cards = ({lessons}) => {
  return (
    <article>
      {lessons &&
        lessons.map((element, i) => (
          <div className="card" key={i}>
            <Link to={`/card/${element.name}`}><h3>{element.title}</h3></Link>
            <p>Type: {element.type}</p>
            {element.keyPoints !== undefined ? (
              <>
                <p>Key points : </p>
                <ul >
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
          </div>
        ))}
    </article>
  );
};
