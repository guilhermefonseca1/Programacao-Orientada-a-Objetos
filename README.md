# Programacao-Orientada-a-Objetos

Inicialmente é preciso startar o projeto com os comandos

1) npm init -y
2) (instalar o typescript)npm install typescript ts-node -D

No arquivo index.ts

A liderança da empresa que você trabalha te pediu para implementar 
um projeto de desenvolvimento que consiste em um simples gerenciador e-mails.

Para isso, você precisa de:

- Uma modelagem de representação genérica de um email

- Todo e-mail criado deve possuir os campos:

- Endereço de e-mail da pessoa remetente(from)

- Endereço de e-mail da pessoa destinatária(to)

- Assunto da mensagem, que não pode ter mais de 20 caracteres(subject)

- Mensagem(message)

- Todo e-mail criado deve ter sua representação textual, que combina todos os dados em uma string única

- Uma representação genérica de uma lista de e-mails (mailList)

- A lista de e-mails deve ser capaz de retornar e-mails filtrados por pessoa remetente, destinatária ou por assunto.


RODE: npx ts-node index.ts no terminal para visualizar o resultado

No arquivo index.heranca.ts

- Criar uma class Carro
- Criar os atributos:
*brand(fabricante)
*automaker(montadora)

- Criar uma função de aceleração(speed)
- Criando constructor que irá erdar os atributos da mãe
*Aqui é preciso utilizar o super no constructor