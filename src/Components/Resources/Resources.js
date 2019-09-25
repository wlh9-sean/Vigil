import React from 'react'
import styled from 'styled-components'

export default function Resources() {
    return (
        <ParentDiv>

            <ChildDiv name='facebook'>
                <H1>Facebook</H1>
                <Par>
                    
                    We understand how difficult it might be gaining access to your loved one's profiles. Below are some steps and guidelines to help you obtain access and memorialize their pages.

                </Par>
                <Par>
                Before we get into the steps of obtaining  the account of someone who is no longer with us, let’s discuss how to dictate what happens to your account in the event of your passing.
                </Par>

                <H2>Legacy Contact</H2>
                <Par>A legacy contact is someone you choose to look after your account if it’s memorialized. If you add a legacy contact, that person will be able to make decisions about your account once it is memorialized.     
                </Par>

                <Par>
                    What you can do as a Legacy Contact:
                    <Ul>
                        <Li>Write a pinned post for your profile (ie: A final message on your behalf or provide info about a memorial service)</Li>
                        <Li>View posts, even if your privacy setting are set to “Only Me”</Li>
                        <Li>Decide who can see and who can post tributes, if the memorialized account has an area for tributes</Li>
                        <Li>Delete tribute posts</Li>
                        <Li>Change who can see posts that you’re tagged in</Li>
                        <Li>Remove tags of you that someone else has posted.</Li>
                        <Li>Respond to new friend requests</Li>
                        <Li>Update your profile picture and cover photo</Li>
                        <Li>Request the removal of your account</Li>
                        <Li>Turn off the requirement to review posts and tags before they appear in the tributes section, if you had timeline review turned on.</Li>
                        <Li>Download a copy of what you’ve shared on Facebook</Li>
                    </Ul>
                </Par>

                <Par>
                    What you cannot do as a Legacy Contact
                    <Ul>
                        <Li>Log into the account</Li>
                        <Li>Read messages</Li>
                        <Li>Remove any friends or make new friend requests</Li>
                    </Ul>
                </Par>

                <H2>
                    To assign a Legacy Contact, follow these simple steps:
                </H2>

                <Par>
                    <Ul>
                        <Li>In the desktop view, on the top navigation bar, there is a small arrow. Click that arrow and select “Settings.” Then click on “Memorialization Settings.” In the app view, select the hamburger menu (three horizontal bars at the bottom right), scroll down and “Settings and Privacy.” A drop down menu appears. Select “Settings,” scroll down and select “Account Ownership and Control,” then select “Memorialization Settings.”</Li>
                        <Li>There is some info there that you can read, and you’ll see an input box saying “Choose a friend.” Start typing the name of the person you’d like to be your legacy contact. It will populate with friends whose names match, and you can select one. Once you have the right person selected, click “Add.”</Li>
                        <Li>Once you click “Add,” it will pop up a message box. You can customize the message that’s sent to your legacy contact, or you can type your own. </Li>
                        <Li>Once the message is sent, you will see their name and photo as your Legacy Contact. You will also see a new section that says “Data Archive Permission.” If you check the checkbook, this will allow your Legacy Contact to download a copy of your Facebook profile as a whole.</Li>
                    </Ul>
                </Par>
            </ChildDiv>

            {/* <ChildDiv name='instagram'>
                <H1>Instagram</H1>
                <Par>
                    <Ul>
                        <Li>List Item 1</Li>
                        <Li>List Item 2</Li>
                        <Li>List Item 3</Li>
                    </Ul>
                </Par>
            </ChildDiv> */}

            {/* <ChildDiv name='twitter'>
                <H1>Twitter</H1>
                <Par>
                    <Ul>
                        <Li>List Item 1</Li>
                        <Li>List Item 2</Li>
                        <Li>List Item 3</Li>
                    </Ul>
                </Par>
            </ChildDiv> */}

        </ParentDiv>
    )
}

// Styled Components

const ParentDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
width: 100vw;
flex-wrap: wrap;
`

const ChildDiv = styled.div`

background: #F6F6F6;
height: 100vh;
width: 75vw;
margin-left: 15vw;
display: flex;
flex-direction: column;
align-items: center;
`

const H1 = styled.h1`
margin-left: 10px;
margin-top: 10px;
margin-bottom: 10px;
font-size: 1.5em;
text-decoration: underline black; 
`

const H2 = styled.h2`
font-size: 1.2em;
margin-bottom: 1vh;
margin-top: 1vh;
width: 50vw;
text-decoration: underline black;
`

const Par = styled.p`
font-size: 1.1em;
margin: 2vh;
width: 50vw;
`

const Ul = styled.ul`
display: flex;
flex-direction: column;
align-items: flex-start;
flex-wrap: wrap;
`

const Li = styled.li`
margin-left: 3vw;
margin-top: 1vh;
list-style-type: circle;
`