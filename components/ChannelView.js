import { Link } from "../routes";
import slug from "../helpers/slug";


export default class ChannelView extends React.Component {
    render() {
        const { channel, audioClip, onClickEpisode } = this.props;

        return <article>
            <h1 className="text-3xl mb-3">Este podcast se llama <span className="font-bold"> { channel.title } </span></h1>
            <p className="text-xl my-3">Está dentro de la categoría <span className="font-bold"> { channel.category.title } </span></p>

            <section aria-label="Lista de episodios">
                <h2 className="text-lg my-2 italic">Sus últimos episodios</h2>
                {
                    audioClip.map( (clip) => (
                        <ul>
                            <li className="my-2">
                                {/* <Link href={`/episode?id=${clip.id}`}> */}
                                <Link route='episode' params={{
                                    slug: slug(clip.title),
                                    id: clip.id
                                }}>
                                    <a className="hover:font-bold"
                                       onClick={ (event) => onClickEpisode(event, clip) }>
                                        {  clip.title }
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    ) )
                }
            </section>

        </article>
    }
}