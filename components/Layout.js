import Head from "next/head";
import Link from "next/link";

export default class Layout extends React.Component {

    render() {

        const { children, title } = this.props;


        return <main className="container mx-auto ">

            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
                <title>{ title }</title>
            </Head>

            <header className="p-5 bg-orange-400 text-center mb-3">
                <h2 className="text-3xl"> <Link href="/" prefetch><a>Podcasts</a></Link></h2>
            </header>

            { children }

        </main>
    }
}