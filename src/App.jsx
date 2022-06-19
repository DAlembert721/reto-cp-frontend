import {useState} from 'react'
import {Box, Button, Container, Typography} from "@mui/material";

function App() {
  const [count, setCount] = useState(0)

  return (
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Vite.js example
          </Typography>
        </Box>
      </Container>
  )
}

export default App
