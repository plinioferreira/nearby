import Link from 'next/link';

const home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link href="login">
                <a>Acessar a pagina de login</a>
            </Link>
        </div>
    )
}

export default home