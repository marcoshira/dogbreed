/* istanbul ignore file */
import { useState } from 'react';
import { ModalOrder } from '../ModalOrder';
import { PhotoCard } from '../PhotoCard';
import * as Styled from './styles';

export type PhotoGridProps = {
  list: string[];
};
export const PhotoGrid = ({ list }: PhotoGridProps) => {
  const [modalItem, setModalItem] = useState<string>();
  const [modalVisible, setModalVisible] = useState(false);

  const handleClick = async (id) => {
    setModalItem(list[id]);
    setModalVisible(true);
  };

  return (
    <Styled.Wrapper>
      {list.map((item, index) => (
        <PhotoCard
          key={index}
          srcImg={item}
          onClick={() => handleClick(index)}
        />
      ))}
      {modalVisible && (
        <ModalOrder
          isOpen={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          srcImg={modalItem}
        />
      )}
    </Styled.Wrapper>
  );
};
