import React, { PureComponent } from "react";
import { URL } from "../serverUrl";
import poster from '../Images/poster.jpg'
import { ImHeartBroken, ImHeart } from 'react-icons/im'
export class Home extends PureComponent {
  componentDidMount() {
    fetch(`${URL}api/video/${this.props.match.params.id}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => this.setState({ video: res[0] })).then(() => setTimeout(() => {
        fetch(`${URL}api/viewsUpdate/${this.state.video._id}`, {
          method: "post",
        })
      },1000))
  }
  state = {
    video: [],
  };
  LikeAdded = () => {
    console.log('like');
  }
  UnlikeAdded = () => {
   console.log('un-like'); 
  }
  render() {
    const { Title, Des, filePath, UploaderName, UploadDetails, Likes, Views, UnLike } = this.state.video;
    return <div>
      <div className='videoPlayer'>
        <video poster={poster} style={{ width: '100%' }} src={`${URL}${filePath}`} controls ></video>
        <div className='videoDetails'>
          <p>{UploadDetails}</p>
          <p>Video uploaded by : {UploaderName}</p>
        </div>
        <div style={{display:"flex"}}>
          <svg style={{ margin:"3px 10px 0px 20px",height:"20px",color:"#317c34"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          
        <p style={{fontWeight:"600",color:"#317c34"}}>{Views}</p>
</div>
        <p className='videoTitle'>{Title}</p>
        <p className='videoDes'>{Des}</p>
        <div style={{ height: "30px" }}></div>
        <div className='UpDownVote'>
          <div onClick={this.LikeAdded}><p style={{ fontSize: "15px", marginRight: "10px" }}>{Likes}</p><ImHeart /></div>
          <div onClick={this.UnlikeAdded}><p style={{ fontSize: "15px", marginRight: "10px" }}>{UnLike}</p><ImHeartBroken /></div>
        </div>
      </div>
    </div>;
  }
}

export default Home;
