import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  Text,
  Center,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react"

import { getImage } from "../../utils/image"

import ButtonLink from "../ButtonLink"

interface IProps {
  to: string
  alt: string
  image: string
  title: string
  description: string
  buttonText: string
}

const RoadmapActionCard: React.FC<IProps> = ({
  to,
  alt,
  image,
  title,
  description,
  buttonText,
}) => {
  const data = useStaticQuery(graphql`
    query RoadmapActionCard {
      futureProofing: file(relativePath: { eq: "roadmap/roadmap-future.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            height: 260
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      scaling: file(relativePath: { eq: "roadmap/roadmap-transactions.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 260
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      security: file(relativePath: { eq: "roadmap/roadmap-security.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 380
            height: 260
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      userExperience: file(relativePath: { eq: "roadmap/roadmap-ux.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 380
            height: 260
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 100
          )
        }
      }
    }
  `)

  return (
    <LinkBox
      as={Flex}
      direction="column"
      border="1px solid"
      borderColor="lightBorder"
    >
      <Center background="cardGradient" h="260px">
        <Image
          as={GatsbyImage}
          image={getImage(data[image])!}
          alt={alt}
          fit="contain"
        />
      </Center>
      <Flex p={6} flex="1" flexDir="column" justify="space-between" gap={4}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text flex="1">{description}</Text>
        <LinkOverlay as={ButtonLink} href={to}>
          {buttonText}
        </LinkOverlay>
      </Flex>
    </LinkBox>
  )
}

export default RoadmapActionCard
