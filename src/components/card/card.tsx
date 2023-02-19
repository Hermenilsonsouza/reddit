import React from 'react';
import {CardProps} from './types';
import moment from 'moment';
import * as S from './styles';

const Card: React.FC<CardProps> = ({
  authorFullname,
  title,
  numComments,
  ups,
  url,
  created,
}: CardProps) => {
  return (
    <S.Container>
      <S.ThumbnailContainer>
        {url && <S.Image testID="image" source={{uri: url}} />}
      </S.ThumbnailContainer>
      <S.ContainerText>
        <S.DateLabel testID="date">{moment(created).calendar()}</S.DateLabel>
        <S.Title numberOfLines={2}>{title}</S.Title>
        <S.Footer>
          <S.FooterLabel>{authorFullname}</S.FooterLabel>
          <S.FooterLabel>Score: {ups}</S.FooterLabel>
          <S.FooterLabel>{numComments} comments</S.FooterLabel>
        </S.Footer>
      </S.ContainerText>
    </S.Container>
  );
};

export default Card;
