import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'

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
            <div className="qr__scan">
                <Scanner
                    allowMultiple={true}
                    onScan={scanHandler}
                    components={scanSettings}
                    styles={scanStyles}
                />
            </div>
            <div className="qr__scan-output">{scanned}</div>
        </>
    )
}
