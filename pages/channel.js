import Layout from "../components/Layout";
import ChannelView from "../components/ChannelView";
import Error from "../pages/_error";

export default class extends React.Component {

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


    render() {

        const { channel, audioClip, statusCode } = this.props;

        if ( statusCode !== 200 ) {
            return <Error statusCode={statusCode} />
        }

        return <Layout title={ channel.title } >
        
            <ChannelView channel = { channel } audioClip = { audioClip } />

        </Layout>
    }
}