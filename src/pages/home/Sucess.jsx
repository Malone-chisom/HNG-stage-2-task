import React from 'react'

const Sucess = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '70vh',

            }}
        >
            <div
                style={{
                    maxWidth: '400px',
                    width: '100%',
                    padding: '20px',
                    backgroundColor: '#fff',
                    boxShadow: '0 5 10px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    borderRadius: '8px',
                    boxSizing: 'border-box',
                }}
            >
                <h2>Payment Successful!</h2>
                <p>Thank you for your payment.</p>
                <p>Transaction Reference: <strong>1234567890</strong></p>
            </div>
        </div>
    )
}

export default Sucess