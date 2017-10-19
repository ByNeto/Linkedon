<?php
class functionsClass{
/* Declaração dos atributos da classe de conexão*/
private $host;// Endereço do servidor do banco de dados
private $db;// Banco de dados utilizado na conexão
private $usuario;// Usuário do banco de dados que possua acesso ao schema
private $senha;// Senha do usuário
private $sql;// Consulta a ser executada
/*Método que conecta ao banco de dados passando os valores necessários para que a conexão ocorra*/
function conectar(){$conexao=mysql_connect($this->host,$this->usuario,$this->senha)or die($this->mensagem(mysql_error()));return $conexao;}
/* Método que seleciona o banco de dados com que irá trabalhar*/
function selecionarDB(){$banco=mysql_select_db($this->db)or die($this->mensagem(mysql_error()));if($banco){return true;}else{return false;}}
/*Método que executa uma query no banco de dados*/
function executar(){$query=mysql_query($this->sql)or die($this->mensagem(mysql_error()));return $query;}
/*Método criado para atribuir os valores as variáveis de conexão, muito melhor que criar set's para cada variável*/
function set($propriedade,$valor){$this->$propriedade=$valor;}
/* Função para exibir os possíveis erros Separamos em um método, pois este pode ser estilizado, sem alterar outros métodos */
function mensagem($erro){echo '<div class="alert alert-danger" role="alert"><strong>'.$erro.'</strong></div>';}
/* Função para converter o email em caixa baixa*/
function strtolowerEmail($email){$email=strtolower($email);return $email;}
/* Função para converter a primeira letra de uma strings em caixa alta*/
function convertString($string){$string=mb_convert_case($string,MB_CASE_TITLE,'UTF-8');return $string;}
/* Função para proteger o DB contra ataques Sql Injection*/
function escapeString($string){if($this->db_id)return mysqli_real_escape_string($this->db_id,$string);else return mysql_escape_string($string);}
/* Função para encriptar a senha do usuario*/
function passwordEncrypt($pass){$pass=md5($pass);return $pass;}
/* Função para Gerar o ID do usuario*/
function generateId($id){$id=md5($id);return $id;}
/* Função para limpar os caractere do telefone*/
function clearPhone($phone){$caracter=array("(",")","-"," ");$phone=str_replace($caracter,"",$phone);return $phone;}
}
?>