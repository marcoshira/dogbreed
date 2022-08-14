import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ListIndexProps } from '../../pages/list';
import * as Styled from './styles';

export type MenuLinkProps = {
  id?: string;
  children: ReactNode;
  link?: string;
  newTab?: boolean;
  onClick?: (params: string) => ListIndexProps | void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const MenuLink = ({
  children,
  link,
  newTab = false,
  onClick,
}: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';

  const handleClick = () => {
    /* istanbul ignore else */
    if (onClick) {
      onClick(link);
    }
  };

  return (
    <Styled.Container onClick={() => handleClick()} target={target}>
      {children}
    </Styled.Container>
  );
};
