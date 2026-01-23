import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description = "Full Stacker Developer & Data Engineer. Building tools for everyday life.",
    keywords = "developer, portfolio, react, data engineer, web development",
    image = "/bb.svg",
    url
}) => {
    const siteTitle = "Brady Barker";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const currentUrl = url || window.location.href;

    return (
        <Helmet>
            {/* Basic Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Canonical */}
            <link rel="canonical" href={currentUrl} />
        </Helmet>
    );
};

export default SEO;
