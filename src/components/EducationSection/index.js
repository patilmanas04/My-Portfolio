import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    padding: 40px 0 80px 0;

    @media screen and (max-width: 960px){
        padding: 0;
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
        font-style: 32px;
    }
`

const Desc = styled.div`
    font-size: 18px;
    max-width: 600px;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};

    @media screen and (max-width: 768px){
        font-style: 16px;
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

const EducationSection = ()=>{
    return (
        <>
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>
                <TimeLineSection>
                    <Timeline>
                        {
                            Education.map((education, index) => {
                                return <TimelineItem>
                                    <TimelineContent sx={{py: "12px", px: 2}}>
                                        <EducationCard education={education}/>
                                    </TimelineContent>
                                    <TimelineSeparator color="secondary">
                                        <TimelineDot variant="outlined" color="secondary"/>
                                            {
                                                index !== Education.length-1 && <TimelineConnector style={{background: "#854CE6"}}/>
                                            }
                                    </TimelineSeparator>
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

export default EducationSection