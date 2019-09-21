import React from 'react'
import styled from 'styled-components'

export default function Resources() {
    return (
        <ParentDiv>

            <ChildDiv name='facebook'>
                <H1>Facebook</H1>
                <Par>
                    <Ul>
                        <Li>List Item 1</Li>
                        <Li>List Item 2</Li>
                        <Li>List Item 3</Li>
                    </Ul>
                </Par>
            </ChildDiv>

            <ChildDiv name='instagram'>
                <H1>Instagram</H1>
                <Par>
                    <Ul>
                        <Li>List Item 1</Li>
                        <Li>List Item 2</Li>
                        <Li>List Item 3</Li>
                    </Ul>
                </Par>
            </ChildDiv>

            <ChildDiv name='twitter'>
                <H1>Twitter</H1>
                <Par>
                    <Ul>
                        <Li>List Item 1</Li>
                        <Li>List Item 2</Li>
                        <Li>List Item 3</Li>
                    </Ul>
                </Par>
            </ChildDiv>

        </ParentDiv>
    )
}

// Styled Components

const ParentDiv = styled.div`
@media(max-width: 768){

}
display: flex;
flex-direction: column;
align-items: center;
`

const ChildDiv = styled.div`
@media(max-width: 768){

}

background: #F6F6F6;
height: 25vh;
width: 60vw;
margin: 10px;
display: flex;
flex-direction: column;



`

const H1 = styled.h1`
margin-left: 10px;
margin-top: 10px;
margin-bottom: 10px;
`

const Par = styled.p`

`

const Ul = styled.ul`

`

const Li = styled.li`

`