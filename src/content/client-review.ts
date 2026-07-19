/**
 * Client publication review pipeline. Source: "OFFICE WEBSITE IDEAS AND
 * FORMATS.pptx" slides 8–9 (visually inspected). See
 * docs/research/client-permissions.md for the full inspection notes.
 *
 * NOTHING in this file is rendered on the website. No client name or logo
 * may be published until status === "approved" is set by Archi-tec Allied
 * after confirming the relationship, the preferred legal/display name and
 * the applicable permission/trademark policy. Corporate and government
 * logos are NOT assumed to be public domain.
 */

export type ClientReviewStatus =
  | "identified-pending-permission" // identity clear; publication permission unconfirmed
  | "identity-requires-confirmation" // partially legible in source slides
  | "approved"; // set only by Archi-tec Allied — none yet

export interface ClientReviewEntry {
  /** Name as read from the slides — NOT a confirmed display name. */
  provisionalName: string;
  sourceSlide: 8 | 9;
  status: ClientReviewStatus;
  notes?: string;
}

export const clientReview: ClientReviewEntry[] = [
  { provisionalName: "Larsen & Toubro", sourceSlide: 8, status: "identified-pending-permission" },
  { provisionalName: "Madras Fertilizers Limited", sourceSlide: 8, status: "identified-pending-permission" },
  { provisionalName: "NatWest", sourceSlide: 8, status: "identified-pending-permission" },
  { provisionalName: "LIC", sourceSlide: 8, status: "identified-pending-permission" },
  { provisionalName: "Repco Bank", sourceSlide: 8, status: "identified-pending-permission" },
  { provisionalName: "Nuclear Power Corporation of India", sourceSlide: 8, status: "identified-pending-permission" },
  { provisionalName: "Indian Bank", sourceSlide: 8, status: "identified-pending-permission" },
  { provisionalName: "Canara Bank", sourceSlide: 8, status: "identified-pending-permission" },
  { provisionalName: "CIPET (Central Institute of Plastics Engineering & Technology)", sourceSlide: 8, status: "identified-pending-permission" },
  { provisionalName: "Consolidated Construction Consortium Ltd", sourceSlide: 8, status: "identified-pending-permission" },
  { provisionalName: "CPCL", sourceSlide: 8, status: "identified-pending-permission" },
  { provisionalName: "BARC", sourceSlide: 8, status: "identified-pending-permission" },
  { provisionalName: "Breeze Hotel", sourceSlide: 8, status: "identified-pending-permission" },
  { provisionalName: "BSNL", sourceSlide: 8, status: "identified-pending-permission" },
  { provisionalName: "Malar Properties", sourceSlide: 8, status: "identified-pending-permission" },
  { provisionalName: "Maharishi Vidya Mandir", sourceSlide: 8, status: "identity-requires-confirmation" },
  { provisionalName: "JAINS (Jain Estates?)", sourceSlide: 8, status: "identity-requires-confirmation" },
  { provisionalName: "RRPL", sourceSlide: 8, status: "identity-requires-confirmation" },
  { provisionalName: "Unidentified mark — slide 8, row 3, item 2", sourceSlide: 8, status: "identity-requires-confirmation" },
  { provisionalName: "Unidentified seal — slide 8, row 5, item 1", sourceSlide: 8, status: "identity-requires-confirmation" },
  { provisionalName: "Punjab National Bank", sourceSlide: 9, status: "identified-pending-permission" },
  { provisionalName: "Yuga Homes Ltd", sourceSlide: 9, status: "identified-pending-permission" },
  { provisionalName: "G. Kuppuswamy Naidu Memorial Hospital", sourceSlide: 9, status: "identified-pending-permission" },
  { provisionalName: "UCAL Fuel Systems Ltd", sourceSlide: 9, status: "identified-pending-permission" },
  { provisionalName: "Periyar Maniammai University", sourceSlide: 9, status: "identified-pending-permission" },
  { provisionalName: "URC", sourceSlide: 9, status: "identified-pending-permission" },
  { provisionalName: "TREC-STEP (Tiruchirappalli Regional Engineering College STEP)", sourceSlide: 9, status: "identified-pending-permission" },
  { provisionalName: "Andhra Bank", sourceSlide: 9, status: "identified-pending-permission" },
  { provisionalName: "Victory Signarts", sourceSlide: 9, status: "identified-pending-permission" },
  { provisionalName: "PARSN", sourceSlide: 9, status: "identity-requires-confirmation" },
  { provisionalName: "GENCO", sourceSlide: 9, status: "identity-requires-confirmation" },
  { provisionalName: "Serene", sourceSlide: 9, status: "identity-requires-confirmation" },
  { provisionalName: "Unidentified crest — slide 9, row 1, item 3", sourceSlide: 9, status: "identity-requires-confirmation" },
  { provisionalName: "Unidentified mark — slide 9, row 2, item 3", sourceSlide: 9, status: "identity-requires-confirmation" },
  { provisionalName: "Unidentified seal — slide 9, row 4, item 1", sourceSlide: 9, status: "identity-requires-confirmation" },
  { provisionalName: "Unidentified crest — slide 9, row 4, item 3", sourceSlide: 9, status: "identity-requires-confirmation" },
];
