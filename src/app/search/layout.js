import { Inter } from "next/font/google";

import SearchHeader from "@/components/SearchHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone",
  description: "Generated by Giorgi Svanidze",
};

export default function SearchLayout({ children }) {
  return (
    <body className={inter.className}>
      <SearchHeader />
      {children}
    </body>
  );
}