import Carrosel from "./Carrosel";
import Card from 'react-bootstrap/Card';

import '../styles/Comum.css'

function Home() {
    return (
        <body className="corpo">
            <Carrosel />
            <div className="cabe1">
                <Card border="warning" bg="dark">
                    <Card.Header bg="warining" as="h1">Especialista em soluções financeiras.</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Contamos com todos os principais bancos para auxiliar na sua aprovação de crédito.
                        </Card.Text>
                        <hr/>
                        <Card.Text>Possuímos uma linha de consórcio caso você opte em programar sua compra.</Card.Text>
                        <hr/>
                        <Card.Text>Temos uma linha de refinanciamento, no qual você consegue lenvantar um capital a partir de um veículo que tenha em nome.</Card.Text>
                        <hr/>
                        <Card.Text>Aprovamos seu crédito mesmo com score baixo!!</Card.Text>
                    </Card.Body>
                </Card>
                <Card border="warning" bg="dark" style={{ width: 'auto' }}>
                    <Card.Img variant="top" src="https://www.comprecar.com.br/storage/store/facade/a773ef2b-7567-4560-96e1-4a127761af7c.jpeg" />
                    <Card.Body>
                        <Card.Title>Endereço:</Card.Title>
                        <Card.Text>
                            Alameda das Angélicas, 11 - Jardim Simus, Sorocaba - SP, 18055-130
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </body >


    )
}

export default Home;