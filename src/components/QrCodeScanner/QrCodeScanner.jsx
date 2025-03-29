import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'

export default function QrCodeScanner() {
    const [qrText, setQrText] = useState('')

    function scanHandler(result) {
        console.log(result)
        setQrText(res.rawValue)
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
            <div className="qr__scan-output">{qrText}</div>
        </>
    )
}
