import "../styles.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <small>© {new Date().getFullYear()} ImpulsaTech</small>
      </div>
    </footer>
  );
}
