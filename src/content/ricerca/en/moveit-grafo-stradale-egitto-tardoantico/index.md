---
title: ⲘⲞvⲈⲒⲦ Road network graph of Late Antique and Medieval Egypt
date: 2022-02-04
order: 6
img: moveit.jpg
description: This post describes the MOvEIT project, a digital road network graph connecting the sites of the PAThs Atlas for Late Antique and Medieval Egypt. It presents the GIS technologies used, the resources available for download and the applications for historical and archaeological research.
---

ⲘⲞvⲈⲒⲦ is a road network graph connecting all the sites of the PAThs atlas, and is a play on words: in Coptic ⲙⲟⲉⲓⲧ means “road, path”, but the logo also evokes the English expression “move it”!

The graph was built in a GIS environment and is [available for download](https://github.com/paths-erc/moveit/blob/master/src/geojson/arcs.geojson). GeoJSON Path Finder was used to calculate the shortest paths ([code](https://github.com/perliedman/geojson-path-finder), [site/demo](https://www.liedman.net/geojson-path-finder/)). [LeafletJS](https://leafletjs.com/) was used for the map, with the [Digital Atlas of the Roman Empire](https://imperium.ahlfeldt.se/), currently hosted by the University of Gothenburg in Sweden, as the base map.

Since the PAThs Atlas is continuously updated and expanded, this application too will be regularly updated.

## Resources

- URL of the road network graph: [https://paths-erc.eu/road-network/](https://paths-erc.eu/road-network/)

- Source code: [https://github.com/paths-erc/moveit](https://github.com/paths-erc/moveit)

- GeoJSON Path Finder, source code: [https://github.com/perliedman/geojson-path-finder](https://github.com/perliedman/geojson-path-finder) 

- Scientific article: J. Bogdani. 2024. “MOvEIT: a Proof of Concept of a Road Graph for Late Antique Egypt.” _Groma. Documenting Archaeology_, 7 (2022). DOI: [https://doi.org/10.32028/Groma-Issue-7-2022-2420](https://doi.org/10.32028/Groma-Issue-7-2022-2420)