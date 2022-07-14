import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="logo Ds Meta" />
        <h1>DSMeta</h1>
        <p>
          <a href="https://www.linkedin.com/in/matheus-chaves12/">
            Desenvolvido por Matheus Chaves
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
