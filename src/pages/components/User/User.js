import React from "react"
import styled from "styled-components"

const UserWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background: transparent;
  &:last-child {
    margin-bottom: 0;
  }
`

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const Excerpt = styled.p`
  margin: 0;
`

const User = props => (
    <UserWrapper>
      <Avatar src={props.avatar} alt="" />
      <Description>
        <Username>{props.username}</Username>
        <Excerpt>{props.excerpt}</Excerpt>
      </Description>
    </UserWrapper>
  )

export default User