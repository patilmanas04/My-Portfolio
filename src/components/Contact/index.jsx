import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'

const ContactWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
`

const ContactTitle = styled.p`
    color: ${props => props.theme.commentText};
    font-size: 1.1rem;
`

const ContactForm = styled.form`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    font-size: 1.2rem;
    gap: 8px;

    @media (max-width: 500px) {
        font-size: 1rem;
    }
`

const CodeText = styled.p`
    color: ${props => props.theme.commentText};
`

const Span = styled.span`
    color: ${props => props.theme.green};
`

const InputContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-left: 40px;
    color: ${props => props.theme.commentText};

    @media (max-width: 500px) {
        margin-left: 20px;
    }
`

const InputLabel = styled.p`
    color: ${props => props.theme.commentText};
`

const Input = styled.input`
    background-color: transparent;
    color: ${props => props.theme.text};
    border: none;
    outline: none;
    width: 250px;
    padding: 5px;
    font-size: 1.2rem;

    &::placeholder {
        color: ${props => props.theme.text};
    }

    &:hover,
    &:focus {
        background-color: ${props => props.theme.hover};
    }

    @media (max-width: 500px) {
        font-size: 1rem;
        width: 200px;
    }
`

const TextArea = styled.textarea`
    background-color: transparent;
    color: ${props => props.theme.text};
    border: none;
    outline: none;
    min-width: 250px;
    padding: 5px;
    font-size: 1.2rem;

    &::placeholder {
        color: ${props => props.theme.text};
    }

    &:hover,
    &:focus {
        background-color: ${props => props.theme.hover};
    }

    @media (max-width: 500px) {
        font-size: 1rem;
        width: 200px;
    }
`

const Button = styled.button`
    margin-top: 20px;
    background-color: transparent;
    color: ${props => props.theme.text};
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;

    &:hover {
        background-color: ${props => props.theme.hover};
    }

    @media (max-width: 500px) {
        font-size: 1rem;
    }
`

const ContactSection = () => {
    const form = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_tqijgym', 'template_wloes9h', form.current, 'PqJx_9YaTPewypuk_')
        .then((result) => {
            form.current.reset()
        }, (error) => {
            console.log(error.text)
        })
    }

    return (
        <ContactWrapper>
            <ContactTitle>
                //get in touch
            </ContactTitle>
            <ContactForm ref={form} onSubmit={handleSubmit}>
                <CodeText>
                    const <Span>formData</Span> = {"{"}
                </CodeText>
                <InputContainer>
                    <InputLabel>
                        Email:
                    </InputLabel>
                    <Input type="email" placeholder='Enter your email' name='email' required/>
                </InputContainer>
                <InputContainer style={{
                    alignItems: 'flex-start'
                }}>
                    <InputLabel style={{
                        paddingTop: '5px'
                    }}>
                        Message:
                    </InputLabel>
                    <TextArea placeholder='Enter your message' rows="1" name='message' required/>
                </InputContainer>
                <CodeText>
                    {"}"}
                </CodeText>
                <Button type='submit'>sendEmail(<Span>formData</Span>)</Button>
            </ContactForm>
        </ContactWrapper>
    )
}

export default ContactSection