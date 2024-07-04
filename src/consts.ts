import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Portfolio",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Badyss Blilita",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Lieux où j'ai étudié",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projets",
  DESCRIPTION: "Projets récents sur lesquelles j'ai travaillé.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Recherche",
  DESCRIPTION: "Rechercher dans tous mes projets.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Accueil", 
    HREF: "/", 
  },

  { 
    TEXT: "Projets", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "badyss.blt@gmail.com",
    HREF: "mailto:badyss.blt@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Badyssblt",
    HREF: "https://github.com/Badyssblt"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Badyss Blilita",
    HREF: "https://www.linkedin.com/in/badyss-blilita-a681502a9/",
  }
]

