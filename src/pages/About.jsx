import React from "react";
import { Container, Heading, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";

function About() {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          About the Application
        </Heading>
        <HStack spacing={4}>
          <IconButton aria-label="App Icon" icon={<FaInfoCircle />} size="lg" />
          <Text>This application allows you to shorten long URLs for easier sharing.</Text>
        </HStack>
      </VStack>
    </Container>
  );
}

export default About;
