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
                <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap" rel="stylesheet"></link>
                <link href="https://unpkg.com/nprogress@0.2.0/nprogress.css" rel="stylesheet" />
                <title>{ title }</title>
            </Head>

            <header className="p-3 md:p-5 bg-color-main mb-3 sticky top-0 z-50">
                <h1 className="inline-block text-xl md:text-3xl font-bold bg-white text-color-main transition-colors duration-100 ease-in hover:border hover:border-b-2 hover:border-white"> <Link href="/" ><a className="py-2 px-4">Podcasts</a></Link></h1>
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

                h1:hover {
                    background-color: var(--main-color);
                    color: white;
                }
            `}</style>

            { children }

        </main>
    }
}