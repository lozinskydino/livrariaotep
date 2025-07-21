import React from "react";

interface VideoPlayerProps {
  src: string;
  width?: number | string;
  height?: number | string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  src, 
  width = 281, 
  height = 160 
}) => {
  return (
    <iframe 
      src={src} 
      width={width} 
      height={height} 
      allowFullScreen
      className="rounded-[16px]"
    />
  );
};

export default VideoPlayer;
