import React, { useState } from "react";
import { Container, Text, VStack, Input, Button, FormControl, FormLabel, Box, Heading, HStack, IconButton, useToast } from "@chakra-ui/react";
import { FaLink, FaUser, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const [originalLink, setOriginalLink] = useState("");
  const toast = useToast();

  const handleRegister = () => {
    // Handle user registration logic here
    toast({
      title: "Registration successful.",
      description: "You have been registered successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleLogin = () => {
    // Handle user login logic here
    toast({
      title: "Login successful.",
      description: "You have been logged in successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleShortenLink = () => {
    // Handle link shortening logic here
    setShortenedLink(`short.ly/${originalLink.slice(-5)}`);
    toast({
      title: "Link shortened.",
      description: `Your link has been shortened to ${shortenedLink}.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          Link Reduction Application
        </Heading>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>
            Login
          </Heading>
          <FormControl id="login-email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="login-password" mb={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button colorScheme="teal" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
