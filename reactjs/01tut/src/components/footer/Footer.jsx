import classes from "./footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <p>Copyright {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
