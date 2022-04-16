import { Container } from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Container>
        <ArticlesCell />
      </Container>
    </>
  )
}

export default HomePage
