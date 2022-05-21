export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: Location;
}

export const createEmptyCharacter = (): Character => ({
  id: -1,
  name: "",
  status: "",
  species: "",
  gender: "",
  image: "",
  location: {name: "", url: ""},
});
