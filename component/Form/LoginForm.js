import React from "react"
import { useRouter } from "next/router"
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"

function LoginForm() {
  const [username, setUsername] = React.useState()
  const [password, setPassword] = React.useState()
  const router = useRouter()

  const StoreCredential = () => {
    window.localStorage.setItem("username", username)
    window.localStorage.setItem("password", password)
  }
  const handleLogin = (e) => {
    e.preventDefault()
    StoreCredential()
    if (window.localStorage.getItem("username")) {
      router.push("/dashboard")
    }
  }

  return (
    <Box w="500px" border="1px" borderColor="gray.100" boxShadow="lg" p="30px">
      <form>
        <FormControl id="first-name" isRequired>
          <FormLabel>Username/EmailId</FormLabel>
          <Input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="*****"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button colorScheme="blue" onClick={handleLogin} mt="10px">
            LogIn
          </Button>
        </FormControl>
      </form>
    </Box>
  )
}

export default LoginForm
