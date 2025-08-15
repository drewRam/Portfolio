import React from 'react';
import { IconGitHub, IconStar, IconFork } from './Icons';

interface IconProps {
  name: string;
}

const IconMap: Record<string, React.FC> = {
    Fork: IconFork,
    Github: IconGitHub,
    Star: IconStar,
};

const Icon: React.FC<IconProps> = ({ name }) => {
  const Component = IconMap[name];
  return Component ? <Component /> : null;
};

export default Icon;