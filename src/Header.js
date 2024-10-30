import Nav from './Nav';

function Header() {
    return (
        <header>
            <object id='little-lemon-logo' data='./assets/Logo.svg' type='image/svg+xml'
                alt='The logo for the Little Lemon Restaurant'
                aria-label='The logo for the Little Lemon Restaurant'/>
            <Nav/>
        </header>
    );
}

export default Header;