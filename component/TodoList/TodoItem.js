import React from "react"
import { Box, Checkbox } from "@chakra-ui/react"

function TodoItem({ item }) {
  const [checked, setChecked] = React.useState(false)
  return (
    <Box
      minw="500px"
      h="50px"
      border="1px"
      borderColor="gray.200"
      borderRadius="10px"
      p="10px"
      m="10px"
      justifyContent="center"
      alignItems="center"
    >
      <Checkbox
        isChecked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      >
        {item}
      </Checkbox>
    </Box>
  )
}

export default TodoItem
