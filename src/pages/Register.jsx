import React, { useState } from "react";
import { Container, FormControl, FormLabel, Input, Button, Heading, VStack, useToast } from "@chakra-ui/react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const toast = useToast();

  const handleRegister = () => {
    toast({
      title: "Registration successful.",
      description: "You have been registered successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
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
      </VStack>
    </Container>
  );
}

export default Register;
