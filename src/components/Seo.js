import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet-async";

function makeAbsoluteUrl(siteUrl, value) {
  if (!value) return null;
  if (/^https?:\/\//i.test(value)) return value;
  // ensure single slash between siteUrl and value
  if (siteUrl.endsWith("/") && value.startsWith("/")) {
    return siteUrl + value.slice(1);
  }
  if (!siteUrl.endsWith("/") && !value.startsWith("/")) {
    return siteUrl + "/" + value;
  }
  return siteUrl + value;
}

const Seo = ({
  title,
  description,
  image,
  imageAlt,
  pathname,
  url,
  author,
  isArticle = false,
  datePublished,
  dateModified,
  tags = [],
}) => {
  const { site } = useStaticQuery(
    graphql`
      query SeoSiteMeta {
        site {
          siteMetadata {
            title
            titleTemplate
            siteUrl
            defaultDescription
            defaultImage
            twitter
            siteName
            author
          }
        }
      }
    `
  );

  const meta = (site && site.siteMetadata) || {};
  const siteUrl = meta.siteUrl || "";

  const fullUrl = url || (pathname ? makeAbsoluteUrl(siteUrl, pathname) : siteUrl);
  const resolvedImage = makeAbsoluteUrl(siteUrl, image || meta.defaultImage);
  const resolvedDescription = (description || meta.defaultDescription || "").trim();
  const resolvedTitle = (title || meta.title || "").trim();

  

  const twitterHandle = meta.twitter || "";

  const metaTags = [
    { name: "description", content: resolvedDescription },
    { property: "og:title", content: resolvedTitle },
    { property: "og:description", content: resolvedDescription },
    { property: "og:type", content: isArticle ? "article" : "website" },
    { property: "og:url", content: fullUrl },
    { property: "og:site_name", content: meta.siteName || meta.title },
  ];

  if (resolvedImage) {
    metaTags.push({ property: "og:image", content: resolvedImage });
    metaTags.push({ name: "twitter:card", content: "summary_large_image" });
    metaTags.push({ name: "twitter:image", content: resolvedImage });
  } else {
    metaTags.push({ name: "twitter:card", content: "summary" });
  }

  if (twitterHandle) {
    metaTags.push({ name: "twitter:site", content: twitterHandle });
    metaTags.push({ name: "twitter:creator", content: twitterHandle });
  }

  // Article JSON-LD
  let articleJsonLd = null;
  if (isArticle) {
    const authors = author ? [author] : meta.author ? [meta.author] : [];
    articleJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': fullUrl,
      },
      headline: resolvedTitle,
      description: resolvedDescription,
      image: resolvedImage ? [resolvedImage] : [],
      author: authors.map((a) => ({ '@type': 'Person', name: a })),
      publisher: {
        '@type': 'Organization',
        name: meta.siteName || meta.title,
        logo: { '@type': 'ImageObject', url: makeAbsoluteUrl(siteUrl, meta.defaultImage) },
      },
      datePublished: datePublished || null,
      dateModified: dateModified || null,
      keywords: tags && tags.length ? tags.join(', ') : undefined,
    };
  }

  return (
    <Helmet>
      <title>{meta.titleTemplate ? meta.titleTemplate.replace('%s', resolvedTitle) : resolvedTitle}</title>
      <link rel="canonical" href={fullUrl} />
      {metaTags.map((m, i) => {
        if (m.name) return <meta key={i} name={m.name} content={m.content} />;
        return <meta key={i} property={m.property} content={m.content} />;
      })}

      {isArticle && articleJsonLd && (
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      )}
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  pathname: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.string,
  isArticle: PropTypes.bool,
  datePublished: PropTypes.string,
  dateModified: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

// Note: default props for function components are provided via
// default parameters in the function signature (React will remove
// support for defaultProps on function components in a future release).

export default Seo;
