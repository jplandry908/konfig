import {
  Affix,
  HoverCard,
  ThemeIcon,
  AppShell,
  Text,
  Navbar,
  Stack,
  NavLink,
  useMantineColorScheme,
  useMantineTheme,
  Box,
  Divider,
  rem,
  SegmentedControl,
  ScrollArea,
} from '@mantine/core'
import { IconBug, IconSettings2 } from '@tabler/icons-react'
import { observer } from 'mobx-react'
import { useState, createContext, Fragment } from 'react'
import DemoMarkdown, { DemoState } from './DemoMarkdown'
import { makeAutoObservable } from 'mobx'
import { useRouter } from 'next/router'
import { api } from '@/utils/api'
import { v4 as uuid } from 'uuid'
import { Demo } from '@/utils/demos'
import { DemoSiblings, Sibling } from './DemoSiblings'
import { navigateToDemo } from '@/utils/navigate-to-demo'
import { DemoSocials } from './DemoSocials'
import { DemoTableOfContents } from './DemoTableOfContents'
import { DemoEditThisPage } from './DemoEditThisPage'
import { DemoLastRan } from './DemoLastRan'
import { DemoHeader } from './DemoHeader'
import type {
  KonfigYamlCommonType,
  SocialObject,
} from 'konfig-lib/dist/KonfigYamlCommon'
import Head from 'next/head'
import { NAVBAR_WIDTH } from './ReferenceNavbar'
import { proseContainerWidthStyles } from '@/utils/prose-container-width-styles'
import { FlexCenter } from '@/components/FlexCenter'
import { navLinkColor } from '@/utils/nav-link-color'
import { asideOffsetBreakpoint } from '@/utils/aside-offset-breakpoint'
import { navbarOffsetBreakpoint } from '@/utils/navbar-offset-breakpoint'
import type { GenerateLogoLinkResponse } from '@/utils/generate-logo-link'
import { useNavbarStyles } from '@/utils/use-navbar-styles'
import { NavbarSectionLabel } from './NavbarSectionLabel'
import { navbarLinkColor } from './NavbarLink'
import { MarkdownPageProps } from '@/utils/generate-props-for-markdown-page'
import { generateHtmlTitle } from '@/utils/generate-html-title'

type DemosInput = Demo[]

type Demos = DemoState[]

export class PortalState {
  demos: Demos
  showCode = false
  id: string
  uuid = uuid()
  portalName: string
  portalTitle: string | null
  currentDemoIndex: number
  organizationId: string
  portalId: string
  currentDemo: DemoState
  mainBranch?: string
  socials?: SocialObject

  dummyState = false

  constructor({
    demos,
    portalName,
    id,
    organizationId,
    portalId,
    demoId,
    socials,
    mainBranch,
    portalTitle,
    omitOwnerAndRepo,
  }: {
    demos: DemosInput
    portalName: string
    id: string
    organizationId: string
    portalId: string
    demoId: string
    socials?: SocialObject
    mainBranch?: string
    portalTitle: string | null
    omitOwnerAndRepo: boolean
  }) {
    makeAutoObservable(this)
    this.socials = socials
    this.portalTitle = portalTitle
    this.id = id
    this.portalId = portalId
    this.mainBranch = mainBranch
    this.organizationId = organizationId
    this.demos = demos.map(
      ({ name, markdown, id, showCode, metaDescription }) =>
        new DemoState({
          markdown,
          name,
          portal: this,
          id,
          showCode: showCode ?? undefined,
          owner: organizationId,
          repo: portalId,
          metaDescription,
          omitOwnerAndRepo,
        })
    )

    this.currentDemoIndex = this.demos.findIndex((demo) => demo.id === demoId)
    if (this.currentDemoIndex === -1)
      throw Error(`Could not find demo with id ${demoId}`)
    this.currentDemo = this.demos[this.currentDemoIndex]

    if (demos[this.currentDemoIndex].showCode) this.setShowCode(true)

    this.portalName = portalName

    // Only start intervals in browser
    if (typeof window !== 'undefined') {
      setInterval(async () => {
        const activeSessions = this.demos.filter(
          ({ sessionId }) => sessionId !== null
        )
        if (activeSessions.length === 0) return
        const { lastSuccessfulExecutions } = await api.pingSessions.query({
          sessions: activeSessions.map((demo) => {
            if (demo.sessionId === null)
              throw Error('Demo sessions must be active')
            if (demo.portal === undefined) throw Error("Demo's portal missing")
            return {
              sessionId: demo.sessionId,
              organizationId: demo.portal.organizationId,
              portalId: demo.portal.id,
              demoId: demo.id,
            }
          }),
        })
        lastSuccessfulExecutions.forEach(({ demoId, when }) => {
          if (when === undefined) return
          this.demos
            .find((demo) => demo.id === demoId)
            ?.setLastSuccessfulExecution(new Date(when))
        })
      }, 30000)
    }
  }

  forceRender() {
    this.dummyState = !this.dummyState
  }

  setShowCode(value: boolean) {
    this.showCode = value
  }

  setCurrentDemoIndex(index: number) {
    this.currentDemoIndex = index
    this.currentDemo = this.demos[this.currentDemoIndex]
  }
}

export const SandboxContext = createContext<boolean>(false)

export const DemoPortal = observer(
  ({
    state,
    sandbox,
    refreshSandbox,
    hasDocumentation,
    omitOwnerAndRepo,
    owner,
    repo,
    logo,
    allMarkdown,
    cta,
  }: {
    state: PortalState
    sandbox?: boolean
    refreshSandbox?: () => void
    hasDocumentation: boolean
    omitOwnerAndRepo: boolean
    owner: string
    allMarkdown: MarkdownPageProps['allMarkdown']
    repo: string
    logo: GenerateLogoLinkResponse
    cta: NonNullable<KonfigYamlCommonType['portal']>['cta'] | null
  }) => {
    const theme = useMantineTheme()
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const [opened, setOpened] = useState(false)
    const router = useRouter()

    // This is a hack to force a re-render when the demo state changes
    // We need to access dummyState to tell MobX to track it
    state.dummyState

    const navbar = useNavbarStyles()

    return (
      <SandboxContext.Provider value={!!sandbox}>
        {sandbox && (
          <Affix position={{ bottom: '0.5rem', right: '1rem' }}>
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <ThemeIcon size="xs" color="gray">
                  <IconBug />
                </ThemeIcon>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  {JSON.stringify(
                    state.demos.map((demo) => ({
                      name: demo.name,
                      sessionId: demo.sessionId,
                    })),
                    undefined,
                    2
                  )}
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Affix>
        )}
        <AppShell
          asideOffsetBreakpoint={asideOffsetBreakpoint}
          navbarOffsetBreakpoint={navbarOffsetBreakpoint}
          styles={{
            main: {
              background:
                colorScheme === 'dark' ? theme.colors.dark[8] : undefined,
            },
          }}
          navbar={
            <Navbar
              hiddenBreakpoint={navbarOffsetBreakpoint}
              hidden={!opened}
              width={{ [navbarOffsetBreakpoint]: NAVBAR_WIDTH }}
              className={navbar.classes.navbar}
              sx={
                {
                  // height:
                  //   'calc(100% - var(--mantine-header-height, 0rem) - var(--mantine-footer-height, 0rem));',
                }
              }
            >
              <ScrollArea>
                <Navbar.Section pt="xl">
                  <Box px="sm">
                    <NavbarSectionLabel Logo={IconSettings2}>
                      Settings
                    </NavbarSectionLabel>
                    <Box px="sm">
                      <SegmentedControl
                        size="xs"
                        color="brand"
                        value={state.showCode ? 'show-code' : 'hide-code'}
                        w="100%"
                        bg={
                          theme.colorScheme === 'dark'
                            ? theme.colors.gray[9]
                            : theme.colors.gray[3]
                        }
                        styles={{
                          label: {
                            fontSize: `${rem(11)} !important`,
                          },
                        }}
                        data={[
                          { label: 'Hide Code', value: 'hide-code' },
                          { label: 'Show Code', value: 'show-code' },
                        ]}
                        onChange={(value) => {
                          state.setShowCode(value === 'show-code')
                        }}
                      />
                    </Box>
                  </Box>
                  <Divider mt="xl" mx="xs" />
                </Navbar.Section>
                <Navbar.Section px="md" py="xl" grow>
                  <Stack spacing={0}>
                    {state.demos.map(({ name }, i) => {
                      const isCurrentlySelected = state.currentDemoIndex === i
                      return (
                        <NavLink
                          key={name}
                          onClick={() => {
                            setOpened(false)
                            navigateToDemo({
                              omitOwnerAndRepo,
                              demoId: state.demos[i].id,
                              demoIndex: i,
                              organizationId: state.organizationId,
                              portal: state,
                              router,
                              sandbox,
                            })
                          }}
                          styles={{
                            label: {
                              color: navbarLinkColor({
                                active: isCurrentlySelected,
                                theme,
                              }),
                            },
                          }}
                          label={name}
                          active={isCurrentlySelected}
                        />
                      )
                    })}
                  </Stack>
                </Navbar.Section>
              </ScrollArea>
            </Navbar>
          }
          aside={<DemoTableOfContents demoDiv={state.currentDemo.demoDiv} />}
          header={
            <DemoHeader
              owner={owner}
              repo={repo}
              omitOwnerAndRepo={omitOwnerAndRepo}
              hasDocumentation={hasDocumentation}
              allMarkdown={allMarkdown}
              demos={state.demos.map((demo) => demo.id)}
              opened={opened}
              setOpened={setOpened}
              state={state}
              sandbox={sandbox}
              logo={logo}
              cta={cta}
            />
          }
        >
          <FlexCenter>
            {/* We have to render all demos states at the start so they can each initialize their cells */}
            {state.demos.map((demo, i) => {
              const previousDemoState: DemoState | undefined =
                i === 0 ? undefined : state.demos[i - 1]
              const nextDemoState: DemoState | undefined =
                i === state.demos.length - 1 ? undefined : state.demos[i + 1]

              const previous: Sibling | undefined =
                previousDemoState === undefined ||
                previousDemoState.portal === undefined
                  ? undefined
                  : {
                      title: previousDemoState.name,
                      organizationId: previousDemoState.portal.organizationId,
                      demoId: previousDemoState.id,
                      demoIndex: i - 1,
                    }
              const next: Sibling | undefined =
                nextDemoState === undefined ||
                nextDemoState.portal === undefined
                  ? undefined
                  : {
                      title: nextDemoState.name,
                      demoIndex: i + 1,
                      organizationId: nextDemoState.portal.organizationId,
                      demoId: nextDemoState.id,
                    }
              return (
                <Fragment key={i}>
                  {state.currentDemoIndex === i && (
                    <Head>
                      <title>
                        {generateHtmlTitle({
                          siteTitle: state.portalTitle,
                          pageTitle: demo.name,
                        })}
                      </title>
                      <meta
                        property="og:title"
                        content={generateHtmlTitle({
                          siteTitle: state.portalTitle,
                          pageTitle: demo.name,
                        })}
                      />
                      <meta name="description" content={demo.metaDescription} />
                      <meta
                        property="og:description"
                        content={demo.metaDescription}
                      />
                    </Head>
                  )}
                  <Box
                    display={state.currentDemoIndex !== i ? 'none' : undefined}
                    mt="sm"
                    key={demo.name}
                    {...proseContainerWidthStyles}
                  >
                    <DemoLastRan demo={demo} />
                    <DemoMarkdown state={demo} />
                    <Box my={rem(40)}>
                      <DemoEditThisPage portalState={state} />
                    </Box>
                    <DemoSiblings
                      omitOwnerAndRepo={omitOwnerAndRepo}
                      portal={state}
                      previous={previous}
                      next={next}
                    />
                    <Divider mt={rem(60)} />
                    <Box my={rem(20)}>
                      <DemoSocials socials={state.socials} />
                    </Box>
                  </Box>
                </Fragment>
              )
            })}
          </FlexCenter>
        </AppShell>
      </SandboxContext.Provider>
    )
  }
)
