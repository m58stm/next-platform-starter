import Link from '@mui/material/Link';
import { Favorite } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import Container from '@mui/material/Container';

export default function Links() {
    return (
        <Box marginBottom={"1rem"}>
            <Link href="/" underline="none">
                <Button variant="outlined" startIcon={<Favorite />}>
                    Home
                </Button>
            </Link>
            <Link href="/pages/edit">
                <Button variant="outlined" startIcon={<Favorite />}>
                    Edit
                </Button>
            </Link>
        </Box>
    );
}
