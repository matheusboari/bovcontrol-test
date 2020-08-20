import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const List = styled.View`
  width: 100%;
`;

export const Day = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #fff;
`;

export const Date = styled.Text`
  color: #fff;
`;

export const TempWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Temp = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

export const Humidity = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #fff;
  margin: 0 5px;
`;

export const IconWeather = styled.Image`
  width: 50px;
  height: 50px;
`;
