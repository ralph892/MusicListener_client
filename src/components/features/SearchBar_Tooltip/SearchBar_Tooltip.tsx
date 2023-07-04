"use client";
import React from "react";
import {
  IMusic,
  IArtist,
  handleGetMusicTrendings,
  handleGetArtistTrendings,
  IAlbum,
  handleGetAlbumTrendings,
} from "@/api/apiHandle";
import Image from "next/image";

interface Props {}

export interface ITrending {
  id: string;
  name: string;
  image: string;
  type: string;
}

const SearchBar_Tooltip = (props: Props) => {
  const [musicTrendings, setMusicTrendings] = React.useState<IMusic[]>([]);
  const [artistTrendings, setArtistTrendings] = React.useState<IArtist[]>([]);
  const [albumTrendings, setAlbumTrendings] = React.useState<IAlbum[]>([]);

  React.useEffect(() => {
    const fetchApi = async () => {
      const musicTrendingsData = await handleGetMusicTrendings();
      setMusicTrendings(musicTrendingsData);

      const artistTrendingsData = await handleGetArtistTrendings();
      setArtistTrendings(artistTrendingsData);

      const albumTrendingsData = await handleGetAlbumTrendings();
      setAlbumTrendings(albumTrendingsData);
    };
    fetchApi();
  }, []);

  return (
    <div className="searchBar_tooltip_wrapper">
      <div className="searchBar_tooltip">
        <div className="tooltip_heading">
          <div className="heading_btn_wrapper">
            <button className="heading_btn">Trending</button>
            <button className="heading_btn">Artists</button>
            <button className="heading_btn">Songs</button>
            <button className="heading_btn">Albums</button>
          </div>
        </div>
        <ul className="tooltip_sections_wrapper">
          <li className="tooltip_section">
            <div className="viewAll_button_wrapper">
              <a href="#" className="viewAll_button">
                VIEW ALL
              </a>
            </div>
            <div className="tooltip_section_body">
              <div className="section_body_wrapper">
                {artistTrendings &&
                  artistTrendings.map((trending, index) => {
                    return (
                      <div className="body_item_wrapper" key={index}>
                        <div className="body_item">
                          <Image
                            alt="avt_artist"
                            src={`${trending.image}`}
                            width={48}
                            height={48}
                            className="body_item_avt"
                          ></Image>
                          <span className="body_item_title">
                            {trending.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </li>
          <li className="tooltip_section">
            <div className="viewAll_button_wrapper">
              <a href="#" className="viewAll_button">
                VIEW ALL
              </a>
            </div>
            <div className="tooltip_section_body">
              <div className="section_body_wrapper">
                {musicTrendings &&
                  musicTrendings.map((trending, index) => {
                    return (
                      <div className="body_item_wrapper" key={index}>
                        <div className="body_item">
                          <Image
                            alt="avt_song"
                            src={`${trending.image}`}
                            width={48}
                            height={48}
                            className="body_item_avt"
                          ></Image>
                          <span className="body_item_title">
                            {trending.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </li>
          <li className="tooltip_section">
            <div className="viewAll_button_wrapper">
              <a href="#" className="viewAll_button">
                VIEW ALL
              </a>
            </div>
            <div className="tooltip_section_body">
              <div className="section_body_wrapper">
                {albumTrendings &&
                  albumTrendings.map((trending, index) => {
                    return (
                      <div className="body_item_wrapper" key={index}>
                        <div className="body_item">
                          <Image
                            alt="avt_album"
                            src={`${trending.image}`}
                            width={48}
                            height={48}
                            className="body_item_avt"
                          ></Image>
                          <span className="body_item_title">
                            {trending.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBar_Tooltip;
