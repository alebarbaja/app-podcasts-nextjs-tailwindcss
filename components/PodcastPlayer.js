import Link from "next/link";

export default class PodcasPlayer extends React.Component {
    render() {
        const { onClose, clip } = this.props;

        return (
            <article>
                <nav>
                    {
                        onClose ?
                            <Link href="">
                                <a onClick={ onClose }>&lt; Volver </a>
                            </Link>
                        :
                            <Link href={`/channel?id=${clip.channel.id}`}>
                                <a>&lt; Volver </a>
                            </Link>
                    }
                </nav>

                <picture>
                    <img src={`${clip.urls.image || clip.channel.urls.logo_image.original}`} alt="" />
                </picture>

                <section aria-label="Información de episodio y controles de reproducción">
                    <h3>{ clip.title }</h3>
                    <h6>{ clip.channel.title }</h6>
                    <audio controls autoPlay={true}>
                        <source src={ clip.urls.high_mp3 } type="audio/mpeg" />
                    </audio>
                </section>


            </article>
        )
    }
}