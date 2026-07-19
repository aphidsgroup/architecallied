/**
 * Verified site facts. Source: "OFFICE WEBSITE IDEAS AND FORMATS.pptx" (slide 5)
 * and the approved project brief. Items marked `draft: true` are new marketing
 * copy that REQUIRES CLIENT REVIEW before being treated as final (they still
 * render, labelled internally; see CONTENT_REQUIRED.md).
 */

export const site = {
  /** Brand lockup display form (lowercase per supplied brand slides). */
  displayName: "archi-tec allied",
  /** Prose / metadata form. */
  name: "Archi-tec Allied",
  principal: {
    name: "S. Ravikumar",
    qualification: "B.Arch",
    role: "Principal Architect",
  },
  email: "architecallied@gmail.com",
  phone: {
    mobile: { display: "+91 94441 17173", href: "tel:+919444117173" },
    landline: { display: "044-4206 8884", href: "tel:+914442068884" },
  },
  offices: [
    {
      label: "Head Office",
      lines: ["#1, Masilamani Street", "T. Nagar", "Chennai – 600017"],
      city: "Chennai",
      region: "Tamil Nadu",
      country: "IN",
    },
    {
      label: "Branch Office",
      lines: [
        "35C, Jayadurga Nagar",
        "Jharapada, Bhoomikal",
        "Bhubaneswar, Odisha 751010",
      ],
      city: "Bhubaneswar",
      region: "Odisha",
      country: "IN",
    },
  ],
  /** DRAFT positioning copy — requires client review. */
  positioning: {
    draft: true,
    tagline: "Architecture grounded in context, built to endure.",
    description:
      "Archi-tec Allied is an architecture practice led by Principal Architect S. Ravikumar, B.Arch, working from Chennai with a branch office in Bhubaneswar. The practice approaches every commission through its context — site, climate, use and the people it serves.",
  },
  /** Until client publication permissions are confirmed. */
  clientStatement: "Client credentials are available on request.",
} as const;

export const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Expertise", href: "/expertise" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
