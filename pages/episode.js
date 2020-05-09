import "isomorphic-fetch";
import Layout from "../components/Layout";
import EpisodeView from "../components/EpisodeView";
import Error from "../pages/_error";

export default class extends React.Component {

    static async getInitialProps({ query, res }) {

        try {

            const idEpisode = query.id;
    
            const reqEpisode = await fetch (`https://api.audioboom.com/audio_clips/${idEpisode}.mp3`);
            const dataEpisode = await reqEpisode.json();
            const episode = dataEpisode.body.audio_clip;
    
            if ( reqEpisode.status >= 400 ) {
                res.status = reqEpisode.statusCode;
                return { statusCode: reqEpisode.status }
            }
    
            return { episode, statusCode: 200 };

        } catch(error) {

            return { episode: null, statusCode: 503 }
        }

    }

    render() {
        const { episode, statusCode } = this.props;

        if ( statusCode !== 200 ) {
            return <Error statusCode={statusCode } />
        }

        return <Layout title={episode.title} >

            <EpisodeView episode = { episode } />

        </Layout>

    }
}