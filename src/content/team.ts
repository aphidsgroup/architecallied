/**
 * Team content. Only verified people may appear. Currently only the
 * Principal Architect is verified (pptx slide 5). No biography or portrait
 * has been supplied, so /about/principal and /about/people must NOT be
 * created yet (see CONTENT_REQUIRED.md).
 */

export interface TeamMember {
  name: string;
  qualification?: string;
  role: string;
  /** Biography and portrait must be supplied and verified before publication. */
  bio?: string;
  portrait?: { src: string; alt: string; width: number; height: number };
  verified: boolean;
}

export const team: TeamMember[] = [
  {
    name: "S. Ravikumar",
    qualification: "B.Arch",
    role: "Principal Architect",
    verified: true,
  },
];
