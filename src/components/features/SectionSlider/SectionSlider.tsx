"use client";
import React from "react";
import Image from "next/image";
import {
  RiHeart3Fill,
  RiVipCrownFill,
  RiPlayFill,
  RiMore2Fill,
  RiMapPinFill,
} from "react-icons/ri";

import {
  IArtist,
  IEvent,
  IMusic,
  IPlayList,
  isArtist,
  isEvent,
  isMusic,
  isPlayList,
} from "@/api/apiHandle";
import { Option_Tooltip } from "../Option_Tooltip";

type Props = {
  data: IMusic | IArtist | IPlayList | IEvent;

  medium?: boolean;
  small?: boolean;
  large?: boolean;

  circle?: boolean;
  text_center?: boolean;
  hover?: boolean;

  passedFcMusics?: (data: IMusic) => void;
};

const SectionSlider = ({
  data,
  small,
  medium,
  large,
  circle,
  text_center,
  hover,
  ...rest
}: Props) => {
  const [isRender, setIsRender] = React.useState(false);

  const myProps = {
    small: small ? "small" : "",
    medium: medium ? "medium" : "",
    large: large ? "large" : "",
    circle: circle ? "circle" : "",
    text_center: text_center ? "text_center" : "",
    hover: hover ? "hover" : "",
  };

  const classNames =
    Object.values(myProps).length !== 0
      ? " " +
        Object.values(myProps)
          .filter((value) => value !== "")
          .join(" ")
      : "";

  const handleRender = () => {
    setIsRender(true);
  };

  const handleUnRender = () => {
    setIsRender(false);
  };

  const handleClickPlay = () => {
    if (rest.passedFcMusics && isMusic(data)) rest.passedFcMusics(data);
  };

  return (
    <div className={`sectionSlider_wrapper ${classNames}`}>
      <div className="sectionSlider_container" onMouseLeave={handleUnRender}>
        <button
          className={`sectionSlider_btn-play ${myProps.hover}`}
          onClick={handleClickPlay}
        >
          <RiPlayFill />
        </button>
        <div className={`sectionSlider_heading ${myProps.hover}`}>
          {isMusic(data) && data.type.includes("favorite") && (
            <span className="badge-icon bg-danger">
              <RiHeart3Fill />
            </span>
          )}
          {isMusic(data) && data.type.includes("top chart") && (
            <span className="badge-icon bg-warning">
              <RiVipCrownFill />
            </span>
          )}
          <button
            className={`sectionSlider_heading-icon icon-more ${myProps.hover}`}
            onClick={handleRender}
          >
            <RiMore2Fill />
            {isRender && <Option_Tooltip />}
          </button>
        </div>
        <div className={`sectionSlider_img_wrapper${classNames}`}>
          <Image
            alt="avt_topChart"
            src={data.image}
            width={165}
            height={165}
            className="sectionSlider_img"
          ></Image>
        </div>
        {(isMusic(data) || isArtist(data)) && (
          <div
            className={`sectionSlider_title_wrapper ${myProps["text_center"]}`}
          >
            <div className="sectionSlider_title">{data.name || "Unknown"}</div>
            <div className="sectionSlider_subtitle">
              {isMusic(data) ? data.singer : ""}
            </div>
          </div>
        )}
        {isPlayList(data) && (
          <div className="sectionSlider_playlist_content">
            <div className="playlist_title">{data.name || "Unknown"}</div>
            <div className="playlist_subtitle">{`${
              data.songs.length || 0
            } Songs | ${data.favorite || 0} Favorites`}</div>
          </div>
        )}
        {isEvent(data) && (
          <div className="sectionSlider_card_content">
            <div className="card_subtitle mb8">
              <div className="card_subtitle-icon">
                <RiMapPinFill />
              </div>
              {data.place}
            </div>
            <div className="card_title">{data.name}</div>
            <div className="card_action">
              <div className="card_subtitle">{`participants ${data.participants}+`}</div>
              <button className="card_btn">Join Event</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionSlider;
