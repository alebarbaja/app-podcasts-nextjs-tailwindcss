import Link from "next/link";
import Layout from "../components/Layout";
import ChannelView from "../components/ChannelView";

export default class extends React.Component {

    static async getInitialProps({ query }) {
        const idChannel = query.id;

        const [reqChannel, audioClips] = await Promise.all([
            await fetch (`https://api.audioboom.com/channels/${idChannel}`),
            await fetch (`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
        ])
        
        const dataChannel = await reqChannel.json();
        const channel = dataChannel.body.channel;
    
        const dataAudio = await audioClips.json();
        const audioClip = dataAudio.body.audio_clips;
    
        return { channel, audioClip };
    }


    render() {

        const { channel, audioClip } = this.props;

        return <Layout title={ channel.title } >
        
            <ChannelView channel = { channel } audioClip = { audioClip } />

        </Layout>
    }
}