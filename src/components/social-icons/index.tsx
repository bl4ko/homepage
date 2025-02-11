import {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  X,
  Threads,
  Instagram,
  Medium,
} from './icons';

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  x: X,
  threads: Threads,
  instagram: Instagram,
  medium: Medium,
};

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (
    !href ||
    (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-700 dark:text-gray-200`}
        style={{ height: size, width: size }}
      />
    </a>
  );
};

export default SocialIcon;
