import React from "react"
import { Flex } from "@chakra-ui/react"
import LoginForm from "../component/Form/LoginForm"

export default function Home() {
  return (
    <>
      <Flex direction="row" mx="150px" my="50px" justifyContent="center">
        <LoginForm />
      </Flex>
    </>
  )
}
