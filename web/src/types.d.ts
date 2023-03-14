export interface UserI {
  id: string;
  name: string;
  email: string;
}

export interface TwitchGame {
  id: string;
  name: string;
  box_art_url: string;
}

export interface SavedGame extends TwitchGame {
  platform: string;
  status: string;
}

export interface Status {
  name: string;
  label: string;
  element: JSX.Element;
}
