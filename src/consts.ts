export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'Thoughts.',
  DESCRIPTION:
    'a journey into marvels of science and arts.',
  EMAIL: 'adyanshmishra@proton.me',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://anonscholar.github.io',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
  { href: '/handouts', label: 'handouts' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/Anonscholar', label: 'GitHub' },
  { href: 'adyanshmishra@proton.me', label: 'Email' },
]
