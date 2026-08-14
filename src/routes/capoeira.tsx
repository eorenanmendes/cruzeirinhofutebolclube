import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/capoeira')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/capoeira"!</div>
}
