import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Basic SEO
  title: "Akshay Patel - Full-Stack Developer & AI/ML Expert | Portfolio",
  description: "Professional software developer with 5+ years of experience specializing in AI/ML, React, Next.js, and full-stack development. Based in the United States, delivering innovative solutions for clients worldwide.",
  keywords: [
    "Akshay Patel",
    "Full-Stack Developer",
    "AI/ML Expert",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Machine Learning Engineer",
    "Software Developer",
    "Web Developer",
    "Mobile Developer",
    "React Native Developer",
    "Python Developer",
    "Node.js Developer",
    "Portfolio",
    "United States",
    "Remote Developer",
    "AI Agents",
    "Chatbots",
    "Computer Vision",
    "Natural Language Processing"
  ].join(", "),
  authors: [{ name: "Akshay Patel" }],
  creator: "Akshay Patel",
  publisher: "Akshay Patel",
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshaypatel.dev",
    siteName: "Akshay Patel Portfolio",
    title: "Akshay Patel - Full-Stack Developer & AI/ML Expert",
    description: "Professional software developer with 5+ years of experience specializing in AI/ML, React, Next.js, and full-stack development. Based in the United States.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Akshay Patel - Full-Stack Developer & AI/ML Expert Portfolio",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@AGPatel97",
    creator: "@AGPatel97",
    title: "Akshay Patel - Full-Stack Developer & AI/ML Expert",
    description: "Professional software developer with 5+ years of experience specializing in AI/ML, React, Next.js, and full-stack development.",
    images: ["/images/twitter-card.jpg"],
  },
  
  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  
  // Alternative languages
  alternates: {
    canonical: "https://akshaypatel.dev",
  },
  
  // Category and classification
  category: "Technology",
  classification: "Software Development Portfolio",
  
  // Contact information
  other: {
    "contact:email": "akshaygpatel1997@gmail.com",
    "contact:phone": "+16692319631",
    "contact:location": "United States",
    "contact:linkedin": "https://www.linkedin.com/in/akshay-patel-04a714116",
    "contact:github": "https://github.com/AkshayPatel8140",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Akshay Patel",
    "jobTitle": "Full-Stack Developer & AI/ML Expert",
    "description": "Professional software developer with 5+ years of experience specializing in AI/ML, React, Next.js, and full-stack development.",
    "url": "https://akshaypatel.dev",
    "image": "/images/profile-akshay-patel.jpg",
    "email": "akshaygpatel1997@gmail.com",
    "telephone": "+16692319631",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "United States"
    },
    "sameAs": [
      "https://www.linkedin.com/in/akshay-patel-04a714116",
      "https://github.com/AkshayPatel8140",
      "https://x.com/AGPatel97",
      "https://www.instagram.com/a_g_patel/"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "Machine Learning",
      "Artificial Intelligence",
      "Computer Vision",
      "Natural Language Processing",
      "Full-Stack Development",
      "Mobile Development",
      "Cloud Computing"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Developer",
      "occupationLocation": {
        "@type": "Place",
        "name": "United States"
      }
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance/Remote",
      "description": "Providing software development services remotely"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
