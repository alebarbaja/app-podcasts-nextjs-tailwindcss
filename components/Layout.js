import Head from "next/head";
import { Link } from "../routes";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = (url) => {
    NProgress.start();
}
Router.onRouteChangeComplete = () => { NProgress.done() }
Router.onRouteChangeError = () => { NProgress.done() }

export default class Layout extends React.Component {

    render() {

        const { children, title } = this.props;


        return <main className="container mx-auto min-h-full">

            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
                <link href="https://unpkg.com/nprogress@0.2.0/nprogress.css" rel="stylesheet" />
                <title>{ title }</title>
            </Head>

            <header className="p-5 bg-orange-400 text-center mb-3">
                <h2 className="text-3xl"> <Link href="/" ><a>Podcasts</a></Link></h2>
            </header>

            { children }

        </main>
    }
}