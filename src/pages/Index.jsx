import { Container, VStack, Box, Text, Input, Button, HStack, Flex, Spacer } from "@chakra-ui/react";
import { FaHome, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Text fontSize="xl" fontWeight="bold">PostBoard</Text>
        <Spacer />
        <HStack spacing={4}>
          <Button leftIcon={<FaHome />} variant="ghost" color="white">Home</Button>
          <Button leftIcon={<FaPlus />} variant="ghost" color="white">New Post</Button>
        </HStack>
      </Flex>

      {/* Main Section */}
      <Box p={4}>
        <VStack spacing={4} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <Text mt={4}>This is a sample post. More posts will be displayed here.</Text>
          </Box>
          {/* Add more posts here */}
        </VStack>
      </Box>

      {/* Post Submission Form */}
      <Box p={4} bg="gray.100" position="fixed" bottom={0} width="100%">
        <VStack spacing={4}>
          <Input placeholder="Write your post here..." />
          <Button colorScheme="blue">Submit</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;