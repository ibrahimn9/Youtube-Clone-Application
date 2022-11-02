import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Stack} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import  Videos  from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const [ videoDetail, setVideoDetail ] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]));
  },[id]);

  if (!videoDetail?.snippet) return 'loading...';

  console.log(videoDetail);

  const { snippet: { title, channelTitle }, statistics: { viewCount, likeCount} } = videoDetail;

  return (
    <Box minHeight='95vh'>
      <Box sx={{ width: '100%', position: 'sticky', top: '86px'}}>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
          className='react-player' controls />
        <Typography color='#FFF' variant='h5' frontWeight='bold' p={2}>
          {title}
        </Typography>
        <Stack direction='row' justifyContent='space-between' sx={{ color: '#FFF'}} py={1} px={2}>
          <Typography variant={{ sm: 'subtitle1', md: 'h6'}} color='#FFF'>
            {channelTitle}
            <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}} />
          </Typography>
          <Stack direction='row' gap='20px' alignItems='center'>
            <Typography variant='body1' sx={{ opacity: '0.7'}}>
              {parseInt(viewCount).toLocaleString()} views
            </Typography>
            <Typography variant='body1' sx={{ opacity: '0.7'}}>
            {parseInt(likeCount).toLocaleString()} likes
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )

}

export default VideoDetail