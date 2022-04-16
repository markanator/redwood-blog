import { Box, Heading, Text } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <Box as="article" boxShadow="lg" borderRadius={5} p={4} m={4}>
      <header>
        <Heading as="h2" fontSize="2xl">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </Heading>
      </header>
      <Text my={2}>{article.body}</Text>
      <Text fontSize="xs">
        Posted at: {new Date(article.createdAt).toLocaleDateString()}
      </Text>
    </Box>
  )
}

export default Article
