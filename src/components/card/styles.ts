import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 95%;
  height: 110px;
  flex-direction: row;
  margin: 8px;
  background-color: #d0d0d0;
  border-radius: 10px;
  padding: 2px;
`;

export const ContainerText = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 8px;
`;

export const Footer = styled.View`
  flex-direction: row;
  width: 95%;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #111;
`;

export const FooterLabel = styled.Text`
  font-size: 12px;
  color: #111;
`;

export const DateLabel = styled.Text`
  font-size: 12px;
  color: #111;
  text-align: right;
  margin-right: 8px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ThumbnailContainer = styled.View`
  height: 100%;
  width: 25%;
`;
