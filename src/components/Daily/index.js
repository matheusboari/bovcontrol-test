import React from 'react';
import { fromUnixTime, format } from 'date-fns';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import {
  List,
  Day,
  Date,
  Temp,
  Humidity,
  Value,
  IconWeather,
  TempWrapper,
} from './styles';

const Daily = () => {
  const daily = useSelector(state => state.forecasts.daily);

  return daily.map(day => (
    <List key={day.dt}>
      <Day>
        <Date>{format(fromUnixTime(day.dt), 'EEEEE d')}</Date>
        <IconWeather
          source={{
            uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
          }}
        />

        <TempWrapper>
          <Temp>
            <Value>{Math.round(day.temp.max)}°</Value>
            <Icon name="arrowup" size={14} color="#F45D4C" />
          </Temp>
          <Temp>
            <Value>{Math.round(day.temp.min)}°</Value>
            <Icon name="arrowdown" size={14} color="#A1DBB2" />
          </Temp>
        </TempWrapper>

        <Humidity>
          <Ionicons name="water-outline" size={14} color="#fff" />
          <Value>{day.humidity}%</Value>
        </Humidity>
      </Day>
    </List>
  ));
};

export default Daily;
