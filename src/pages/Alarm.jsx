import React, { useState } from "react";
import { Container, FormControl, FormLabel, Input, Button, Heading, VStack, Text, useToast } from "@chakra-ui/react";

function Alarm() {
  const [originalLink, setOriginalLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const toast = useToast();

  const handleShortenLink = () => {
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
      </VStack>
    </Container>
  );
}

export default Alarm;
