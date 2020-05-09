import Layout from "../components/Layout";
import Link from "next/link";

export default class Error extends React.Component {
    
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        const { statusCode } = this.props;

        return (
            <Layout title="❌ Oh-oh">
                <article className="text-center mt-64">
                    {
                        statusCode === 404 ?
                            <div>
                                <h1 className="text-4xl mb-16">Esta página no existe</h1>
                                <p className="text-2xl text-orange-700 hover:text-orange-900"><Link href="/"><a className="underline">Volver a la Home</a></Link></p>
                            </div>
                        :
                            <h1 className="text-4xl">Ha habido un error</h1>
                    }
                </article>
            </Layout>
        )
    }
}