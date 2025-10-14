// Re-export Tabler icons to centralize imports and make swapping icons easier.
import {
  TbBrandGithub,
  TbBrandGitlab,
  TbBrandLastfm,
  TbBrandLinkedin,
} from "@preact-icons/tb";

import BrandSourcehut from "./BrandSourcehut.tsx";

export const Github = (
  props: { size?: number; className?: string; title?: string },
) => <TbBrandGithub {...props} />;

export const Gitlab = (
  props: { size?: number; className?: string; title?: string },
) => <TbBrandGitlab {...props} />;

export const Lastfm = (
  props: { size?: number; className?: string; title?: string },
) => <TbBrandLastfm {...props} />;

export const LinkedIn = (
  props: { size?: number; className?: string; title?: string },
) => <TbBrandLinkedin {...props} />;

export const Sourcehut = (
  props: { size?: number; className?: string; title?: string },
) => <BrandSourcehut {...props} />;

export default {
  Github,
  Gitlab,
  Lastfm,
  LinkedIn,
  Sourcehut,
};
