import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {
    //Mapear y recorrer lista de videos para generar html
    const videoItems = videos.map((video) => {
                return (
                    <VideoListItem
                        onVideoSelect={onVideoSelect} 
                        key={video.etag}  
                        video={video} />
                ); 
            });
    
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;