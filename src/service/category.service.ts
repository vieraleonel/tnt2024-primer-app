export const getCategories = (): Category[] => {
  return [
    { id: 1, name: "Action" },
    { id: 2, name: "Comedy" },
    { id: 3, name: "Romance" },
    { id: 4, name: "Thriller" },
    { id: 5, name: "Fantasy" },
    { id: 6, name: "Psi-Fi" },
    { id: 7, name: "Drama" },
  ];
};

export type Category = {
  id: number;
  name: string;
};
