import React from 'react';
import { Link } from 'gatsby';

import {
  base,
  red,
  outline,
  fill,
  small,
} from './button.module.css';

const Button = ({
  size, color, variant, to, children,
}) => {
  switch (size) {
    case 'small':
      switch (variant) {
        case 'outline':
          switch (color) {
            case 'red':
              return (
                <Link to={to} className={`${base} ${red} ${outline} ${small}`}>
                  {children}
                </Link>
              );
            default:
              return (
                <Link to={to} className={`${base} ${outline} ${small}`}>
                  {children}
                </Link>
              );
          }
        default:
          switch (color) {
            case 'red':
              return (
                <Link to={to} className={`${base} ${fill} ${red} ${small}`}>
                  {children}
                </Link>
              );
            default:
              return (
                <Link to={to} className={`${base} ${fill} ${small}`}>
                  {children}
                </Link>
              );
          }
      }

    default:
      switch (variant) {
        case 'outline':
          switch (color) {
            case 'red':
              return (
                <Link to={to} className={`${base} ${red} ${outline}`}>
                  {children}
                </Link>
              );
            default:
              return (
                <Link to={to} className={`${base} ${red} ${outline}`}>
                  {children}
                </Link>
              );
          }
        default:
          switch (color) {
            case 'red':
              return (
                <Link to={to} className={`${base} ${fill} ${red}`}>
                  {children}
                </Link>
              );
            default:
              return (
                <Link to={to} className={`${base} ${fill}`}>
                  {children}
                </Link>
              );
          }
      }
  }
};

export default Button;
