import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontSize: {
            xs: ['12px', '16px'],
            sm: ['14px', '20px'],
            base: ['16px', '19.5px'],
            lg: ['18px', '21.94px'],
            xl: ['20px', '24.38px'],
            '2xl': ['24px', '29.26px'],
            '3xl': ['28px', '50px'],
            '4xl': ['48px', '58px'],
            '8xl': ['96px', '106px']
        },
        colors: {
            'primary': "#ECEEFF",
            "coral-red": "#FF6452",
            "slate-gray": "#6D6D6D",
            "pale-blue": "#F5F6FF",
            "white-400": "rgba(255, 255, 255, 0.80)"
        },
        screens: {
            "wide": "1440px"
        },
        boxShadow: {
            '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
