export const getDataByQuery = (data, queryObj) => {
    const {continent, country, is_open_to_public} = queryObj

    if (continent) {
       data = data.filter(
         (destination) =>
           destination.continent.toLowerCase() === continent.toLowerCase(),
       );
     }

    if (continent) {
        data = data.filter(
          (destination) =>
            destination.country.toLowerCase() === country.toLowerCase(),
        );
     }

    if (continent) {
         data = data.filter(
           (destination) =>
             destination.is_open_to_public === JSON.parse(is_open_to_public.toLowerCase())
         );
    }

    return data
}


