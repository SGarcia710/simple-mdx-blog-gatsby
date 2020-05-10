import React from "React"
import { graphql } from "gatsby"
import {
  Container,
  Content,
  ContentCard,
  FeatureImage,
  Pagination,
} from "../components"
import { H1, P } from "../elements"

const AllPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges

  return (
    <Container>
      <FeatureImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Welcome to my Gatsby + MDX Blog
        </H1>
        <P color="dark2" textAlign="Center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          quam, molestias quidem non quae voluptate labore repellat tempore
          facere amet optio debitis dolor illo totam rerum quia voluptatum
          voluptatem accusamus?
        </P>
        {posts.map(post => {
          return (
            <ContentCard
              key={post.node.frontmatter.slug}
              date={post.node.frontmatter.date}
              title={post.node.frontmatter.title}
              excerpt={post.node.frontmatter.excerpt}
              slug={post.node.frontmatter.slug}
            />
          )
        })}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </Container>
  )
}

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            slug
            date(formatString: "MMMM DD, YYYY", locale: "ES")
            excerpt
            title
          }
        }
      }
    }
  }
`

export default AllPosts
