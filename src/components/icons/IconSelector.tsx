import React from 'react';
import { IconGitHub, IconStar, IconFork, IconLinkedin } from './Icons';

interface IconProps {
  name: string;
}

const IconMap: Record<string, React.FC> = {
    Fork: IconFork,
    GitHub: IconGitHub,
    Star: IconStar,
    Linkedin: IconLinkedin,
};

const Icon: React.FC<IconProps> = ({ name }) => {
  const Component = IconMap[name];
  return Component ? <Component /> : null;
};

export default Icon;