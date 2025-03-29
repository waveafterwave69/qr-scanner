import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'
import Navigation from '../Navigation/Navigation'

export default function QrCodeScanner() {
    const [scanned, setScanned] = useState(null)

    function scanHandler(result) {
        setScanned(result[0].rawValue)
    }

    const scanSettings = {
        audio: false,
        finder: false,
    }

    const scanStyles = {
        container: {
            width: 350,
        },
    }

    return (
        <>
            <Navigation></Navigation>
            <div className="qr__scan">
                <div className="qr__scan-code">
                    <Scanner
                        allowMultiple={true}
                        onScan={scanHandler}
                        components={scanSettings}
                        styles={scanStyles}
                    />
                </div>
                <div className="qr__scan-output">
                    <a href={scanned}>{scanned}</a>
                </div>
            </div>
        </>
    )
}
