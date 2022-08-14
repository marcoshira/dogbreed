import { Menu } from '../../components/Menu';
import { NavLinksProps } from '../../components/NavLinks';
import * as Styled from './styles';
import { Wrapper } from '../../components/Wrapper';
import { ListIndexProps } from '../../pages/list';
import { useEffect, useState } from 'react';
import { PhotoGrid } from '../../components/PhotoGrid';

export function List({
  links = [],
  list = [],
}: NavLinksProps & ListIndexProps) {
  const [listSelected, setListSelected] = useState<string[]>([]);

  useEffect(() => {
    setListSelected(list);
  }, [list]);
  return (
    <Styled.Wrapper>
      <Menu links={links} />
      <Wrapper>
        <PhotoGrid list={listSelected} />
      </Wrapper>
    </Styled.Wrapper>
  );
}
