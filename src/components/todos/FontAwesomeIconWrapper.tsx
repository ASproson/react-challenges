import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface FontAwesomeIconWrapperProps {
  icon: IconDefinition;
  color?: string;
}

export const FontAwesomeIconWrapper = ({
  icon,
  color,
}: FontAwesomeIconWrapperProps) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={clsx(
        'hover:scale-125 transition ease-in-out',
        color && `text-${color}-500`
      )}
    />
  );
};
