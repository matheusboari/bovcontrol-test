export default (array, address) => {
  return array.forEach(detail => {
    detail.types.map(type => {
      switch (type) {
        case 'street_number': {
          address.street_number = detail.long_name;
          break;
        }
        case 'route': {
          address.route = detail.long_name;
          break;
        }
        case 'locality': {
          address.locality = detail.long_name;
          break;
        }
        case 'administrative_area_level_1': {
          address.area_1 = detail.short_name;
          break;
        }
        case 'administrative_area_level_2': {
          address.area_2 = detail.short_name;
          break;
        }
        case 'country': {
          address.country = detail.short_name;
          break;
        }
        case 'postal_code': {
          address.postal_code = detail.short_name;
          break;
        }
      }
    });
  });
};
