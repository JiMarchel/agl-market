import { Header } from '#/features/platform/components/header'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/platform/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <><Header /></>
}
