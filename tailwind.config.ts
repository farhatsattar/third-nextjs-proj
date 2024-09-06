import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:[
          "var(--inter)"

        ]

      }
    },
  },
  plugins: [],
};
export default config;
