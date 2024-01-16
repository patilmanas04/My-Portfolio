import React from "react";
import { Experiences } from "../../data/constants";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import styled from "styled-components";
import ExperienceCard from "../Cards/ExperienceCard";
import { PiSmileySadLight } from "react-icons/pi";
import { HiLocationMarker } from "react-icons/hi";
import NoExperienceCard from "../Cards/NoExperienceCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    padding: 40px 0 80px 0;

    @media screen and (max-width: 960px){
        padding: 20px 10px 40px 10px;
    }
`

const Wrapper = styled.div`
    max-width: 1100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 12px;
`

const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 12px;
    color: ${({ theme }) => theme.text_primary};

    @media screen and (max-width: 768px){
        margin-top: 12px;
        font-size: 32px;
    }
`

const Desc = styled.div`
    font-size: 18px;
    max-width: 600px;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`

const TimeLineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`

const Experience = () => {
    return (
        <>
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>Here are some of my projects</Desc>
                <TimeLineSection>
                    <Timeline position="alternate">
                        {
                            Experiences.map((experience, index) => {
                                return <TimelineItem>
                                    <TimelineSeparator color="secondary">
                                        <TimelineDot color="secondary">
                                            <HiLocationMarker color="#fff" size="2rem"/>
                                        </TimelineDot>
                                        {
                                            index !== Experiences.length-1 && <TimelineConnector style={{background: "#854CE6"}}/>
                                        }
                                    </TimelineSeparator>
                                    <TimelineContent sx={{py: "10px", px: 2}}>
                                        {/* <ExperienceCard experience={experience}/> */}
                                        <NoExperienceCard />
                                    </TimelineContent>
                                </TimelineItem>
                            })
                        }
                    </Timeline>
                </TimeLineSection>
            </Wrapper>
        </Container>
        </>
    )
}

export default Experience