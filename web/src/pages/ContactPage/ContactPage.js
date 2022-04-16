import { Box, Container } from '@chakra-ui/react'
import {
  FieldError,
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thanks for your message!')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    create({
      variables: {
        input: data,
      },
    })
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Container>
        <Toaster />
        <Box
          boxShadow="lg"
          p={4}
          as={Form}
          onSubmit={onSubmit}
          config={{ mode: 'onBlur' }}
          formMethods={formMethods}
          error={error}
        >
          <>
            <Label name="name" errorClassName="error">
              Name
            </Label>
            <TextField
              errorClassName="error"
              name="name"
              validation={{ required: true }}
            />
            <FieldError className="error" name="name" />

            <Label name="email" errorClassName="error">
              Email
            </Label>
            <TextField
              errorClassName="error"
              name="email"
              validation={{
                required: true,
                pattern: {
                  value: /^[^@]+@[^.]+\..+$/,
                  message: 'Please enter a valid email address',
                },
              }}
            />
            <FieldError className="error" name="email" />

            <Label name="message" errorClassName="error">
              Message
            </Label>
            <TextAreaField
              errorClassName="error"
              name="message"
              validation={{ required: true }}
            />
            <FieldError className="error" name="message" />

            <Box mt={4}>
              <Submit disabled={loading}>Send Message</Submit>
            </Box>
          </>
        </Box>
      </Container>
    </>
  )
}

export default ContactPage
