import "./Footer.css";


export const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/Footer.png)" }}>
        <div className='socialNetworks'>
            <a href='https://github.com/TheoZL/'>
                <img src="/img/git.png" alt='Github' />
            </a>
            <a href='https://linkedin.com/in/theo-zuniga'>
                <img src="/img/linkeding.png" alt='Linkedin' />
            </a>

        </div>
        <img src='/img/LogoOrg.png' alt='org' />
        <strong>Desarrollado por Theo Zuñiga</strong>
    </footer>
}