import '@/app/ui/global.css';
import { roboto_slab } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto_slab.className} antialiased`}>{children}</body>
    </html>
  );
}
