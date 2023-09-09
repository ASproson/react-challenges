import { Link } from 'react-router-dom';
import { LINKS } from './lib/NAV_LINKS';

export const NavBar = () => {
  return (
    <div className="ml-2 space-x-2">
      {LINKS.map((link) => {
        return (
          <Link key={link.title} to={link.path}>
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};
