import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { FriendProvider } from "./context/FriendContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "Keep Your Friendships Alive",
};

export default async function RootLayout({ children }) {
  const res = await fetch("http://localhost:3000/friends.json");
  const initialFriends = await res.json();

  return (
    <html
      lang='en'
      data-theme='light'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${geistSans.className} min-h-full flex flex-col bg-[#f8fafc]`}
        suppressHydrationWarning={true}
      >
        <FriendProvider initialData={initialFriends}>
          <NavBar />
          <main className='grow'>{children}</main>
          <ToastContainer />
          <Footer />
        </FriendProvider>
      </body>
    </html>
  );
}
