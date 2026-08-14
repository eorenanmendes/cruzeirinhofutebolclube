import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/jiu-jitsu')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/jiu-jitsu"!</div>
}
