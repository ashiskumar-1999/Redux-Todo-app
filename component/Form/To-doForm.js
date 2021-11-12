import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addToDo } from "../../Redux/todo"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react"

const TodoForm = () => {
  const { onOpen, isOpen, onClose } = useDisclosure()
  const [inputvalue, setInputvalue] = useState("")
  const dispatch = useDispatch()
  const handleAddTodo = () => {
    dispatch(
      addToDo({
        item: inputvalue,
        id: Date.now(),
      })
    )
  }
  return (
    <>
      <Button
        bgColor="blue"
        color="#ffffff"
        onClick={onOpen}
        _focus={{ border: "none" }}
        _hover={{}}
      >
        Create a TODO
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a TODO</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <FormControl id="To-do Form" isRequired>
                <Input
                  placeholder="E.g The header is to be done."
                  type="text"
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e.target.value)}
                />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleAddTodo}>
              Add the TODO
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TodoForm
