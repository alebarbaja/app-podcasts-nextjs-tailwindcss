import "isomorphic-fetch";
import Layout from "../components/Layout";
import ChannelGrid from "../components/ChannelGrid";
import Error from "../pages/_error";

export default class extends React.Component {

    static async getInitialProps({ res }) {

        try {

            let req = await fetch ('https://api.audioboom.com/channels/recommended');
            let { body: channels } = await req.json();

            if ( req.status >= 400 ) {
                res.statusCode = req.status;
                return { statusCode: req.status }
            }

            return { channels, statusCode: 200 }

        } catch(error) {
            return { channels: null, statusCode: 503 }
        }
    }

    render() {
        const { channels, statusCode } = this.props;

        if ( statusCode !== 200 ) {
            return <Error statusCode={statusCode} />
        }

        return <Layout title="Podcasts">

            <ChannelGrid channels={ channels} />            

        </Layout>

    }

}