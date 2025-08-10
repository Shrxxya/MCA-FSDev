function getDataByQueryParams(data, queryObj){
   if (!Array.isArray(data)) {
    data = [];
  }
  const { category, is_available, species_applicable } = queryObj

  if (category) {
    data = data.filter(product =>
      product.category.toLowerCase() === category.toLowerCase()
    )
  }

  if (is_available) {
    data = data.filter(product =>
      product.is_available.toLowerCase() === is_available.toLowerCase()
    )
  }

  if (species_applicable) {
    data = data.filter(product =>
      product.species_applicable
        .map(species => species.toLowerCase())
        .includes(species_applicable.toLowerCase())
    );
  }

  return data
} 

module.exports= getDataByQueryParams;