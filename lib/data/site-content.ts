import rawSiteContent from "@/content/site-content.json";
import { assertSiteContent } from "@/lib/data/site-content-schema";

assertSiteContent(rawSiteContent);

export type { CaseStudy, CaseStudyMedia, Capability, NavItem, SiteContent } from "@/lib/data/site-content-schema";

export const navItems = rawSiteContent.navItems;
export const transformationSteps = rawSiteContent.transformationSteps;
export const capabilities = rawSiteContent.capabilities;
export const caseStudies = rawSiteContent.caseStudies;
export const whyMoxera = rawSiteContent.whyMoxera;
