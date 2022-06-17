import Link from 'next/link';

const login = () => {
    return (
        <div>
            <h1>Login</h1>
            <Link href="/">
                <a>Acessar a pagina de Home</a>
            </Link>
        </div>
    )
}
export default login