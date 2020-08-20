import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  margin: 20px 0;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Sun = styled.View`
  align-items: center;
  width: 50%;
  padding: 10px 30px;
  border-right-width: ${props =>
    props.bordered ? StyleSheet.hairlineWidth : 0}px;
  border-right-color: #fff;
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: 300;
  font-size: 18px;
`;

export const Value = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const Wrapper = styled.View`
  margin-top: 20px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
