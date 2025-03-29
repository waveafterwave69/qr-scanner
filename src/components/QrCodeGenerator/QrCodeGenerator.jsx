import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'
import Navigation from '../Navigation/Navigation'

export default function QrCodeGenerator() {
    const [qrText, setQrText] = useState('')
    const [res, setRes] = useState('')
    const [text, setText] = useState('')

    function handleClick() {
        setRes(qrText)

        setText(qrText)

        setQrText('')
    }

    function handleChange(e) {
        const value = e.target.value
        setQrText(value)

        setRes('')
        setText('')
    }

    return (
        <>
            <Navigation></Navigation>
            <div className="qr">
                <input
                    type="text"
                    className="qr__input"
                    placeholder="Введите текст..."
                    value={qrText}
                    onChange={handleChange}
                />
                <button className="qr__button" onClick={handleClick}>
                    Сгенерировать QR
                </button>

                {res && <QRCodeSVG className="qr__qrcode" value={res} />}
                <div className="qr__output">{text}</div>
            </div>
        </>
    )
}
