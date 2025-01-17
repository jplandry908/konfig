import { PortalState } from '@/components/DemoPortal'
import { useWindowScroll } from '@mantine/hooks'
import { NextRouter } from 'next/router'
import { useState } from 'react'

export function navigateToDemo({
  demoId,
  demoIndex,
  organizationId,
  portal,
  router,
  sandbox,
  omitOwnerAndRepo,
}: {
  demoIndex: number
  organizationId: string
  demoId: string
  router: NextRouter
  portal: PortalState
  sandbox: boolean | undefined
  omitOwnerAndRepo: boolean
}) {
  portal.setCurrentDemoIndex(demoIndex)

  if (!sandbox) {
    const suffix = `/demo/${demoId}`
    const newUrl = omitOwnerAndRepo
      ? suffix
      : `/${organizationId}/${portal.id}${suffix}`

    if (omitOwnerAndRepo) {
      // NOTE: this hack triggers a re-render so when we
      // navigate through demos the page actually changes
      history.replaceState({}, '', newUrl)
      portal.forceRender()
      // force scroll to top using native DOM APIs
      window.scrollTo(0, 0)
    } else {
      router.replace(newUrl, undefined, {
        shallow: true,
        scroll: true,
      })
    }
  } else {
    // NOTE: this triggers a re-render so when we
    // navigate through demos the page actually changes
    router.replace('/sandbox', undefined, {
      shallow: true,
      scroll: true,
    })
  }
}
