import { Link } from "../routes";
import slug from "../helpers/slug";

export default class ChannelGrid extends React.Component {
    render() {

        const { channels } = this.props;

        return <section aria-label="Lista de podcasts" className="my-6 px-4">
            <ul className="grid list-podcasts">
            {
                channels.map((channel) => (
                    <li className="podcast border-2 border-transparent p-2 transition-all duration-100 ease-in hover:border-current">
                        <Link route='channel' params={{ 
                            slug: slug(channel.title),
                            id: channel.id
                         }} >
                            <a className="flex flex-col items-center justify-between">
                                <img className="shadow-md" src={channel.urls.logo_image.original} alt="" />
                                <h2 className="inline-block text-xl mt-4 h-20 text-color-main font-bold">{channel.title}</h2>
                            </a>
                        </Link>
                    </li>
                ))
            }
            </ul>

            <style jsx>{`
                .list-podcasts {
                    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                }

                .podcast:hover,
                .podcast:focus {
                    border-color: var(--main-color);
                }
            `}</style>

        </section>
    }
}