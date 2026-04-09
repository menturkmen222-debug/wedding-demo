import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex flex-col items-center md:items-start mb-4">
              <span className="font-script text-4xl text-primary leading-none">
                Alford's Glen
              </span>
              <span className="font-sans text-xs tracking-[0.2em] text-secondary-foreground/70 mt-2 uppercase">
                Wedding Barn
              </span>
            </Link>
            <p className="text-secondary-foreground/80 text-sm max-w-xs mt-4">
              A premium rustic-elegant barn wedding venue on 50 wooded acres.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="font-serif text-xl mb-2 text-primary">Contact</h4>
            <p className="text-secondary-foreground/80 text-sm">
              8772 Werger Road<br />
              Garrettsville, Ohio 44231
            </p>
            <p className="text-secondary-foreground/80 text-sm">
              <a href="tel:330-527-2413" className="hover:text-primary transition-colors">330-527-2413</a>
            </p>
            <p className="text-secondary-foreground/80 text-sm">
              <a href="mailto:alfordsglen@gmail.com" className="hover:text-primary transition-colors">alfordsglen@gmail.com</a>
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="font-serif text-xl mb-2 text-primary">Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-secondary-foreground/80">
              <Link href="/rental" className="hover:text-primary transition-colors">Rental Information</Link>
              <Link href="/vendors" className="hover:text-primary transition-colors">Preferred Vendors</Link>
              <Link href="/gallery" className="hover:text-primary transition-colors">Photo Gallery</Link>
              <Link href="/history" className="hover:text-primary transition-colors">Our History</Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Alford's Glen Wedding Barn. All rights reserved.</p>
          <p>Designed with love.</p>
        </div>
      </div>
    </footer>
  );
}
