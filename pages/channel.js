import Layout from "../components/Layout";
import ChannelView from "../components/ChannelView";
import PodcastPlayer from "../components/PodcastPlayer";
import Error from "../pages/_error";

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = { openEpisode: null }
    }

    static async getInitialProps({ query, res }) {

        try {

            const idChannel = query.id;
    
            const [reqChannel, audioClips] = await Promise.all([
                await fetch (`https://api.audioboom.com/channels/${idChannel}`),
                await fetch (`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
            ])
            
            const dataChannel = await reqChannel.json();
            const channel = dataChannel.body.channel;
        
            const dataAudio = await audioClips.json();
            const audioClip = dataAudio.body.audio_clips;

            if ( reqChannel.status >= 400 ) {
                res.statusCode = reqChannel.status;
                return { statusCode: reqChannel.status }
            }
        
            return { channel, audioClip, statusCode: 200 };

        } catch(error) {

            return { channel: null, audioClip: null, statusCode: 503 }
        }
    }

    openEpisode = (event, episode) => {
        event.preventDefault();
        this.setState({
            openEpisode: episode
        });
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';
    }

    closeEpisode = (event) => {
        event.preventDefault();
        this.setState({
            openEpisode: null
        });
        const body = document.querySelector('body');
        body.style.overflow = '';
    }

    render() {

        const { channel, audioClip, statusCode } = this.props;
        const { openEpisode } = this.state; 

        if ( statusCode !== 200 ) {
            return <Error statusCode={statusCode} />
        }

        return <Layout title={ channel.title } >

            { openEpisode &&
                <section className="fixed inset-0 w-full h-full overflow-y-auto z-50 font-bold bg-white pb-4" aria-label="Modal de episodio">
                    <PodcastPlayer clip = { openEpisode } onClose = { this.closeEpisode } />
                </section>
            }
        
            <ChannelView channel = { channel } audioClip = { audioClip } onClickEpisode = { this.openEpisode } />

        </Layout>
    }
}