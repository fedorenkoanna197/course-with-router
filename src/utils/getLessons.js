export const getLessons = (arr) => {
    let resultArray = arr.map((element) => {
      return {
        title: element.title,
        keyPoints: element.keyPoints,
        type: element.type,
        youtube: element.youtube,
        links: element.links,
        name: element.name
      };
    });
    return resultArray;
  };