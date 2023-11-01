import { Card, Em, Strong, Text } from "@radix-ui/themes";

const Bio = () => (
  <Card>
    <Strong>
      Full-Stack Web Developer with a strong interest for <Em>Type Safety.</Em>
    </Strong>
    <Text as="p">
      Former data scientist with a passion for building innovative and scalable
      web applications. Expertise in TypeScript, React, and Nest.js, with a
      focus on type safety between the front-end and back-end. Believes that
      type safety is crucial for delivering high-quality, bug-free code.
    </Text>
  </Card>
);

export default Bio;
