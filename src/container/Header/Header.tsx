import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Menu from 'components/Menu/Menu'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import './Header.scss'
import Logo from 'components/Logo/Logo'
import CartHeader from 'components/CartHeader/CartHeader'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar className="app-bar" position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                    <Menu />
                    <CartHeader/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
