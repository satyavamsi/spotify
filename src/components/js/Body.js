import React from 'react'

import '../css/Body.css';

import Header from './Header';
import SongRow from './SongRow'
import { useDataLayerValue } from '../../helpers/DataLayer';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Body() {

    const [{ featured, tracks }, dispatch] = useDataLayerValue();

    console.log("here >>>>>", tracks);

    return (
        <div className="body">
            <Header />
            <div className="body__info">
                <img src={featured?.playlists?.items?.[0]?.images?.[0].url} alt={featured?.message} />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{featured?.message}</h2>
                    <p>{featured?.playlists?.items?.[0]?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                <div className="body__tracks">
                    {tracks?.items?.map(item => (
                        <SongRow track={item.track} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Body
