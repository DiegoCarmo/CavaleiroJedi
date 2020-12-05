import React from 'react';
export default class Contato extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mensagem: [] };
    this.enviarFormulario = this.enviarFormulario.bind(this);
  }

  async componentDidMount() {
    const resposta = await fetch('http://localhost/React/fullstackstore/src/backend/php/pegarMensagem.php');
    const json = await resposta.json();
    this.setState({ mensagem: json });
  }


  async enviarFormulario(elemento) {
    elemento.preventDefault();
    const url = "http://localhost/React/fullstackstore/src/backend/php/enviarFormulario.php";
    const dados = new FormData(elemento.target);
    const cabecalho = {
      method: 'post',
      body: dados,
    }
    await fetch(url, cabecalho);
  }

  render() {
    return (

      <div>

        <div className="social">
          <div>
            <a href="https://instagram.com" target="_blank"><img className="lgsocial" src={require('./../../imagens/logos/instagram.png').default} /></a>
            <a href="https://facebook.com" target="_blank" ><img className="lgsocial" src={require('./../../imagens/logos/facebook.png').default} /></a>
            <a href="https://whatsapp.com" target="_blank"><img className="lgsocial" src={require('./../../imagens/logos/whats.png').default} /></a>
          </div>
        </div>

        <div id="form">
          <form className="form-group" onSubmit={this.enviarFormulario}>
            <h1>Como podemos te ajudar ?</h1>
            <hr />

            <label for="pnome">Nome:</label><br />
            <input className="form-control" type="text" id="nome" name="nome" />
            <br />
            <br />
            <label className="areaMsg">E-mail:</label><br />
            <input className="form-control" type="email" name="email"></input>

            <br /><br />
            <label className="areaMsg">Mensagem:</label><br />
            <textarea className="form-control" name="msg" id="msg" rows="5"></textarea>
            <br /><br />

            <input className="d-inline" type="checkbox" name="checkbox" id="checkbox" />
            <label className="form-check-label d-inline" for="checkbox">Concordo com termos de segurança.</label>
            <br /><br />

            <input className="form-control btn btn-primary" type="submit" id="submit" style={{ width: "200px" }} />
            <br /><br />
          </form>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <h3>Comentario dos clientes</h3>
                <div className="list-group">
                  {this.state.mensagem.map(mensagem => (
                    <div className="list-group-item">
                      <h5>{mensagem.nome}</h5>
                      <p>{mensagem.msg} </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}