//Importando los paquetes de react
import _ from 'lodash'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Importando paquete de api de youtube
import YTSearch from 'youtube-api-search';

//Importando componentes
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//API_KEY api de youtube
const API_KEY = 'AIzaSyBrWJveDrnSEmTI1WYzkylzPY_msWNoTXQ';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null 
        };
        
        this.videoSearch('c#');
    }
    
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            //this.setState({ videos });//Cuando el nombre de las keys son iguales se puede simplificar la asignacion
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
        });
    }
      
    render() {
        const videoSearch = _.debounce((term)=> { this.videoSearch(term) }, 300);
        return  (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo : selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );        
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));