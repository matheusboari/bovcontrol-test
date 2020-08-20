import React from 'react';
import { fromUnixTime, format } from 'date-fns';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Details,
  Title,
  Sun,
  Label,
  Value,
  Wrapper,
} from './styles';

const CurrentDetails = () => {
  const current = useSelector(state => state.forecasts.current);

  return (
    <Container>
      <Title>Today&apos;s Details</Title>

      <Details>
        <Sun bordered>
          <Icon name="sunrise" size={24} color="#fff" />
          <Wrapper>
            <Label>Sunrise</Label>
            <Value>{format(fromUnixTime(current.sunrise), 'h:mm aaa')}</Value>
          </Wrapper>
        </Sun>

        <Sun>
          <Icon name="sunset" size={24} color="#fff" />
          <Wrapper>
            <Label>Sunset</Label>
            <Value>{format(fromUnixTime(current.sunset), 'h:mm aaa')}</Value>
          </Wrapper>
        </Sun>
      </Details>
    </Container>
  );
};

export default CurrentDetails;
