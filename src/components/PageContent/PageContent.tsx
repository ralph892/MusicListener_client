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
  handleGetFeaturedArtists,
  handleGetNewReleases,
  handleGetTopAlbums,
  handleGetTopCharts,
  IAlbum,
  IArtist,
  IMusic,
  isMusic,
} from "@/api/apiHandle";
import { List_Item } from "../features/List_Item";

type Props = {};

const PageContent = (props: Props) => {
  const [topCharts, setTopCharts] = React.useState<IMusic[]>([]);
  const [newReleases, setNewReleases] = React.useState<IMusic[]>([]);
  const [featuredArtists, setFeaturedArtists] = React.useState<IArtist[]>([]);
  const [topAlbums, setTopAlbums] = React.useState<IAlbum[]>([]);

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
    };
    fetchApi();
  }, []);

  const numSlidePreview = (typeData: IMusic[] | IArtist[]) => {
    if (typeData === undefined) return 1;
    else if (typeData[0] === undefined) return 1;

    if (isMusic(typeData[0])) {
      if (typeData.length > 5) return 5;
      else return typeData.length;
    } else {
      if (typeData.length > 6) return 6;
      else return typeData.length;
    }
  };

  return (
    <div className="pageContent_wrapper">
      <div className="pageContent_container">
        <div className="pageContent_heading"></div>
        <div className="pageContent_catalog">
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
                          <SectionSlider data={topChart} key={index} />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </div>
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
                          <SectionSlider data={newRelease} key={index} />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </div>
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
                            type="Artist"
                          />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </div>
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
                            return <List_Item data={topAlbum} key={index} />;
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
                            return <List_Item data={topAlbum} key={index} />;
                          })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
