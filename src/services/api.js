export async function getCategories() {
  try {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
    const request = await fetch(endpoint);
    const data = await request.json();
    return data;
  } catch (error) {
    return new Error(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const request = await fetch(endpoint);
    const data = await request.json();
    return data;
  } catch (error) {
    return new Error(error);
  }
}

export async function getProductDetails(productId) {
  try {
    const endpoint = `https://api.mercadolibre.com/items/${productId}`;
    const request = await fetch(endpoint);
    const data = await request.json();
    return data;
  } catch (error) {
    return new Error(error);
  }
}

export async function getProductsFromTerms(query) {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const request = await fetch(endpoint);
    const data = await request.json();
    return data.results;
  } catch (error) {
    return new Error(error);
  }
}
