import React from "react"
import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import 'animate.css'
import TrackVisibility from "react-on-screen"

export const Banner = () => {
    const period = 2000
    const [loopNum, setLoopNum] = useState(0)
    const [ isDeleting, setIsDeliting] = useState(false)
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const toRotate = [ "FullStack Developer", "Dungeon Master", "Game Enthusiastic" ]
    const [text, setText] = useState("")

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length -1 ) : fullText.substring(0, text.length +1)
        
        setText(updatedText)

            if (isDeleting) {
                setDelta(prevDelta => prevDelta /2)
            }
            if (!isDeleting && updatedText === fullText) {
                setIsDeliting(true)
                setDelta(period)
            }   else if (isDeleting && updatedText === '') {
                setIsDeliting(false)
                setLoopNum(loopNum + 1)
                setDelta(500)
            }
    }

    return (
        <section className="banner" id="home" >
            <Container>
                <Row className="align-items-center" >
                    <Col xs={12} md={6} xl={7} >
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animate_animated animate_fadeIn" : ""} >
                                <span className="tagline" >Welcome to my Portifolio</span>
                                <h1>{"I'm Marcos Coca F. "}<span className="wrap" >{text}</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus molestie luctus. Vivamus ac tortor consequat, fringilla sem a, fringilla leo. In sit amet lorem pharetra lectus accumsan auctor. Vivamus interdum, metus quis vulputate rutrum, velit elit interdum augue, ut posuere libero justo suscipit tellus. Morbi id rutrum diam.</p>
                                <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25} /></button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={headerImg} alt='Header Img' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}