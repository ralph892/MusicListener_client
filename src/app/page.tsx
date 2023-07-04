"use client";
import { Sidebar } from "@/components/Sidebar";
import { PageContent } from "@/components/PageContent";
import { SearchBar } from "@/components/SearchBar";
import React from "react";

export default function Home() {
  return (
    <div className="wrapper">
      <Sidebar />
      <SearchBar />
      <PageContent />
    </div>
  );
}
