import Link from "next/link";
import { site, footerColumns } from "@/data/site";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={site.logo} alt={site.name} />
          </div>
          <div className="footer-links">
            {footerColumns.map((col) => (
              <div className="footer-col" key={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((link) => {
                    const label = link.strong ? (
                      <strong>{link.label}</strong>
                    ) : (
                      link.label
                    );
                    return (
                      <li key={link.label}>
                        {link.href.startsWith("/") ? (
                          <Link href={link.href}>{label}</Link>
                        ) : (
                          <a href={link.href}>{label}</a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>{site.copyright}</p>
          <p className="footer-info">
            본사 주소: {site.business.address} · 대표: {site.business.ceo} · 전화번호:{" "}
            {site.business.bizNumber}
            <br />
            
          </p>
        </div>
      </div>
    </footer>
  );
}
