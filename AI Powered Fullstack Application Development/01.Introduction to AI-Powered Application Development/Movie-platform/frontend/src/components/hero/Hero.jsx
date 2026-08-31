import { useEffect, useState } from 'react'
import { movieInstance } from '../../Utility/MovieInstance.js'
import requests from '../../Utility/requestUrls.js'

import logo from "../../assets/images/logo.png";
import { FiPlay, FiInfo } from "react-icons/fi";

function Hero() {
  const BANNER_BASE= "https://image.tmdb.org/t/p/original/"
  const [bannerImage, setBannerImage] = useState({});

  useEffect(()=>{
        async function fetchBannerImage() {
            const request = await movieInstance.get(requests.fetchNetflixOriginals)

            setBannerImage(
                request.data.results[Math.floor(Math.random()*request.data.results.length)]
            )
        }
        fetchBannerImage()
    },[])

    function truncate(str,n) {
        return str?.length>n ?  str.substr(0,n-1) + "..." : str;
    }
  return (
    <>
      <section
        className="relative min-h-full bg-cover bg-center bg-no-repeat"
        style={
            {
                backgroundSize: "cover",
                backgroundImage: `url("${BANNER_BASE}${bannerImage.backdrop_path}")`
            }
        }
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero content */}
        <div className="relative z-10 flex min-h-screen items-center pt-40">
          <div className="max-w-2xl px-6 md:px-12 lg:px-10">
            {/* Logo */}
            <img src={logo} alt="Netflix logo" className="w-32 md:w-40 mb-4" />

            {/* Title */}
            <h1 className="text-xl md:text-2xl lg:text-2xl font-bold text-white mb-3">
              {bannerImage?.original_name}
            </h1>

            {/* Description */}
            <p className="max-w-xl text-sm md:text-base lg:text-lg text-white leading-relaxed mb-7">
              {truncate(bannerImage?.overview,120)}
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="flex items-center gap-2 rounded-md bg-white px-6 py-2 font-semibold hover:bg-gray-400 transition">
                <FiPlay size={20}/>
                Play
              </button>

              <button className="flex items-center gap-2 rounded-md bg-white px-6 py-2 font-semibold hover:bg-gray-300 transition">
                <FiInfo size={20}/>
                My List
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
