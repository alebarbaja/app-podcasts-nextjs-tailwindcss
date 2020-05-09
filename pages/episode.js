import "isomorphic-fetch";
import Layout from "../components/Layout";
import EpisodeView from "../components/EpisodeView";

export default class extends React.Component {

    static async getInitialProps({ query }) {
        const idEpisode = query.id;

        const reqEpisode = await fetch (`https://api.audioboom.com/audio_clips/${idEpisode}.mp3`);
        const dataEpisode = await reqEpisode.json();
        const episode = dataEpisode.body.audio_clip;

        return { episode };
    }

    render() {
        const { episode } = this.props;

        return <Layout title={ episode.title }>

            <EpisodeView episode = { episode } />

        </Layout>

    }
}