import React from 'react'
import {Card, CardContent, CardMedia, Typography} from '@mui/material'
import { Link } from 'react-router-dom'
import { demoVideoUrl, demoVideoTitle, demoThumbnailUrl, demoChannelUrl, demoChannelTitle} from '../utils/constante'
import { CheckCircle } from '@mui/icons-material'


const VideoCard = ({video: {id: {videoId}, snippet}}) => {
    
  return (
       <Card sx={{width: {md: '320px', xs: '100%', sm: '358px'}, boxShadow: 'none', borderRadius: '0'}}>
        <Link to={videoId ? `/video/${videoId}`: {demoVideoUrl}}>
            <CardMedia
              image={snippet?.thumbnails?.high?.url}
              alt={snippet?.title}
              sx={{ width: {xs: '100%', sm: '358px'}, height: 180}}
            />
            <CardContent sx={{backgroundColor: '#000', height: '90px'}}>
              <Link to={videoId ? `/video/${videoId}`: {demoVideoUrl}}>
                 <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
                  {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                 </Typography>
              </Link>
              <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
                <Typography variant='subtitle2' color='gray' fontWeight='bold'>
                  {snippet?.channelTitle || demoChannelTitle}
                  <CheckCircle sx={{ color: 'gray', fontSize: 12, ml: '15px'}} />
                </Typography>
              </Link>
            </CardContent>
        </Link>
       </Card>
  )
}

export default VideoCard