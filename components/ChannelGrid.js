import { Link } from "../routes";
import slug from "../helpers/slug";

export default class ChannelGrid extends React.Component {
    render() {

        const { channels } = this.props;

        return <section aria-label="Lista de podcasts" className="my-8">
            <ul className="grid gap-8 list-podcasts">
            {
                channels.map((channel) => (
                    <li>
                        <Link route='channel' params={{ 
                            slug: slug(channel.title),
                            id: channel.id
                         }} >
                            <a>
                                <div>
                                    <img src={channel.urls.logo_image.original} alt="" />
                                </div>
                                <h2 className="text-lg mt-2">{channel.title}</h2>
                            </a>
                        </Link>
                    </li>
                ))
            }
            </ul>

            <style jsx>{`
                .list-podcasts {
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                }
            `}</style>

        </section>
    }
}