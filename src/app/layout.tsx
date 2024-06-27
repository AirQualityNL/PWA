import type { Metadata, Viewport } from "next";
import { useState, type ReactNode } from "react";
import "./globals.css";
import DemoContextLayout from "./DemoContext";

const APP_NAME = "Air Quality Eindhoven";
const APP_DEFAULT_TITLE = "Air Quality Eindhoven";
const APP_TITLE_TEMPLATE = "%s - AQ Eindhoven";
const APP_DESCRIPTION =
  "Making the invisible visible. Air Quality Eindhoven provides real-time air quality data for Eindhoven, the Netherlands.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head />
      <DemoContextLayout>
        <body>{children}</body>
      </DemoContextLayout>
    </html>
  );
}
