import { Body, Box, Button, Stack, StackProps, VStack } from "old-ui"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { courseHomeCard, courseHomeCardImage } from "../../style/services.css"
import { BoxExtendedProps } from "../../../../types/system"
import SeoLink from "../../../../components/shared/SeoLink"

const AcademyCategoryCard: React.ForwardRefRenderFunction<
  "div",
  BoxExtendedProps<HTMLDivElement>
> = ({ children, ...rest }, ref) => (
  <Box ref={ref} className={courseHomeCard} {...rest}>
    {children}
  </Box>
)

export const CategoryCourseCard = React.forwardRef(AcademyCategoryCard)

export const CategoryCourseHeader: React.FC<
  { children: React.ReactNode } & StackProps
> = ({ children, ...rest }) => (
  <VStack spacing={16} align="flex-start" {...rest}>
    {children}
  </VStack>
)

export const CategoryCourseFooter: React.FC<
  BoxExtendedProps<HTMLDivElement>
> = ({ children, ...rest }) => (
  <Box mt="auto" {...rest}>
    {children}
  </Box>
)

export const CategoryCourseImage: React.FC<
  BoxExtendedProps<HTMLDivElement>
> = ({ children, ...rest }) => (
  <Box className={courseHomeCardImage} {...rest}>
    {children}
  </Box>
)

const query = graphql`
  query HomeAvailableCourseCategory {
    allContentfulCategory {
      nodes {
        name
        slug
        seoDescription
      }
    }
  }
`

type CategoryCourseType = "sviluppatore-web" | "gratuiti" | "videomakers"

export const CategoryCourseSection = () => {
  const {
    allContentfulCategory: { nodes: courseCategories },
  } = useStaticQuery<Queries.HomeAvailableCourseCategoryQuery>(query)

  const parseCategory = React.useCallback(
    (
      category: Queries.HomeAvailableCourseCategoryQuery["allContentfulCategory"]["nodes"][number]
    ) => {
      switch (category.slug) {
        case `sviluppatori-web`:
          return {
            name: `Corsi per Sviluppatori web`,
            slug: `/corsi/${category.slug}/`,
            seoDescription: category.seoDescription,
          }
        case `gratuiti`:
          return {
            name: `Corsi gratuiti per iniziare`,
            slug: `/corsi/${category.slug}/`,
            seoDescription: category.seoDescription,
          }
        default:
          return {
            name: `Corsi per Videomaker e operatori camera`,
            slug: `/corsi/${category.slug}/`,
            seoDescription: category.seoDescription,
          }
      }
    },
    []
  )

  const parsedCourseCategoriesLookupTable = React.useMemo(
    () =>
      courseCategories.reduce(
        (acc, category) => ({
          ...acc,
          [category.slug as CategoryCourseType]: parseCategory(category),
        }),
        {
          "sviluppatore-web": parseCategory(courseCategories[0]),
          gratuiti: parseCategory(courseCategories[1]),
          videomakers: parseCategory(courseCategories[2]),
        }
      ),
    [courseCategories, parseCategory]
  )
  return (
    <Stack
      spacing={16}
      sprinkles={{
        width: `full`,
      }}
      direction={{
        mobile: `column`,
        lg: `row`,
      }}
      align="center"
      justify="space-between"
    >
      <CategoryCourseCard background="purple700">
        <CategoryCourseHeader>
          <Body
            variant="xl"
            as="h3"
            fontWeight={600}
            sprinkles={{
              color: `white`,
            }}
          >
            {
              parsedCourseCategoriesLookupTable[
                `sviluppatore-web` as CategoryCourseType
              ].name
            }
          </Body>
          <Body
            variant="md"
            sprinkles={{
              color: `white`,
            }}
          >
            {
              parsedCourseCategoriesLookupTable[
                `sviluppatore-web` as CategoryCourseType
              ].seoDescription
            }
          </Body>
        </CategoryCourseHeader>
        <CategoryCourseImage>
          <StaticImage
            src="../../images/dev_corsi.png"
            alt="logo html javascript e css"
          />
        </CategoryCourseImage>
        <CategoryCourseFooter>
          <SeoLink
            link={parsedCourseCategoriesLookupTable[`sviluppatore-web`].slug}
            isExternal={false}
          >
            <Button colorScheme="theme">Scopri di più</Button>
          </SeoLink>
        </CategoryCourseFooter>
      </CategoryCourseCard>

      <CategoryCourseCard background="yellow200">
        <CategoryCourseHeader>
          <Body variant="xl" as="h3" fontWeight={600}>
            {
              parsedCourseCategoriesLookupTable[
                `videomakers` as CategoryCourseType
              ].name
            }
          </Body>
          <Body variant="md">
            {
              parsedCourseCategoriesLookupTable[
                `videomakers` as CategoryCourseType
              ].seoDescription
            }
          </Body>
        </CategoryCourseHeader>
        <CategoryCourseImage>
          <StaticImage
            src="../../images/videomakers_corsi.png"
            alt="lezioni di videomaking"
          />
        </CategoryCourseImage>
        <CategoryCourseFooter>
          <SeoLink
            link={parsedCourseCategoriesLookupTable.videomakers.slug}
            isExternal={false}
          >
            <Button colorScheme="theme">Scopri di più</Button>
          </SeoLink>
        </CategoryCourseFooter>
      </CategoryCourseCard>

      <CategoryCourseCard background="green20">
        <CategoryCourseHeader>
          <Body variant="xl" as="h3" fontWeight={600}>
            {
              parsedCourseCategoriesLookupTable[
                `gratuiti` as CategoryCourseType
              ].name
            }
          </Body>
          <Body variant="md">
            {
              parsedCourseCategoriesLookupTable[
                `gratuiti` as CategoryCourseType
              ].seoDescription
            }
          </Body>
        </CategoryCourseHeader>
        <CategoryCourseImage>
          <StaticImage
            src="../../images/getting_started.png"
            alt="lezioni di videomaking"
          />
        </CategoryCourseImage>

        <CategoryCourseFooter>
          <SeoLink
            link={parsedCourseCategoriesLookupTable.gratuiti.slug}
            isExternal={false}
          >
            <Button colorScheme="theme">Scopri di più</Button>
          </SeoLink>
        </CategoryCourseFooter>
      </CategoryCourseCard>
    </Stack>
  )
}
