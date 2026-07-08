import PropTypes from "prop-types";
import { Inter } from "next/font/google";
import "./globals.css";

// Load a modern font natively via Next.js
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "DynamoDB User Management",
  description: "Next.js + Amazon DynamoDB CRUD Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 min-h-full flex flex-col transition-colors duration-300">
        {/* Optional App Bar / Navbar container could go here */}
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
