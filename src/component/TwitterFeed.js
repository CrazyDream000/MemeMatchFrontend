import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import {BounceLoader} from 'react-spinners'

class TwitterFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        coinDetail:props.coinDetail,
        isPC : props.isPC,
        isLoad: true
    };
  }
  componentDidUpdate(prevProps) {
    if(prevProps.coinDetail !== this.props.coinDetail) {
        this.setState({coinDetail:this.props.coinDetail});
    }
  }

  loaded () {
    console.log("Loaded");
    this.setState({isLoad:false});
  }

  render() {    
    return (
        <div className=' w-full pt-4'>
          <TwitterTimelineEmbed  className={this.state.isLoad!=true?"block":"hidden"}
            sourceType="profile"
            screenName={this.state.coinDetail}
            options={{height: 400, tweetLimit:10}}
            onLoad={this.loaded}/>
          <div className={this.state.isLoad!=true?"hidden":"block"}>
            <div className='p-2'>
              <div className='w-full rounded-t-xl bg-white border-[1px] border-b-0 border-b-gray-400 flex flex-col justify-cente items-start font-bold text-xl px-4 py-2'>Twitter Feed</div>
              <div className='h-40 md:h-80 w-full rounded-b-xl bg-white border-[1px] border-b-gray-400 flex flex-col justify-center items-center'><BounceLoader color="#6D28D9"/> Loading</div>
            </div>
          </div>
        </div>
    );
  }
}

export default TwitterFeed;