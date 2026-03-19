import "./globals.css";
import { IntlProvider } from "../components/providers/IntlProvider";
import Footer from "../components/layout/Footer";
import CookieBanner from "../components/ui/CookieBanner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body>
        <IntlProvider>
          {children}
          <Footer />
          <CookieBanner />
        </IntlProvider>
      </body>
    </html>
  );
}
