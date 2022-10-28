### Game
id
title
bannerUrl

### Ad
~ Banco de dados 

id
gameID
name
yearsPlayubg
weekDays
hourStart
hourEnd
useVoiceChannel
createAt

~ data

domingo - 0
segunda - 1
terça   - 2
quarta  - 3
quinta  - 4
sexta   - 5
sabado  - 6

1:30h     -> 90min
R$ 179,89 -> 17989 |  179,89 * 100 = 17989


### Casos de uso

- Listagem de games com contagem de anúncios
- Listagem de anúncios por game
- Criação de novo anúncio
- Buscar discord pelo ID do anúncio

### Query

Persistente de estado
Quando um usuário acessa uma lista na aba 'url/list?=2'
e passa este mesmo link para outra pessoa, ela retornará para  a 'list?=1', perdeu o estado, então as Querys, server para persistir o estado.


### Route 

Route parms
Identificado na url
exemplos: 'url/como-criar-uma-api-em-node'

### Body

Envio de dados por requisição



