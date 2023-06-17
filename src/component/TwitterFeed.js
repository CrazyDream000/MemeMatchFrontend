import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class TwitterFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        coinDetail:props.coinDetail,
        isPC : props.isPC
    };
  }
  componentDidUpdate(prevProps) {
    if(prevProps.coinDetail !== this.props.coinDetail) {
        this.setState({coinDetail:this.props.coinDetail});
    }
 }
  render() {    
    return (
        <div className=' w-full pt-4'>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={this.state.coinDetail}
              options={{height: 400, tweetLimit:10}}/>
        </div>
    );
  }
}

export default TwitterFeed;