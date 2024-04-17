import config from "@/config/config.json";
import theme from "@/config/theme.json";
import localFont from 'next/font/local'
import TwSizeIndicator from "@/helpers/TwSizeIndicator";
import Providers from "@/partials/Providers";
import "@/styles/main.scss";

// Import Gellix fonts
const gellix = localFont({
  src: [
    {
      path: "../../public/fonts//Gellix-Bold.woff2",
      weight: "bold",
      style: "normal"
    },
    {
      path: "../../public/fonts//Gellix-BoldItalic.woff2",
      weight: "bold",
      style: "italic"
    },
    {
      path: "../../public/fonts//Gellix-ExtraBold.woff2",
      weight: "800",
      style: "normal"
    },
    {
      path: "../../public/fonts//Gellix-ExtraBold.woff2",
      weight: "800",
      style: "italic"
    },
    {

      path: "../../public/fonts//Gellix-RegularItalic.woff2",
      weight: "normal",
      style: "italic"
    },
    {
      path: "../../public/fonts//Gellix-Regular.woff2",
      weight: "normal",
      style: "normal"
    },
    {
      path: "../../public/fonts//Gellix-Light.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../../public/fonts//Gellix-LightItalic.woff2",
      weight: "300",
      style: "italic"
    },
    {
      path: "../../public/fonts//Gellix-MediumItalic.woff2",
      weight: "500",
      style: "italic"
    },
    {
      path: "../../public/fonts//Gellix-Medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts//Gellix-SemiBold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts//Gellix-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic"
    },
    {
      path: "../../public/fonts//Gellix-Thin.woff2",
      weight: "100",
      style: "normal"
    },
    {
      path: "../../public/fonts//Gellix-ThinItalic.woff2",
      weight: "100",
      style: "italic"
    },

  ],
  variable: '--font-gellix',

})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <html suppressHydrationWarning={true} lang="en">
      <head>
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* favicon */}
        <link rel="shortcut icon" href={config.site.favicon} />
        {/* theme meta */}
        <meta name="theme-name" content="ligonetwork" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />


      </head>

      <body suppressHydrationWarning={true}>
        <TwSizeIndicator />

        <Providers>
          <div className={gellix.className}>{children}</div>

        </Providers>

      </body>
    </html >
  );
}
