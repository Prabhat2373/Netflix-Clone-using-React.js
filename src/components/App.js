import "../App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Banner from "./Banner";

function App() {
  return (
    <>
      <Navbar logo="../netflix.png"></Navbar>
      <Hero></Hero>
      <Banner
        position="right"
        padPos="pr-4"
        h1="Enjoy on your TV."
        para="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        imgSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        video="video"
        videoSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
        imgId="tvimg"
      />

      <Banner
        position="left"
        padPos="pl-4"
        h1="Download your shows to watch offline."
        para="Save your favourites easily and always have something to watch."
        imgSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        video="video1"
        // videoSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
        imgId="downImg"
      />

      <Banner
        position="right"
        padPos="pr-4"
        h1="Watch everywhere.."
        para="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        imgSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
        video="video2"
        videoSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
        imgId="DeviceImg"
        vidCardId="videoCardId"
      />

      <Banner
        position="left"
        padPos="pl-4"
        h1="Create profiles for children."
        para="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        imgSrc="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
        
        // videoSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
        imgId="childImg"
        // vidCardId="videoCardId"
      />
    </>
  );
}

export default App;
