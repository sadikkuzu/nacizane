import React from "react";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";

function Footer() {
  return (
    <BlurFade delay={0.04} inView>
      <footer className="py-10 text-muted-foreground items-end">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm">
              &copy; 2024 Nacizane.co , Bir Ali Can Gündüz projesidir.
            </p>
            <nav className="flex gap-4">
              <Link
                href="#"
                className="text-sm hover:underline hover:underline-offset-4"
                prefetch={false}
              >
                Kullanım Koşulları
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline hover:underline-offset-4"
                prefetch={false}
              >
                Gizlilik Politikası
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </BlurFade>
  );
}

export default Footer;
