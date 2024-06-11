import React from 'react'
import styled from 'styled-components'

const ExperienceCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
    
const Timeline = styled.div`
    color: ${props => props.theme.commentText};
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
    height: 100%;
    max-width: 300px;
    padding: 8px 8px 8px 0;
`

const ExperienceContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    width: 70%;

    @media (max-width: 900px) {
        width: 100%;
    }
`

const CompanyDetailsWrapper = styled.a`
    text-decoration: none;
    padding: 8px;
    border: 1px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
`

const MyRoleInCompany = styled.span`
    margin-left: 10px;
    color: ${props => props.theme.commentText};
`
    
const CompanyDescription = styled.p`
    color: ${props => props.theme.text};
    font-size: 16px;
    width: 100%;
    max-width: 700px;
    letter-spacing: 1.6px;
    line-height: 1.6;

    @media (max-width: 900px) {
        max-width: 100%;
    }
`

const SkillsUsed = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    color: ${props => props.theme.commentText};
    gap: 10px;
`

const Skill = styled.p`
    color: ${props => props.theme.green};
    font-size: 14px;
`

const ExperienceCard = (props) => {
    return (
        <ExperienceCardWrapper>
            <Timeline>
                {props.experience.startDate} - {props.experience.endDate}
            </Timeline>
            <ExperienceContent>
                <CompanyDetailsWrapper href={props.experience.companyUrl} target='_blank'>
                    {props.experience.company}
                    <MyRoleInCompany>
                        //{props.experience.role}
                    </MyRoleInCompany>
                </CompanyDetailsWrapper>
                <CompanyDescription>
                    {props.experience.description}
                </CompanyDescription>
                <SkillsUsed>
                    {
                        props.experience.skills.map((skill, index) => {
                            return (
                                <>
                                    <Skill key={index}>
                                        {skill}
                                    </Skill>
                                    {index==props.experience.skills.length-1?"":"/"}
                                </>
                            )
                        })
                    }
                </SkillsUsed>
            </ExperienceContent>
        </ExperienceCardWrapper>
    )
}

export default ExperienceCard