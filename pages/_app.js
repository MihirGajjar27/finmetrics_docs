import "../styles/globals.css";
import { Space_Grotesk } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function App({ Component, pageProps }) {
  return (
      <div className={spaceGrotesk.className}>
        <Component {...pageProps} />
      </div>
  );
}

export default App;
