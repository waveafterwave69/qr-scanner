import QrCodeGenerator from './components/QrCodeGenerator/QrCodeGenerator'
import QrCodeScanner from './components/QrCodeScanner/QrCodeScanner'
import Navigation from './components/Navigation/Navigation'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigation />,
    },
    {
        path: '/generate',
        element: <QrCodeGenerator />,
    },
    {
        path: '/scan',
        element: <QrCodeScanner />,
    },
])

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
