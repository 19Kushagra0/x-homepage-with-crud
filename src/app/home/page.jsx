import React from "react";
import "@/app/home/page.css";
import Header from "@/app/home/myCompoments/1_Header/Header";
import Main from "@/app/home/myCompoments/2_Main/Main";

export default function page() {
  return (
    <div className="home">
      <Header />
      <Main />
    </div>
  );
}
