import React from "react"
import TodoForm from "../component/Form/To-doForm"
import TodoItem from "../component/TodoList/TodoItem"
import { useSelector } from "react-redux"
import { selectTodoList } from "../Redux/todo"
import { Flex, Box } from "@chakra-ui/react"

const Dashboard = () => {
  const TodoList = useSelector(selectTodoList)
  return (
    <Flex direction="column" mx="150px" my="50px" justifyContent="center">
      <Box>
        <TodoForm />
      </Box>
      <Box maxW="600px" m="100px" boxShadow="lg" borderRadius="10px">
        {TodoList.map((data) => (
          <TodoItem key={data.id} item={data.item} />
        ))}
      </Box>
    </Flex>
  )
}

export default Dashboard
