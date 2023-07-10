"use client";
import React from "react";

import { Sidebar } from "@/components/Sidebar";
import PageContent from "@/components/PageContent/PageContent";
import { SearchBar } from "@/components/SearchBar";
import { Player } from "@/components/Player";
import { IMusic } from "@/api/apiHandle";

export default function Home() {
  const [music, setMusic] = React.useState<IMusic>();

  const handleMusicsPlayer = (data: IMusic) => {
    setMusic(data);
  };

  return (
    <div className="wrapper">
      <Sidebar />
      <SearchBar />
      <PageContent passedFcMusics={handleMusicsPlayer} />
      <Player songs={music} />
    </div>
  );
}
