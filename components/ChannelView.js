import { Link } from "../routes";
import slug from "../helpers/slug";


export default class ChannelView extends React.Component {
    render() {
        const { channel, audioClip, onClickEpisode } = this.props;

        return <article className="px-4">
            <h2 className="text-4xl text-center text-color-main font-bold border-b-2 border-current mt-4">{ channel.title }</h2>
            <p className="block text-lg text-center mt-1 mb-3 py-1 px-2"><span>{ channel.category.title }</span></p>

            { audioClip.length > 0 ? "" : <p className="text-xl text-color-main md:text-2xl text-center font-bold mt-32">🥺 <br /> Oops! it seems that there is no episodes!</p> }

            <section className="mt-12" aria-label="Episode list">
                <ul className="grid gap-2 lg:grid-cols-2 xl:grid-cols-4">
                {
                    audioClip.map( (clip) => (
                        <li key={clip.id} className="my-2 episode border-2 border-transparent p-1 transition-colors duration-100 ease-in hover:border-current">
                            <Link route='episode' params={{
                                slug: slug(clip.title),
                                id: clip.id
                            }}>
                                <a className="flex items-center"
                                    onClick={ (event) => onClickEpisode(event, clip) }>
                                    <picture className="mr-4 flex-shrink-0">
                                        <img className="object-cover h-full w-full" src={clip.urls.image} alt="" />
                                    </picture>
                                    <div>
                                        <time className="text-color-main opacity-50 font-bold" dateTime={ clip.recorded_at.toString().slice(0, 10) }>{ clip.recorded_at.toString().slice(0, 10) } / { Math.ceil(clip.duration / 60) } min</time>
                                        <h2 className="title text-xl mt-1 text-color-main font-bold">{  clip.title }</h2>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    ) )
                }
                </ul>
            </section>

            <style jsx>{`
                .episode:hover,
                .episode:focus {
                    border-color: var(--main-color);
                }

                .episode picture {
                    width: 100px;
                    height: 100px;
                }

                .episode .title {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>

        </article>

    }
}