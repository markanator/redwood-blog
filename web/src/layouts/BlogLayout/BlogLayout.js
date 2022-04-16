import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <Box>
        <Container maxW="8xl">
          <Flex justifyContent="space-between" alignItems="center" py={4}>
            <Heading as="h1" fontSize="1.5rem">
              <Link to={routes.home()}>Redwood Blog</Link>
            </Heading>
            <Flex as="nav" justifyContent="space-between" w="50%">
              <ul>
                <li>
                  <Link to={routes.home()}>Home</Link>
                </li>
                <li>
                  <Link to={routes.about()}>About</Link>
                </li>
                <li>
                  <Link to={routes.contact()}>Contact</Link>
                </li>
              </ul>

              {isAuthenticated ? (
                <Flex>
                  <Box mr={4}>Logged in as {currentUser?.email ?? 'USER'}</Box>{' '}
                  <Button
                    size="xs"
                    colorScheme="blue"
                    type="button"
                    onClick={logOut}
                  >
                    Logout
                  </Button>
                </Flex>
              ) : (
                <ul>
                  <li>
                    <Link to={routes.login()}>Login</Link>
                  </li>
                  <li>
                    <Link to={routes.signup()}>Signup</Link>
                  </li>
                </ul>
              )}
            </Flex>
          </Flex>
        </Container>
      </Box>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
