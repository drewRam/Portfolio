import React, { useEffect } from "react";

const Head: React.FC = () => {
    const defaults = {
        title: "My Website",
        description: "This is my awesome React website.",
        siteUrl: "https://www.mywebsite.com",
        image: "/default-image.jpg",
        twitterUsername: "@mytwitter",
    };

    const url = typeof window !== "undefined" ? window.location.href : defaults.siteUrl;

    useEffect(() => {
    // Set document title
    document.title = defaults.title;

    // Helper function to set meta by name
    const setMeta = (name: string, content: string) => {
        let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
        
        if (!element) {
            element = document.createElement("meta");
            element.setAttribute("name", name);
            document.head.appendChild(element);
        }

        element.setAttribute("content", content);
    };

    // Helper function to set meta by property
    const setProperty = (property: string, content: string) => {
        let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
        
        if (!element) {
            element = document.createElement("meta");
            element.setAttribute("property", property);
            document.head.appendChild(element);
        }
        
        element.setAttribute("content", content);
    };

    // Standard SEO meta tags
    setMeta("description", defaults.description);
    setMeta("image", `${defaults.siteUrl}${defaults.image}`);
    setProperty("og:title", defaults.title);
    setProperty("og:description", defaults.description);
    setProperty("og:image", `${defaults.siteUrl}${defaults.image}`);
    setProperty("og:url", url);
    setProperty("og:type", "website");

    // Twitter cards
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:creator", defaults.twitterUsername);
    setMeta("twitter:title", defaults.title);
    setMeta("twitter:description", defaults.description);
    setMeta("twitter:image", `${defaults.siteUrl}${defaults.image}`);
    }, [url]);

    return null; // This component does not render anything
};

export default Head;
