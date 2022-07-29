import { Flex, Text, Button, Input } from '@chakra-ui/react'


const EditProfile = ({ state, formik, record }: any) => {


  return (
    <Flex direction="column">

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <Input
          marginBottom={5}
          id='name'
          name='name'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor='email'>Email Address</label>
        <Input
          marginBottom={5}
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <Button
          disabled={!record.isMutable || record.isMutating}
          type='submit'>
          Save Changes
        </Button>

      </form>

    </Flex>
  )
}

export default EditProfile