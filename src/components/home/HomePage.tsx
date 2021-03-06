import React from 'react';
import {connect} from "react-redux";
import './home.scss'
import {toggleListMenu, closeList} from '../../store/player/player.actions';
import { Nav, INavLink, INavStyles, INavLinkGroup} from 'office-ui-fabric-react/lib/Nav';
import AudioPlayer from './../audioPlayer/AudioPlayer';
import * as protoLoader from '@grpc/proto-loader';
import { HelloRequest , HelloResponse } from "./../../analyzerpb/proto/analyzer_pb"
import { HelloServiceClient} from "./../../analyzerpb/proto/AnalyzerServiceClientPb"
// import * as path from 'path';
// import * as url from 'url';
import * as grpc from '@grpc/grpc-js';

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 'auto',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};


interface IHomePageState {
	hideNav : boolean;
	key : string;



}
interface IHomePageProps {
	toggleListMenu : any;
	closeList : any;
	key: string|null;
	trackList : any[];
}






class HomePage extends React.Component<IHomePageProps, IHomePageState>{
	constructor(props: IHomePageProps){
	super(props)
		this.state = {
			hideNav : false,
			key : null,

		}
	}

	// Sets up the audio context
	public _setAudioContext = () => {
		let context;
	    // @ts-ignore
	    let AudioContext : any = window.AudioContext || window.webkitAudioContext;
	    if (AudioContext) {
	        context = new AudioContext();
	      }

	    return context

	}


  public componentDidMount = () => {


    const client = new HelloServiceClient('http://localhost:8000')
    var request = new HelloRequest();
    request.setGreeting('heee')
    client.sayHello(request,{}, function(err, response) {
      console.log(response)
      console.log('Greeting:', response.reply);
    });



  //  console.log(hello)


  }


	public _onLinkClick = (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
		switch(item['key']){
			case 'Add Tracks':
				this.props.toggleListMenu()
				break;
			default:
				console.log('asdas')
		}
		this.setState({
			key : item['key']
		})
	}
	public render(){
		const navLinkGroups: INavLink[] = [
			  {
			    links: [

			      {
			        name: 'Add Tracks',
			       	onClick : this._onLinkClick,
			        key: 'Add Tracks',
			      },
			      {
			        name: 'Create Playlist',
			       	onClick :  this._onLinkClick,
			        key: 'Create Playlist'
			      },
			      {
			        name: 'Connect Input',
			        onClick : this._onLinkClick,
			        key: 'Input',

			      },
			      {
			        name: 'Connect SoundCloud',
			        onClick :  this._onLinkClick,
			        key: 'SoundCloud',

			      },
			    ],
			  },
			];

		return(
				<div className='home-container'>
					 <Nav
				      onLinkClick={this._onLinkClick}
				      selectedKey={this.state.key}
				      ariaLabel="Nav basic example"
				      styles={navStyles}
				      groups={navLinkGroups}
				    />
				    <div>
					   {this.props.trackList.length > 0?

					   	<AudioPlayer  isLight={false} audioContext={this._setAudioContext()} audioFiles={this.props.trackList} />
					   	:
					   	null
					   }
					 </div>
				</div>
				);

	}
}

const mapStateToProps = (state: any) => ({
	trackList : state.musicPlayer.trackList
})

const mapDispatchToProps = {
	toggleListMenu,
	closeList
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
