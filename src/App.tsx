import React from 'react'
import Button from './components/Button'
import Card from './components/Card'

const App: React.FC = () => {
    return (
        <div style={{ 
            padding: '40px', 
            fontFamily: 'Poppins, sans-serif',
            backgroundColor: '#f8f9fa',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{ 
                maxWidth: '600px', 
                width: '100%' 
            }}>
                <h1 style={{ 
                    color: '#1829DB', 
                    marginBottom: '30px',
                    fontSize: '32px',
                    fontWeight: '600',
                    textAlign: 'center'
                }}>
                    Impulsa Tech
                </h1>
            
            <Card title="Componentes de Botón">
                <div style={{ 
                    display: 'flex', 
                    gap: '16px', 
                    alignItems: 'center',
                    marginBottom: '24px'
                }}>
                    <Button variant="secondary">Editar</Button>
                    <Button variant="primary">Aplicar ahora</Button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Button variant="full-width-primary">
                        Botón Primary - Ancho Completo
                    </Button>
                    <Button variant="full-width-secondary">
                        Botón Secondary - Ancho Completo
                    </Button>
                </div>
            </Card>
            </div>
        </div>
    )
}

export default App