import React from 'react';
import * as Icons from 'lucide-react';

interface IconHelperProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconHelper: React.FC<IconHelperProps> = ({
  name,
  className = 'w-5 h-5',
  size = 20,
}) => {
  // @ts-ignore
  const IconComponent = Icons[name] || Icons.Globe;
  return <IconComponent className={className} size={size} />;
};
