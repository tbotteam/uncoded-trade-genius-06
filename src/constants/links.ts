export const TELEGRAM_LINK = "https://t.me/+eRq5mgtcOsBkMDMy"
export const GITBOOK_LINK = "https://uncoded-1.gitbook.io/uncoded-docs";
export const UNCODED_BOT_LINK = "https://t.me/unCoded_bot";
export const CALENDLY_LINK = "https://calendly.com/uncoded";
export const TRUSTPILOT_LINK = "https://www.trustpilot.com/review/uncoded.com";
export const COMMUNITY_LINK = TELEGRAM_LINK;
export const FAQ_PAGE_LINK = "/faq";
export const FEATURES_PAGE_LINK = "/features";
export const BLOG_PAGE_LINK = "/blog";

export const AFFILIATE_PAGE_LINKS = {
    JOIN_NOW: TELEGRAM_LINK,
    LEARN_MORE: GITBOOK_LINK,
    START_REFERRING: TELEGRAM_LINK,
    SALES_EMAIL: "mailto:sales@uncoded.com",
};

// Navigation links structure
export const NAV_LINKS = {
    main: [
        { label: "Home", href: "/" },
        { label: "Pricing", href: "/pricing" },
    ],
    company: {
        label: "Company",
        items: [
            {
                label: "About Us",
                href: "/about",
                description: "Our team and our mission",
                icon: "Users",
            },
            {
                label: "Affiliate Program",
                href: "/affiliate",
                description: "Earn 10% commissions",
                icon: "LifeBuoy",
            },
            {
                label: "Terms of Service",
                href: "/terms",
                description: "Our legal terms",
                icon: "FileText",
            },
            {
                label: "Support",
                href: TELEGRAM_LINK,
                description: "Get help via Telegram",
                icon: "HelpCircle",
                external: true,
            },
        ],
    },
};
