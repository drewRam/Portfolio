import React from "react";
import { Helmet } from "react-helmet";

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const Head: React.FC<HeadProps> = ({
    title = "My Website",
    description = "This is my awesome React website.",
    image = "/default-image.jpg",
    url,
    }) => {
    const siteUrl = "https://www.developedbyandrew.com";
    const fullUrl =
    typeof window !== "undefined" ? window.location.href : url || siteUrl;
    const imageUrl = `${siteUrl}${image}`;

    return (
        <Helmet>
            {/* Title */}
            <title>{title}</title>

            {/* SEO */}
            <meta name="description" content={description} />
            <meta name="image" content={imageUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:type" content="website" />

            {/* Canonical */}
            <link rel="canonical" href={fullUrl} />

            {/* Viewport (mobile scaling fix) */}
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
            />
        </Helmet>
    );
};

export default Head;
