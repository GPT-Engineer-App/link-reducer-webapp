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
            Register
          </Heading>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <FormControl id="gender" mb={4}>
            <FormLabel>Gender</FormLabel>
            <Input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
          </FormControl>
          <FormControl id="dob" mb={4}>
            <FormLabel>Date of Birth</FormLabel>
            <Input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          </FormControl>
          <Button colorScheme="teal" onClick={handleRegister}>
            Register
          </Button>
        </Box>

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

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>
            Shorten Link
          </Heading>
          <FormControl id="original-link" mb={4}>
            <FormLabel>Original Link</FormLabel>
            <Input type="text" value={originalLink} onChange={(e) => setOriginalLink(e.target.value)} />
          </FormControl>
          <Button colorScheme="teal" onClick={handleShortenLink}>
            Shorten
          </Button>
          {shortenedLink && <Text mt={4}>Shortened Link: {shortenedLink}</Text>}
        </Box>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>
            About the Application
          </Heading>
          <HStack spacing={4}>
            <IconButton aria-label="App Icon" icon={<FaInfoCircle />} size="lg" />
            <Text>This application allows you to shorten long URLs for easier sharing.</Text>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
