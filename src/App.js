import { useState } from "react";
import jpIMG from "./assets/logo.png";
import "./styles.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCadastro, setCadastro] = useState(false);
  const [nome, setNome] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  const handleToggleCadastro = () => {
    setCadastro(!isCadastro);
    setCadastroSucesso(false); 
  };

  const handleCadastro = (e) => {
    e.preventDefault();

    setCadastroSucesso(true);
    console.log("Cadastro realizado com sucesso!");
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">{isCadastro ? "Cadastro" : "Bem vindo"}</span>
            <span className="login-form-title">
              <img src={jpIMG} alt="Jovem Programador" />
            </span>
  
            {isCadastro && (
              <div className="wrap-input">
                <input
                  className={nome !== "" ? "has-val input" : "input"}
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Nome"></span>
              </div>
            )}
  
            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
  
            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>
  
            {isCadastro && (
              <div className="wrap-input">
                <input
                  className={confirmarSenha !== "" ? "has-val input" : "input"}
                  type="password"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Confirmar Senha"></span>
              </div>
            )}
  
            <div className="container-login-form-btn">
              {!cadastroSucesso ? (
                <button className="login-form-btn" onClick={isCadastro ? handleCadastro : () => {}}>
                  {isCadastro ? "Finalizar" : "Login"}
                </button>
              ) : null}
            </div>
  
            <div className="text-center">
              {cadastroSucesso ? (
                <p className="success-message">
                  Cadastro efetuado com sucesso! Verifique sua caixa de email para finalizar seu cadastro.
                  <a className="txt2 highlighted" href="#" onClick={handleToggleCadastro}>
                    Voltar para o Login
                  </a>
                </p>
              ) : (
                <div>
                  <span className="txt1">{isCadastro ? "Já possui uma conta?" : "Não possui conta?"}</span>
                  <a className="txt2" href="#" onClick={handleToggleCadastro}>
                    {isCadastro ? "Voltar para o Login" : "Criar conta"}
                  </a>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}  

export default App;