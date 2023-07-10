"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { SectionSlider } from "../features/SectionSlider";
import {
  handleGetEvents,
  handleGetFeaturedArtists,
  handleGetNewReleases,
  handleGetPlayLists,
  handleGetTopAlbums,
  handleGetTopCharts,
  IAlbum,
  IArtist,
  IEvent,
  IMusic,
  IPlayList,
  isArtist,
  isMusic,
  isPlayList,
} from "@/api/apiHandle";
import { List_Item } from "../features/List_Item";
import { Footer } from "../Footer";

type Props = {
  passedFcMusics: (data: IMusic) => void;
};

const PageContent = (props: Props) => {
  const [topCharts, setTopCharts] = React.useState<IMusic[]>([]);
  const [newReleases, setNewReleases] = React.useState<IMusic[]>([]);
  const [featuredArtists, setFeaturedArtists] = React.useState<IArtist[]>([]);
  const [topAlbums, setTopAlbums] = React.useState<IAlbum[]>([]);
  const [playLists, setPlayLists] = React.useState<IPlayList[]>([]);
  const [events, setEvents] = React.useState<IEvent[]>([]);
  const [songsList, setSongsList] = React.useState<IMusic[]>([]);
  const [lineWidth, setLineWidth] = React.useState("81.93");
  const [lineLeft, setLineLeft] = React.useState(0);

  const myRefs = [
    React.useRef<HTMLButtonElement>(null),
    React.useRef<HTMLButtonElement>(null),
    React.useRef<HTMLButtonElement>(null),
  ];

  React.useEffect(() => {
    const fetchApi = async () => {
      const topChartsData = await handleGetTopCharts();
      setTopCharts(topChartsData);

      const newReleasesData = await handleGetNewReleases();
      setNewReleases(newReleasesData);

      const featuredArtistsData = await handleGetFeaturedArtists();
      setFeaturedArtists(featuredArtistsData);

      const topAlbumsData = await handleGetTopAlbums();
      setTopAlbums(topAlbumsData);

      const playListsData = await handleGetPlayLists();
      setPlayLists(playListsData);

      const eventsData = await handleGetEvents();
      setEvents(eventsData);
    };
    fetchApi();
  }, []);

  const handleSongsList = (index: number) => {
    setLineLeft(0);
    for (let i = 0; i < myRefs.length; i++) {
      if (i === index) {
        myRefs[i].current?.classList.add("active");
        setLineWidth(`${myRefs[i].current?.offsetWidth}`);

        for (let j = i; j > 0; j--) {
          setLineLeft((prev) => prev + Number(myRefs[j].current?.offsetWidth));
          console.log(lineLeft);
        }
      } else {
        myRefs[i].current?.classList.remove("active");
      }
    }

    if (myRefs[index].current?.value === "trendings") setSongsList([]);
    else if (myRefs[index].current?.value === "top charts")
      setSongsList(topCharts);
    else setSongsList(newReleases);
  };

  const numSlidePreview = (
    typeData: IMusic[] | IArtist[] | IPlayList[] | IEvent[]
  ) => {
    if (typeData === undefined) return 1;
    else if (typeData[0] === undefined) return 1;

    if (isMusic(typeData[0])) {
      if (typeData.length > 5) return 5;
      else return typeData.length;
    } else if (isArtist(typeData[0])) {
      if (typeData.length > 6) return 6;
      else return typeData.length;
    } else if (isPlayList(typeData[0])) {
      if (typeData.length > 4) return 4;
      else return typeData.length;
    } else {
      if (typeData.length > 2) return 2;
      else return typeData.length;
    }
  };

  return (
    <div className="pageContent_wrapper">
      <div className="pageContent_container">
        <div className="pageContent_heading"></div>
        <div className="pageContent_catalog">
          {/* section 1 */}
          <div className="catalog_section">
            <div className="section_heading">
              <div className="section_heading_subtitle">LISTEN TOP CHART</div>
              <div className="section_heading_title">
                Top <span className="title_emphasize">Charts</span>
                <div className="viewAll_button_wrapper viewAll-pageContent">
                  <a href="#" className="viewAll_button">
                    VIEW ALL
                  </a>
                </div>
              </div>
            </div>
            <div className="section_body_wrapper">
              <div className="section_body_container">
                <Swiper
                  spaceBetween={25}
                  slidesPerView={numSlidePreview(topCharts)}
                  navigation={true}
                  modules={[Navigation, Autoplay]}
                  autoplay={{
                    delay: 3000,
                  }}
                >
                  {topCharts &&
                    topCharts.map((topChart, index) => {
                      return (
                        <SwiperSlide>
                          <SectionSlider
                            data={topChart}
                            key={index}
                            passedFcMusics={props.passedFcMusics}
                            medium
                            hover
                          />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </div>

          {/* section 2 */}
          <div className="catalog_section">
            <div className="section_heading">
              <div className="section_heading_subtitle">NEW TO LISTEN</div>
              <div className="section_heading_title">
                New <span className="title_emphasize">Releases</span>
                <div className="viewAll_button_wrapper viewAll-pageContent">
                  <a href="#" className="viewAll_button">
                    VIEW ALL
                  </a>
                </div>
              </div>
            </div>
            <div className="section_body_wrapper">
              <div className="section_body_container">
                <Swiper
                  spaceBetween={25}
                  slidesPerView={numSlidePreview(newReleases)}
                  navigation={true}
                  modules={[Navigation, Autoplay]}
                  autoplay={{
                    delay: 3000,
                  }}
                >
                  {newReleases &&
                    newReleases.map((newRelease, index) => {
                      return (
                        <SwiperSlide>
                          <SectionSlider
                            data={newRelease}
                            key={index}
                            medium
                            hover
                          />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </div>

          {/* section 3 */}
          <div className="catalog_section">
            <div className="section_heading">
              <div className="section_heading_subtitle">BEST TO LISTEN</div>
              <div className="section_heading_title">
                Featured <span className="title_emphasize">Artists</span>
                <div className="viewAll_button_wrapper viewAll-pageContent">
                  <a href="#" className="viewAll_button">
                    VIEW ALL
                  </a>
                </div>
              </div>
            </div>
            <div className="section_body_wrapper">
              <div className="section_body_container">
                <Swiper
                  spaceBetween={25}
                  slidesPerView={numSlidePreview(featuredArtists)}
                  pagination={{
                    type: "bullets",
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 3000,
                  }}
                  modules={[Autoplay, Pagination]}
                >
                  {featuredArtists &&
                    featuredArtists.map((featuredArtist, index) => {
                      return (
                        <SwiperSlide>
                          <SectionSlider
                            data={featuredArtist}
                            key={index}
                            text_center
                            small
                            circle
                          />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </div>

          {/* section 4 */}
          <div className="catalog_section">
            <div className="section_heading">
              <div className="section_heading_subtitle">TRENDING TO LISTEN</div>
              <div className="section_heading_title">
                Top <span className="title_emphasize">Albums</span>
                <div className="viewAll_button_wrapper viewAll-pageContent">
                  <a href="#" className="viewAll_button">
                    VIEW ALL
                  </a>
                </div>
              </div>
            </div>
            <div className="section_body_wrapper">
              <div className="section_body_container">
                <div className="section_body row">
                  <div className="section_body col-xl-6">
                    <div className="section_body_list">
                      {topAlbums !== undefined &&
                        topAlbums
                          .slice(0, Math.floor(topAlbums.length / 2))
                          .map((topAlbum, index) => {
                            return (
                              <List_Item data={topAlbum} key={index} num />
                            );
                          })}
                    </div>
                  </div>
                  <div className="section_body col-xl-6">
                    <div className="section_body_list">
                      {topAlbums !== undefined &&
                        topAlbums
                          .slice(
                            Math.floor(topAlbums.length / 2),
                            topAlbums.length
                          )
                          .map((topAlbum, index) => {
                            return (
                              <List_Item data={topAlbum} key={index} num />
                            );
                          })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* section 5 */}
          <div className="catalog_section">
            <div className="section_heading">
              <div className="section_heading_subtitle">LISTEN TOP CHART</div>
              <div className="section_heading_title">
                Top <span className="title_emphasize">Charts</span>
                <div className="viewAll_button_wrapper viewAll-pageContent">
                  <a href="#" className="viewAll_button">
                    VIEW ALL
                  </a>
                </div>
              </div>
            </div>
            <div className="section_body_wrapper">
              <div className="section_body_container">
                <Swiper
                  spaceBetween={25}
                  slidesPerView={numSlidePreview(playLists)}
                  navigation={true}
                  modules={[Navigation, Autoplay]}
                  autoplay={{
                    delay: 3000,
                  }}
                >
                  {playLists &&
                    playLists.map((topChart, index) => {
                      return (
                        <SwiperSlide>
                          <SectionSlider data={topChart} key={index} large />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </div>

          {/* section 6 */}
          <div className="catalog_section">
            <div className="section_body_wrapper">
              <div className="section_body_container">
                <div className="section_body row">
                  <div className="section_body col-xl-6">
                    <div className="section_heading">
                      <div className="section_heading_title">
                        Upcoming <span className="title_emphasize">Events</span>
                        <div className="viewAll_button_wrapper viewAll-pageContent">
                          <a href="#" className="viewAll_button">
                            EXPLORE MORE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="section_body_wrapper">
                      <div className="section_body_container">
                        <Swiper
                          spaceBetween={25}
                          slidesPerView={numSlidePreview(events)}
                          pagination={{
                            type: "bullets",
                            dynamicBullets: true,
                            clickable: true,
                          }}
                          autoplay={{
                            delay: 3000,
                          }}
                          modules={[Autoplay, Pagination]}
                        >
                          {events &&
                            events.map((topChart, index) => {
                              return (
                                <SwiperSlide>
                                  <SectionSlider
                                    data={topChart}
                                    key={index}
                                    large
                                  />
                                </SwiperSlide>
                              );
                            })}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                  <div className="section_body col-xl-1"></div>
                  <div className="section_body col-xl-5">
                    <div className="songs_list_navbar_wrapper">
                      <ul className="songs_list_navbar">
                        <li>
                          <button
                            className="navbar_item active"
                            ref={myRefs[0]}
                            onClick={() => handleSongsList(0)}
                            value="trendings"
                          >
                            Trendings
                          </button>
                        </li>
                        <li>
                          <button
                            className="navbar_item ml8"
                            value="top charts"
                            ref={myRefs[1]}
                            onClick={() => handleSongsList(1)}
                          >
                            Top Charts
                          </button>
                        </li>
                        <li>
                          <button
                            className="navbar_item ml8"
                            value="new songs"
                            ref={myRefs[2]}
                            onClick={() => handleSongsList(2)}
                          >
                            New Songs
                          </button>
                        </li>
                      </ul>
                      <span
                        className="songs_list_line"
                        style={{
                          width: `${lineWidth}px`,
                          left: `${lineLeft}px`,
                        }}
                      ></span>
                    </div>
                    <div className="section_body_list mt20">
                      {songsList !== undefined &&
                        songsList.map((song, index) => {
                          return <List_Item data={song} key={index} small />;
                        })}
                    </div>
                    d
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PageContent;
