import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbySeo, ArticleJsonLd } from "gatsby-plugin-next-seo";

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

  const openGraph = {
    url: fullUrl,
    title: resolvedTitle,
    description: resolvedDescription,
    site_name: meta.siteName || meta.title,
    images: resolvedImage
      ? [
          {
            url: resolvedImage,
            alt: imageAlt || resolvedTitle,
          },
        ]
      : [],
    type: isArticle ? "article" : "website",
  };

  const twitterHandle = meta.twitter || "";

  return (
    <>
      <GatsbySeo
        title={resolvedTitle}
        description={resolvedDescription}
        canonical={fullUrl}
        titleTemplate={meta.titleTemplate}
        openGraph={openGraph}
        twitter={{
          handle: twitterHandle,
          site: twitterHandle,
          cardType: resolvedImage ? "summary_large_image" : "summary",
        }}
      />

      {isArticle && (
        <ArticleJsonLd
          url={fullUrl}
          title={resolvedTitle}
          images={resolvedImage ? [resolvedImage] : []}
          datePublished={datePublished}
          dateModified={dateModified}
          authorName={author ? [author] : meta.author ? [meta.author] : []}
          publisherName={meta.siteName || meta.title}
          publisherLogo={makeAbsoluteUrl(siteUrl, meta.defaultImage)}
          description={resolvedDescription}
        />
      )}
    </>
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
