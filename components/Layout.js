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


        return <main className="min-h-full pb-4">

            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap" rel="stylesheet"></link>
                <link href="https://unpkg.com/nprogress@0.2.0/nprogress.css" rel="stylesheet" />
                <title>{ title }</title>
            </Head>

            <header className="p-3 md:p-5 bg-color-main mb-3 sticky top-0 z-50">
                <h2 className="inline-block py-2 px-4 text-xl md:text-3xl font-bold bg-white text-color-main"> <Link href="/" ><a>Podcasts</a></Link></h2>
            </header>

            <style jsx global>{`
                :root {
                    --main-color: #3E2AB2;
                }

                .text-color-main {
                    color: var(--main-color);
                }

                .bg-color-main {
                    background-color: var(--main-color);
                }

                body {
                    font-family: 'PT Sans', sans-serif;
                }
            `}</style>

            { children }

        </main>
    }
}