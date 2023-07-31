import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <>
    
    <div className='w-100 h-120'>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div  >
          <img 
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
           />
        </div>
      </Link>
    </div>



     {/* <div className=''  >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <div className=''>
        <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} className='h-180 w-358' />       
        </div> 
      </Link>
      <div className='bg-black h-106' >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
      </div>
    </div>  */}


{/* 
    <div className='grid grid-cols-4 gap-4 my-4 shadow-none rounded-0'  >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <div className='w-[80] sm:w-full mx-auto flex flex-col '>
        <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} className='h-180 xs:w-[100px] sm:w-[358px] md:w-[400px]' />       
        </div>  */}

  {/* <Card sx={{ width: { xs: '300px', sm: '358px', md: '400px'}, boxShadow: "none", borderRadius: 0 }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '300px', sm: '358px', md: '400px'}, height: 180 }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card> */}







  {/* <Card sx={{ width: { xs: '300px', sm: '358px', md: '400px'}, boxShadow: "none", borderRadius: 0 }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '300px', sm: '358px', md: '400px'}, height: 180 }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card> */}

   {/* <div className='w-[80] sm:w-full mx-auto flex flex-col gap-2 justify-center items-center p-4 rounded-xl col-span-4 md:col-span-2 lg:col-span-1 bg-gradient-to-r from-slate-950 to yellow-500'>

      </div> */}

  </>
);

export default VideoCard


