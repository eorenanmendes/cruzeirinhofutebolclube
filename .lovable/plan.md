# Plan: New Independent Project Mini-sites

Create three professional independent mini-sites for Cruzeirinho's core projects: Social, Jiu-Jitsu, and Clube Escola.

## User Interface & Design

### Main Page Update (`src/routes/index.tsx`)
- Replace or transform "Nossos Projetos" section.
- Add three distinct cards for:
  - PROJETO SOCIAL
  - 🥋 JIU-JITSU
  - ⚽ PROJETO CLUBE ESCOLA
- Configure each card to open its respective route in a new tab (`target="_blank"`).

### New Routes
Create three new independent route files:
1. `src/routes/projeto-social.tsx`
2. `src/routes/jiu-jitsu.tsx`
3. `src/routes/projeto-clube-escola.tsx`

### Mini-site structure (for each route)
Each page will have a unique identity but share a common high-quality structure:
- **Unique Header**: Specific logo/name, internal navigation (Sobre, Projeto, Galeria, Contato), and a "Voltar ao Cruzeirinho" button.
- **Hero Section**: High-impact large image, strong title, subtitle, and CTA.
- **Narrative Flow**: About -> Purpose/Methodology -> Objectives -> Activities -> Team -> Premium Gallery -> Info/Contact.
- **Premium Gallery**: Unique asymmetric grid with hover effects and smooth transitions.
- **Animations**: Subtle Framer Motion entries (fade, slide, scale) and discrete parallax.
- **Responsiveness**: Tailored layouts for Mobile, Tablet, and Desktop.

## Technical Details

### Identities
- **Projeto Social**: Human, Inspiring, Community-focused. Warm colors, educational imagery.
- **Jiu-Jitsu**: Strong, Intense, Premium, Disciplined. High-contrast sports aesthetic.
- **Projeto Clube Escola**: Dynamic, Professional, Young. Soccer-centric, high-performance vibe.

### Implementation steps
1.  **Shared Components**: Create generic but highly customizable components for the common sections (Hero, Gallery, CTA) to maintain code quality while allowing visual divergence.
2.  **Asset Management**: Set up placeholder image constants for easy replacement later.
3.  **Layout Implementation**: Build each route with its specific identity (colors, fonts, layout patterns).
4.  **Integration**: Update the landing page to link to these new routes.

## Verification Plan
- Check mobile responsiveness for each new mini-site.
- Verify "target=_blank" behavior on main page links.
- Ensure "Voltar ao Cruzeirinho" links work correctly.
- Test scroll animations and gallery transitions.
