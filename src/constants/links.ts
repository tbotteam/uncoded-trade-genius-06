export const TELEGRAM_LINK = "https://t.me/+eRq5mgtcOsBkMDMy"
export const DOCS_LINK = "https://docs.uncoded.ch/";
export const UNCODED_BOT_LINK = "https://t.me/unCoded_bot?start=ref_279365089";
export const CALENDLY_LINK = "https://calendly.com/arrowtrade/meeting-mit-der-arrowtrade-ag";
export const TRUSTPILOT_LINK = "https://www.trustpilot.com/review/uncoded.com";
export const FAQ_PAGE_LINK = "/faq";
export const BLOG_PAGE_LINK = "/blog";
export const START_BOT_CTA_LINK="/#cta"

export const AFFILIATE_PAGE_LINKS = {
    JOIN_NOW: TELEGRAM_LINK,
    LEARN_MORE: DOCS_LINK,
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
