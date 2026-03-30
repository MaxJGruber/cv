import { Card, Container, Flex, Group, Stack, Title, Avatar } from "@mantine/core";
import type { CustomCVProps } from "cv-pdf-gen";


export default function MyLayoutCV({ content, photoUrl }: CustomCVProps) {
  const { personal, experience, technical_skills, soft_skills, education, languages, labels } = content;
  const website = content("personal.contact.website") as string | undefined;

  return (
    <Stack p={0} m={0} gap={3}>
      {/* Avatar and diamond are both absolutely positioned within this row,
          sharing the same coordinate space and the same left: 60% axis */}
      <Flex
        direction="row"
        id="header-section"
        style={{ position: 'relative', overflow: 'visible' }}
      >
        <Stack
          bg="blue"
          style={{
            flex: '0 0 60%',
            overflow: 'hidden',
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)',
          }}
          p="xl"
          id="header"
        >
          <Title>{personal.name}</Title>
          <Title order={5}>{personal.title}</Title>
          <Flex>{personal.summary}</Flex>
        </Stack>
        <Stack
          align="flex-end"
          style={{
            flex: 1,
            overflow: 'hidden',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
          }}
          id="contact"
        >
          <Flex>{personal.contact.email}</Flex>
          <Flex>{personal.contact.phone}</Flex>
        </Stack>

        {/* Avatar: out of flex flow, centered at the 60% column boundary */}
        <Avatar
          src={photoUrl}
          alt="it's me"
          size="xl"
          style={{
            position: 'absolute',
            left: '60%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            border: '3px solid white',
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          }}
        />

        {/* Diamond: same left: 60% axis as avatar, sits at the row boundary */}
        <div style={{
          position: 'absolute',
          left: '60%',
          bottom: 0,
          width: 22,
          height: 22,
          background: 'gold',
          borderRadius: 4,
          transform: 'translate(-50%, 50%) rotate(45deg)',
          zIndex: 20,
        }} />
      </Flex>

      <Group gap={3} style={{ alignItems: 'stretch' }}>
        <Stack
          style={{
            flex: '0 0 60%',
            clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)',
          }}
          bg="red"
          id="left-column"
        >
          dddd
          {/* work */}
        </Stack>
        <Stack
          bg="blue"
          style={{
            clipPath: 'polygon(16px 0, 100% 0, 100% 100%, 0 100%, 0 16px)',
          }}
          id="right-column"
        >
          fff
          {/* right column */}
        </Stack>
      </Group>
    </Stack>
  )
}
