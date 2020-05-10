import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          title="Post title for this entry"
          date="Mayo 09, 2020"
          excerpt="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime excepturi a reiciendis cum dolor commodi, iste, ab qui repellat, quos nesciunt accusantium obcaecati modi architecto dolore fugiat mollitia ea recusandae."
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
