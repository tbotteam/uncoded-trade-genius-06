import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["Urbanist", "sans-serif"],
                title: ["ClashDisplay", "sans-serif"],
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "#FFB800",
                    foreground: "#1A1A1A",
                },
                secondary: {
                    DEFAULT: "#262626",
                    foreground: "#ffffff",
                },
                accent: {
                    DEFAULT: "#FFB800",
                    foreground: "#1A1A1A",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                glow: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.5" },
                },
                "pulse-glow": {
                    "0%, 100%": {
                        boxShadow: "0 0 10px 2px hsl(var(--primary) / 0.2)",
                    },
                    "50%": {
                        boxShadow: "0 0 16px 4px hsl(var(--primary) / 0.4)",
                    },
                },
                "slide-down-fade": {
                    "0%": { opacity: "0", transform: "translateY(-10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "slide-up-fade": {
                    "0%": { opacity: "1", transform: "translateY(0)" },
                    "100%": { opacity: "0", transform: "translateY(-10px)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                float: "float 6s ease-in-out infinite",
                glow: "glow 3s ease-in-out infinite",
                "slide-down-fade": "slide-down-fade 0.3s ease-out forwards",
                "slide-up-fade": "slide-up-fade 0.3s ease-out forwards",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
