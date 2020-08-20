import React, { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { useDispatch, useSelector } from 'react-redux';
import { GOOGLE_API_KEY } from 'react-native-dotenv';

import {
  Container,
  Header,
  Wrapper,
  Location,
  Current,
  CurrentTemp,
  RealFeel,
  Description,
} from './styles';

import Daily from '~/components/Daily';
import Details from '~/components/CurrentDetails';

import formatAddress from '~/utils/format_address';
import { updateForecastsRequest } from '~/store/modules/forecasts/actions';

Geocoder.init(GOOGLE_API_KEY);

export default function App() {
  const [address, setAddress] = useState({});
  const current = useSelector(state => state.forecasts.current);
  const dispatch = useDispatch();

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      const { latitude, longitude } = info.coords;
      dispatch(updateForecastsRequest(info.coords));
      Geocoder.from({
        latitude,
        longitude,
      })
        .then(data => {
          const { address_components } = data.results[0];
          const addressFormatted = {};
          formatAddress(address_components, addressFormatted);
          setAddress(addressFormatted);
        })
        .catch(err => console.tron.log(err));
    });
  }, []);

  return (
    <Container>
      <Header>
        <Location>{address.locality || address.area_2}</Location>
      </Header>

      {current && (
        <Wrapper>
          <Description>Céu limpo</Description>

          <Current>
            <CurrentTemp>{Math.round(current.temp)}°c</CurrentTemp>
            <RealFeel>Real feel {Math.round(current.feels_like)}°</RealFeel>
          </Current>

          <Details />
          <Daily />
        </Wrapper>
      )}
    </Container>
  );
}
