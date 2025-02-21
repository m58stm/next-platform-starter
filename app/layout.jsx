import '../styles/globals.css';
import Links from "./components/Links"
import Container from '@mui/material/Container';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body>
                <Container maxWidth="sm" sx={{ p: 2, border: "1px solid #ccc", borderRadius: 2, minHeight: "80vh", alignContent: "center" }}>
                    <Links />
                    {children}
                </Container>
            </body>
        </html>
    );
}
