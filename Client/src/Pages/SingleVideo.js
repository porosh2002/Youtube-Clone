import React, { PureComponent } from "react";
import { URL } from "../serverUrl";
import poster from '../Images/poster.jpg'
import {ImHeartBroken,ImHeart} from 'react-icons/im'
export class Home extends PureComponent {
  componentDidMount() {
    fetch(`${URL}api/video/${this.props.match.params.id}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => this.setState({ video: res[0]}));
  }
  state = {
    video:[],
  };
  render() {
      const {Title,Des,filePath} = this.state.video;
    return<div>
    <div className='videoPlayer'>
    <video poster={poster} style={{ width: '100%' }} src={`${URL}${filePath}`} controls></video>
    <p className='videoTitle'>{Title}</p>
    <p className='videoDes'>{Des}</p>
    <div style={{height:"30px"}}></div>
    <div className='UpDownVote'>
      <div><p style={{fontSize:"15px",marginRight:"10px"}}>7K</p><ImHeart /></div>
      <div><p style={{fontSize:"15px",marginRight:"10px"}}>100</p><ImHeartBroken /></div>
    </div>
    </div>
    </div>;
  }
}

export default Home;
