import { Platform, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background: #45a1cd;
`;

export const Header = styled.View`
  align-items: center;
  padding: 20px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #fff;
`;

export const Location = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const Wrapper = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  width: 100%;
`;

export const Current = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;

export const CurrentTemp = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 46px;
  margin-bottom: 5px;
`;

export const RealFeel = styled.Text`
  color: #fff;
  font-weight: 300;
  font-size: 20px;
`;

export const Description = styled.Text`
  font-size: 24px;
  color: #fff;
  margin: 20px 0;
`;
