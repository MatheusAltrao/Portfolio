import { Computer, Pyramid, Shield, User } from 'lucide-react';
import { v4 as uuid } from 'uuid';
import * as imports from './imports';

export const techs = [
  {
    id: uuid(),
    type: 'image',
    name: 'HTML',
    width: 50,
    height: 50,
    delay: 100,
    image: imports.LogoHtml,
  },
  {
    id: uuid(),
    type: 'image',
    name: 'CSS',
    width: 50,
    height: 50,
    delay: 100,
    image: imports.LogoCss,
  },
  {
    id: uuid(),
    type: 'image',
    name: 'SASS',
    width: 50,
    height: 50,
    delay: 100,
    image: imports.LogoSass,
  },
  {
    id: uuid(),
    type: 'image',
    name: 'Tailwind',
    width: 50,
    height: 50,
    delay: 100,
    image: imports.LogoTailwind,
  },
  {
    id: uuid(),
    type: 'image',
    name: 'Javascript',
    width: 50,
    height: 50,
    delay: 100,
    image: imports.LogoJavascript,
  },

  {
    id: uuid(),
    type: 'image',
    name: 'Typescript',
    width: 50,
    height: 50,
    delay: 100,
    image: imports.LogoTs,
  },
  {
    id: uuid(),
    type: 'image',
    name: 'ReactJs',
    width: 50,
    height: 50,
    delay: 100,
    image: imports.LogoReactjs,
  },
  {
    id: uuid(),
    type: 'image',
    name: 'NextJs',
    width: 50,
    height: 50,
    delay: 100,
    image: imports.LogoNextjs,
  },
  {
    id: uuid(),
    type: 'icon',
    name: 'NextAuth',
    width: 50,
    height: 50,
    delay: 100,
    image: (
      <Shield
        strokeWidth={1}
        size={52}
      />
    ),
  },
  {
    id: uuid(),
    type: 'image',
    name: 'Firebase',
    width: 50,
    height: 50,
    delay: 100,
    image: imports.LogoFirebase,
  },
  {
    id: uuid(),
    type: 'image',
    name: 'Supabase',
    width: 50,
    height: 50,
    delay: 100,
    image: imports.LogoSupabase,
  },

  {
    id: uuid(),
    type: 'image',
    name: 'MongoDB',
    width: 50,
    height: 50,
    delay: 100,
    image: imports.LogoMongoDB,
  },
  {
    id: uuid(),
    type: 'icon',
    name: 'Prisma',
    width: 50,
    height: 50,
    delay: 100,
    image: (
      <Pyramid
        strokeWidth={1}
        size={52}
      />
    ),
  },
  {
    id: uuid(),
    type: 'image',
    name: 'Axios',
    width: 50,
    height: 50,
    delay: 100,
    image: imports.LogoAxios,
  },
  {
    id: uuid(),
    type: 'image',
    name: 'Docker',
    width: 50,
    height: 50,
    delay: 100,
    image: imports.LogoDocker,
  },
  {
    id: uuid(),
    type: 'image',
    name: 'Git',
    width: 50,
    height: 50,
    delay: 100,
    image: imports.LogoGit,
  },

  {
    id: uuid(),
    type: 'image',
    name: 'Figma',
    width: 50,
    height: 50,
    delay: 100,
    image: imports.LogoFigma,
  },
  {
    id: uuid(),
    type: 'icon',
    name: 'UI',
    width: 50,
    height: 50,
    delay: 100,
    image: (
      <Computer
        strokeWidth={1}
        size={52}
      />
    ),
  },
  {
    id: uuid(),
    type: 'icon',
    name: 'UX',
    width: 50,
    height: 50,
    delay: 100,
    image: (
      <User
        strokeWidth={1}
        size={52}
      />
    ),
  },
  {
    id: uuid(),
    type: 'image',
    name: 'GSAP',
    width: 50,
    height: 50,
    delay: 100,
    image: imports.LogoGsap,
  },
];
