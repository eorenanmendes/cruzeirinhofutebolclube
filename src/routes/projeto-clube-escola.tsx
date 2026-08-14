import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projeto-clube-escola')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/projeto-clube-escola"!</div>
}
