export const getCategories = (): Category[] => {
  return [
    { id: 1, active: true, name: "Action" },
    { id: 2, active: false, name: "Comedy" },
    { id: 3, active: false, name: "Romance" },
    { id: 4, active: false, name: "Thriller" },
    { id: 5, active: false, name: "Fantasy" },
    { id: 6, active: false, name: "Psi-Fi" },
    { id: 7, active: false, name: "Drama" },
  ];
};

export type Category = {
  id: number;
  active: boolean;
  name: string;
};
