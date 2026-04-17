type UnknownRecord = Record<string, unknown>;

const isString = (value: unknown): value is string => typeof value === "string" && value.length > 0;

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(isString);
}

function isObject(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null;
}

export type NavItem = {
  href: string;
  label: string;
  sectionId: string;
};

export type Capability = {
  title: string;
  detail: string;
  metric: string;
};

export type CaseStudyMedia =
  | {
      kind: "video";
      src: string;
      poster: string;
      aspectRatio: "16:9";
      alt: string;
    }
  | {
      kind: "image";
      src: string;
      aspectRatio: "4:3";
      alt: string;
    };

export type CaseStudy = {
  title: string;
  type: string;
  summary: string;
  mediaLabel: string;
  media: CaseStudyMedia;
};

export type SiteContent = {
  navItems: NavItem[];
  transformationSteps: string[];
  capabilities: Capability[];
  caseStudies: CaseStudy[];
  whyMoxera: string[];
};

function isNavItem(value: unknown): value is NavItem {
  return isObject(value) && isString(value.href) && isString(value.label) && isString(value.sectionId);
}

function isCapability(value: unknown): value is Capability {
  return isObject(value) && isString(value.title) && isString(value.detail) && isString(value.metric);
}

function isCaseMedia(value: unknown): value is CaseStudyMedia {
  if (!isObject(value) || !isString(value.kind) || !isString(value.src) || !isString(value.alt)) return false;

  if (value.kind === "video") {
    return value.aspectRatio === "16:9" && isString(value.poster);
  }

  if (value.kind === "image") {
    return value.aspectRatio === "4:3";
  }

  return false;
}

function isCaseStudy(value: unknown): value is CaseStudy {
  return (
    isObject(value) &&
    isString(value.title) &&
    isString(value.type) &&
    isString(value.summary) &&
    isString(value.mediaLabel) &&
    isCaseMedia(value.media)
  );
}

export function assertSiteContent(value: unknown): asserts value is SiteContent {
  if (!isObject(value)) {
    throw new Error("site-content.json must be an object");
  }

  const { navItems, transformationSteps, capabilities, caseStudies, whyMoxera } = value;
  if (!Array.isArray(navItems) || !navItems.every(isNavItem)) throw new Error("Invalid navItems schema");
  if (!isStringArray(transformationSteps)) throw new Error("Invalid transformationSteps schema");
  if (!Array.isArray(capabilities) || !capabilities.every(isCapability)) throw new Error("Invalid capabilities schema");
  if (!Array.isArray(caseStudies) || !caseStudies.every(isCaseStudy)) throw new Error("Invalid caseStudies schema");
  if (!isStringArray(whyMoxera)) throw new Error("Invalid whyMoxera schema");
}
