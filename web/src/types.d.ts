export interface TwitchGame {
  id: string;
  name: string;
  box_art_url: string;
}

export interface SavedGame extends TwitchGame {
  platform: string;
  status: string;
}
