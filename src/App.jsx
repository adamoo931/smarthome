import './App.css'
import { Badge, Stack } from '@chakra-ui/react'


function App() {
  return (
    <>
      <Stack direction='row'>
        <Badge>Default</Badge>
        <Badge colorScheme='green'>Success</Badge>
        <Badge colorScheme='red'>Removed</Badge>
        <Badge colorScheme='purple'>New</Badge>
      </Stack>
      <div className='wrapper'>
        dupa
      </div>
    </>
  )
}

export default App
