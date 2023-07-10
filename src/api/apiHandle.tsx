import * as request from "./instanceAxios";

export interface IMusic {
  id?: string;
  name: string;
  image: string;
  type: string[];
  singer: string;
  genre: string;
  audio: string;
}

export interface IArtist {
  id?: string;
  name: string;
  country: string;
  gender: string;
  birthDay: Date;
  image: string;
  type: string[];
}

export interface IAlbum {
  id?: string;
  name: string;
  country: string;
  singer: string;
  genre: string;
  year: Date;
  image: string;
  type: string[];
}

export interface IPlayList {
  id?: string;
  name: string;
  image: string;
  songs: string[];
  favorite: number;
  rate: number;
}

export interface IEvent {
  id?: string;
  name: string;
  image: string;
  place: string;
  information: string[];
  description: string;
  date: Date;
  participants: number;
}

// user-defined type guards
export function isMusic(object: any): object is IMusic {
  return (object as IMusic).singer !== undefined;
}

export function isArtist(object: any): object is IArtist {
  return (object as IArtist).gender !== undefined;
}

export function isPlayList(object: any): object is IPlayList {
  return (object as IPlayList).songs !== undefined;
}

export function isEvent(object: any): object is IEvent {
  return (object as IEvent).place !== undefined;
}

export const handleGetMusicTrendings = async () => {
  try {
    const response = await request.get("/musicTrendings");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetArtistTrendings = async () => {
  try {
    const response = await request.get("/artistTrendings");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetAlbumTrendings = async () => {
  try {
    const response = await request.get("/albumTrendings");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetTopCharts = async () => {
  try {
    const response = await request.get("/topCharts");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetNewReleases = async () => {
  try {
    const response = await request.get("/newReleases");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetFeaturedArtists = async () => {
  try {
    const response = await request.get("/featuredArtists");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetTopAlbums = async () => {
  try {
    const response = await request.get("/topAlbums");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetPlayLists = async () => {
  try {
    const response = await request.get("/playLists");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetEvents = async () => {
  try {
    const response = await request.get("/events");
    return response;
  } catch (error) {
    console.log(error);
  }
};
