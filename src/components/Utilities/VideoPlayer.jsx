"use client";

import { X } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({ youtubeID }) {
   const [isOpen, setIsOpen] = useState(true);

   const handleCloseButton = () => {
      setIsOpen((prevState) => !prevState);
   };

   const option = {
      width: "300",
      height: "250",
   };

   const Player = () => {
      return (
         <div className="fixed bottom-2 right-2">
            <button className="float-right p-2" onClick={handleCloseButton}>
               <X size={24} weight="bold" />
            </button>
            <YouTube videoId={youtubeID} onReady={(event) => event.target.pauseVideo()} opts={option} />
         </div>
      );
   };

   return isOpen ? <Player /> : null;
}
