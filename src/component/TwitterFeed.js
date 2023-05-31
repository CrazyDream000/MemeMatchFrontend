import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class TwitterFeed extends React.Component {
  constructor(props) {
    super(props);
    
    console.log(props.coinDetail);
    this.state = {
        coinDetail:props.coinDetail
    };
  }
  componentDidUpdate(prevProps) {
    if(prevProps.coinDetail !== this.props.coinDetail) {
        this.setState({coinDetail:this.props.coinDetail});
        
        console.log("updated",this.props.coinDetail);
    }
 }
  render() {    
    return (
        <div>
            <TwitterTimelineEmbed
                className="w-full"
                sourceType="profile"
                screenName={this.state.coinDetail}
                options={{height: 400}}
            />
        </div>
    );
  }
}

export default TwitterFeed;