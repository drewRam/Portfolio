import React, { useEffect } from "react";

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
    const siteUrl = "https://www.mywebsite.com";
    const fullUrl = typeof window !== "undefined" ? window.location.href : url || siteUrl;
    const imageUrl = `${siteUrl}${image}`;

    useEffect(() => {
        document.title = title;

        const setMeta = (name: string, content: string) => {
            let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
            if (!element) {
            element = document.createElement("meta");
            element.setAttribute("name", name);
            document.head.appendChild(element);
            }
            element.setAttribute("content", content);
        };

        const setProperty = (property: string, content: string) => {
            let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
            if (!element) {
            element = document.createElement("meta");
            element.setAttribute("property", property);
            document.head.appendChild(element);
            }
            element.setAttribute("content", content);
        };

        const setLink = (rel: string, href: string) => {
            let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
            if (!element) {
            element = document.createElement("link");
            element.setAttribute("rel", rel);
            document.head.appendChild(element);
            }
            element.setAttribute("href", href);
        };

        const setViewport = () => {
            let element = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
            if (!element) {
            element = document.createElement("meta");
            element.setAttribute("name", "viewport");
            document.head.appendChild(element);
            }
            element.setAttribute(
            "content",
            "width=device-width, initial-scale=1, maximum-scale=1"
            );
        };

        // SEO
        setMeta("description", description);
        setMeta("image", imageUrl);

        // Open Graph
        setProperty("og:title", title);
        setProperty("og:description", description);
        setProperty("og:image", imageUrl);
        setProperty("og:url", fullUrl);
        setProperty("og:type", "website");

        // Canonical
        setLink("canonical", fullUrl);

        // Viewport (fix mobile scaling)
        setViewport();
    }, [title, description, imageUrl, fullUrl]);

    return null;
};

export default Head;