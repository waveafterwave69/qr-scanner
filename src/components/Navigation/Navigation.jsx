import { Link } from 'react-router-dom'

export default function Navigation() {
    const currentUrl = window.location.pathname

    return (
        <>
            <nav className="nav__list">
                <Link
                    className={
                        currentUrl == '/generate'
                            ? 'nav__list-link active'
                            : 'nav__list-link'
                    }
                    to="/generate"
                >
                    Генерировать Qr
                </Link>
                <Link
                    className={
                        currentUrl == '/scan'
                            ? 'nav__list-link active'
                            : 'nav__list-link'
                    }
                    to="/scan"
                >
                    Сканировать Qr
                </Link>
                <Link
                    className={
                        currentUrl == '/scan-history'
                            ? 'nav__list-link active'
                            : 'nav__list-link'
                    }
                >
                    История Сканирования
                </Link>
                <Link
                    className={
                        currentUrl == '/generate-history'
                            ? 'nav__list-link active'
                            : 'nav__list-link'
                    }
                >
                    История Генерирования
                </Link>
            </nav>
        </>
    )
}
