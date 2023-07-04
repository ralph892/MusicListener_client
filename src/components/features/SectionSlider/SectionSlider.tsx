"use client";
import React from "react";
import Image from "next/image";
import {
  RiHeart3Fill,
  RiVipCrownFill,
  RiPlayFill,
  RiMore2Fill,
} from "react-icons/ri";

import { IArtist, IMusic, isMusic } from "@/api/apiHandle";
import { Option_Tooltip } from "../Option_Tooltip";

type Props = {
  data: IMusic | IArtist;
  type?: string;
};

const SectionSlider = ({ data, type }: Props) => {
  const [isRender, setIsRender] = React.useState(false);

  const classNameImg =
    type !== "Artist"
      ? "sectionSlider_img_wrapper"
      : "sectionSlider_img_wrapper img-circle";

  const classNameTitle =
    type !== "Artist"
      ? "sectionSlider_title_wrapper"
      : "sectionSlider_title_wrapper title-center";

  const classNameHeading =
    type !== "Artist"
      ? "sectionSlider_heading heading-hover"
      : "sectionSlider_heading";

  const classNameBtnPlay =
    type !== "Artist"
      ? "sectionSlider_btn-play btn-hover"
      : "sectionSlider_btn-play";

  const classNameBtnMore =
    type !== "Artist"
      ? "sectionSlider_heading-icon icon-more btn-hover"
      : "sectionSlider_heading-icon icon-more";

  const handleRender = () => {
    setIsRender(true);
  };

  const handleUnRender = () => {
    setIsRender(false);
  };

  return (
    <div className="sectionSlider_wrapper">
      <div className="sectionSlider_container" onMouseLeave={handleUnRender}>
        <button className={classNameBtnPlay}>
          <RiPlayFill />
        </button>
        <div className={classNameHeading}>
          {data.type.includes("favorite") && (
            <span className="badge-icon bg-danger">
              <RiHeart3Fill />
            </span>
          )}
          {data.type.includes("top chart") && (
            <span className="badge-icon bg-warning">
              <RiVipCrownFill />
            </span>
          )}
          <button className={classNameBtnMore} onClick={handleRender}>
            <RiMore2Fill />
            {isRender && <Option_Tooltip />}
          </button>
        </div>
        <div className={classNameImg}>
          <Image
            alt="avt_topChart"
            src={data.image}
            width={165}
            height={165}
            className="sectionSlider_img"
          ></Image>
        </div>
        <div className={classNameTitle}>
          <div className="sectionSlider_title">{data.name}</div>
          <div className="sectionSlider_subtitle">
            {isMusic(data) ? data.singer : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSlider;
