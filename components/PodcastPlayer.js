import Link from "next/link";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

export default class PodcasPlayer extends React.Component {
    render() {
        const { onClose, clip } = this.props;

        return (
            <article className="flex flex-col md:flex-row hero-player-container">
                <section className="relative hero-player md:w-2/4" aria-label="Hero player">
                    <nav className="absolute border-2 border-current bg-white py-1 px-2 uppercase hover:text-white hover:bg-black hover:border-transparent transition-colors duration-100 ease-in">
                        {
                            onClose ?
                                <Link href="">
                                    <a  className="p-2" onClick={ onClose }>✕ Close </a>
                                </Link>
                            :
                                <Link href={`/channel?id=${clip.channel.id}`}>
                                    <a className="p-2">✕ Close</a>
                                </Link>
                        }
                    </nav>

                    <picture>
                        <img className="object-cover w-full h-full" src={`${clip.urls.image || clip.channel.urls.logo_image.original}`} alt="" />
                    </picture>
                </section>

                <section className="mt-4 px-4 md:p-8 flex-shrink-0 md:w-2/4" aria-label="Episode info and playback controls">
                    <time className="text-color-main opacity-50 font-bold" dateTime={ clip.recorded_at.toString().slice(0, 10) }>{ clip.recorded_at.toString().slice(0, 10) } / { Math.ceil(clip.duration / 60) } min</time>
                    <audio className="w-full my-6" controls _autoPlay={true}>
                        <source src={ clip.urls.high_mp3 } type="audio/mpeg" />
                    </audio>
                    <h3 className="text-2xl font-bold text-color-main mt-6 mb-1">{ clip.title }</h3>
                    <h6 className="text-lg text-color-main opacity-50 border-t-2 pt-2">{ clip.channel.title }</h6>
                </section>

                <style jsx>{`
                    .hero-player nav {
                        right: 0.75rem;
                        top: 0.75rem;
                    }

                    .hero-player picture {
                        max-height: 75vh;
                    }

                    @media screen and (min-width: 768px) {
                        .hero-player-container {
                            max-height: 500px;
                        }
                    }

                    @media screen and (min-width: 1280px) {
                        .hero-player-container {
                            max-height: 75%;
                        }
                    }

                    @media screen and (min-width: 1920px) {
                        .hero-player-container {
                            max-height: 100%;
                        }
                    }
                `}</style>


            </article>
        )
    }
}