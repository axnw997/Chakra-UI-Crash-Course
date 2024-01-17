import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

interface MyFormData {
  get: (name: string) => string | null;
}

export interface MyRequest {
  formData: () => Promise<MyFormData>;
}

const Create = () => {
  return (
    <Box maxW={"480px"} mt={10}>
      <Form method="post" action="/create">
        <FormControl isRequired mb="30px">
          <FormLabel>Task Name:</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a descriptive task name</FormHelperText>
        </FormControl>
        <FormControl mb="30px">
          <FormLabel>Task Description</FormLabel>
          <Textarea
            placeholder="enter a detailed description for the task..."
            name="description"
          />
        </FormControl>
        <FormControl mb="30px">
          <HStack>
            <Checkbox colorScheme="purple" name="isPriority" size="lg" />
            <FormLabel pt={2}>Mark this a priority task.</FormLabel>
          </HStack>
        </FormControl>
        <HStack>
          <Button type="reset" colorScheme="purple" variant="outline">
            Clear
          </Button>
          <Button type="submit" colorScheme="purple">
            Submit
          </Button>
        </HStack>
      </Form>
    </Box>
  );
};

const createAction = async ({ request }: { request: MyRequest }) => {
  const data = await request.formData();
  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };
  console.log(task);

  return redirect("/");
};

export default Create;
export { createAction };
