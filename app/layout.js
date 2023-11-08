import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Movies</title>
      </head>
      <body>
        <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 dark:bg-gray-900">
          {children}
        </main>
      </body>
    </html>
  );
}
