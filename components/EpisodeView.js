export default class EpisodeView extends React.Component {
    render() {
        const { episode } = this.props;

        return <article>

            <img src={ episode.urls.image } alt="" />
            <h1>{ episode.title }</h1>
            <p>{ episode.description }</p>
            <audio controls>
              <source src={ episode.urls.high_mp3 } type='audio/mpeg' />
            </audio>

        </article>
    }
}