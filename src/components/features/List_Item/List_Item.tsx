import { IAlbum, IMusic } from "@/api/apiHandle";
import Image from "next/image";
import React from "react";
import { RiHeartLine, RiMoreFill, RiVipCrownFill } from "react-icons/ri";

type Props = {
  data: IAlbum | IMusic;
  num?: boolean;
  small?: boolean;
};

const List_Item = ({ data, num, small }: Props) => {
  const myProps = {
    num: num ? "num" : "",
    small: small ? "small" : "",
  };

  return (
    <div className={`list_item ${myProps.num} ${myProps.small}`}>
      <a className="list_item_image" href="#">
        <Image
          src={data.image}
          alt="album_avt"
          width={64}
          height={64}
          className={`item_image ${myProps.small}`}
        />
      </a>
      <div className="list_item_content">
        <a className="item_content_title">{data.name}</a>
        <a className="item_content_subtitle">{data.singer}</a>
      </div>
      <div className="list_item_option">
        <div className="item_option_icon">
          {data.type.includes("top chart") && (
            <span className="badge-icon bg-warning">
              <RiVipCrownFill />
            </span>
          )}
        </div>
        <button className="item_option_btn">
          <RiHeartLine />
        </button>
        <button className="item_option_btn">
          <RiMoreFill />
        </button>
      </div>
    </div>
  );
};

export default List_Item;
