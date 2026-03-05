import form2querystring from "./form2querystring";

const formatUrl = (uiFilter) => {
  const { conn, inputs } = uiFilter;

  let ret = {
    sourceUrl: "http://www.edr-edr.it/edr_programmi/edr_api.php?ancient_city=roma",
    options: {},
  };

  // 🔹 Processa i filtri avanzati con form2querystring
  const filterQuery = form2querystring(conn, inputs);

  // 🔹 Verifica che ci siano filtri validi
  if (filterQuery && Object.keys(filterQuery).length > 0) {
    const serializedQuery = Object.entries(filterQuery)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    ret.sourceUrl += `&${serializedQuery}`;
  }

  return ret;
};

export default formatUrl;
