import { Movie } from "./movies.types";

const getMovies: () => Movie[] = () => {
  return [
    {
      title: "Eternals",
      image: require("@/assets/images/eternals.png"),
    },
    {
      title: "Spider-Man: No Way Home",
      image: require("@/assets/images/spidey.png"),
    },
    {
      title: "Matrix",
      image: require("@/assets/images/matrix.png"),
    },
  ];
};

export { getMovies };
