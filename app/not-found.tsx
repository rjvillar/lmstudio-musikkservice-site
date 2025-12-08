import NotFoundClient from "./not-found-client";

export default function NotFound() {
  return (
    <html lang="no" suppressHydrationWarning>
      <body style={{ margin: 0, padding: 0 }} suppressHydrationWarning>
        <NotFoundClient />
      </body>
    </html>
  );
}
