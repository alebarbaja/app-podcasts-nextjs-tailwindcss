import Link from "next/link";

export default class ChannelGrid extends React.Component {
    render() {

        const { channels } = this.props;

        return <section aria-label="Lista de podcasts" className="my-8">
            <ul className="grid gap-8 list-podcasts">
            {
                channels.map((channel) => (
                    <li>
                        <Link href={`/channel?id=${channel.id} `} prefetch>
                            <a>
                                <div className="channel-img-container">
                                    <img src={channel.urls.logo_image.original} alt="" />
                                </div>
                                <h2 className="channel-title">{channel.title}</h2>
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