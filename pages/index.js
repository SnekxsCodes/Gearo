import Head from "next/head";
import { Inter } from "@next/font/google";
import { Montserrat } from "@next/font/google";
import Header from "./components/header";
import * as React from "react";
import PostButton from "./components/postButton";

const maintenance = true;

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  if (maintenance) {
    return (
      <>
        <video
          autoPlay
          loop
          muted
          src="https://res.cloudinary.com/dzgm7ugq6/video/upload/v1676331065/background_online-video-cutter.com_xgaytd.mp4"
          type="video/mp4"
          className="backgroundVideo"
        />
        <div className="maintenance">
          <h1>Be Right Back.</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="postButton">
          <PostButton />
        </div>
      </>
    );
  }
}
