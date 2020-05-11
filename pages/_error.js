import Layout from "../components/Layout";
import { Link } from "../routes";

export default class Error extends React.Component {
    
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        const { statusCode } = this.props;

        return (
            <Layout title="❌ Oh-oh">
                <article className="text-center mt-56">
                    {
                        statusCode === 404 ?
                            <div>
                                <h1 className="text-3xl mb-16">Esta página no existe</h1>
                                <p className="text-2xl text-color-main"><Link href="/"><a className="underline">Volver a la Home</a></Link></p>
                            </div>
                        :
                            <h1 className="text-3xl">Ha habido un error</h1>
                    }
                </article>
            </Layout>
        )
    }
}