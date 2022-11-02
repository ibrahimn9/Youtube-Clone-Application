import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard } from './'


const Videos = ({videos}) => {
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={2} sx={{mt: 5}}>
      {videos.map((item,idx) => (
        <Box key={idx} className='video-card'>
            {item.id.videoId && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos