// Code YouTubeDebugger Component Here
import React from 'react'
class YouTubeDebugger extends React.Component{
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video:{
                    resolution: '1080p'
                }
            }
        }
    }

    bitrateClick = ()=>{
        // this.state.settings.bitrate = 12
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resolutionClick = ()=>{
        this.setState({
            settings:{
                ...this.state.settings,
                video:{
                ...this.state.settings.video,
                resolution: '720p'
                }
            }
        })
    }

    render(){
        return (
            <div>
            <button className='bitrate' onClick = {this.bitrateClick}>Change Bitrate</button>
            <button className='resolution' onClick = {this.resolutionClick}>Change Resolution</button>
            </div>
            )
        }

}
export default YouTubeDebugger