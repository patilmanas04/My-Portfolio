import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation, useInView } from "framer-motion"

const RevealWrapper = styled.div`
    position: relative;
    overflow: hidden;
`

const Reveal = (props) => {
    const wrapperRef = useRef(null)
    const isInView = useInView(wrapperRef, { triggerOnce: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        }
    }, [isInView])

    return (
        <RevealWrapper ref={wrapperRef}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5 }}
            >
                {props.children}
            </motion.div>
        </RevealWrapper>
    )
}

export default Reveal