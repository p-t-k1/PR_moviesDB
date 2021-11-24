import logo from '../logo.svg';
import '../App.css';
import '../styles.css';

function Footer() {
    return (
        <div id="footer">
            <div id="footerDiv">
                <span id="footerText">FAQ</span>
                <span id="footerText">Warunki korzystania</span>
                <span id="footerText">Polityka prywatności</span>
                <span id="footerText">Kontakt</span>
                <span id="footerText">Ustawienia plików cookies</span>
                <span id="footerText">Język</span>
            </div>
            <div id="footerDiv">
                <span id="smallFooterText">© 2021 FILMPRO. Wszelkie prawa zastrzeżone. Strona może zawierać treści przeznaczone wyłącznie dla widzów dorosłych. </span>
            </div>
        </div>
    );
}

export default Footer;
