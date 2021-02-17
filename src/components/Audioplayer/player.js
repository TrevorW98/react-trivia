import ReactAudioPlayer from 'react-audio-player'
import Song1 from '../AudioFiles/song1.mp3';
import Song2 from '../AudioFiles/song2.mp3';
import Song3 from '../AudioFiles/song3.mp3';
import Song4 from '../AudioFiles/song4.mp3';
import Song5 from '../AudioFiles/song5.mp3';
import Song6 from '../AudioFiles/song6.mp3';
import Song7 from '../AudioFiles/song7.mp3';
import Song8 from '../AudioFiles/song8.mp3';
import Song9 from '../AudioFiles/song9.mp3';
import Song10 from '../AudioFiles/song10.mp3';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import {getSong} from '../Options/options'

let songList = [Song1, Song2, Song3, Song4, Song5, Song6, Song7, Song8, Song9, Song10]
class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            autoplay: true
        }
    }
    componentDidMount() {
        this.songID = setInterval(() => {
            this.playMusic()
        }, 1000)
    }
    playMusic(){
        this.setState({autoplay: true})
    }
    componentWillUnmount(){
        clearInterval(this.songID)
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center mt-5">
                            <ReactAudioPlayer src={songList[getSong()]} controls autoPlay={true} volume={0.25} />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default Player