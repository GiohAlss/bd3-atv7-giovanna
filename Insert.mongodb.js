const database = 'prod-database';

const collection = 'prod-collection';

use(database);

db['prod-collection'].insertMany(
    [
        {
            'codigo':'1',
            'nome':'Caneta',
            'descricao':'Caneta esfereográfica azul',
            'valor': 120,
        },
        {
            'codigo':'2',
            'nome':'Lápis',
            'descricao':'Lápis gravite 0.7',
            'valor': 180,
        },
        {
            'codigo':'3',
            'nome':'Lápis de Cor',
            'descricao':'Caixa de lápis de colorir com 12 unidades',
            'valor': 540,
        },
        {
            'codigo':'4',
            'nome':'Caderno',
            'descricao':'Caderno universitário com 10 matérias',
            'valor': 640,
        },
        {
            'codigo':'5',
            'nome':'Régua',
            'descricao':'Régua transparente',
            'valor': 120,
        },
        {
            'codigo':'6',
            'nome':'Agenda',
            'descricao':'Caderno A4',
            'valor': 800,
        },
        {
            'codigo':'7',
            'nome':'Estojo',
            'descricao':'Estojo com 2 compartimentos',
            'valor': 720,
        },
        {
            'codigo':'8',
            'nome':'Folha sulfite',
            'descricao':'Folha sulfite pacote com 200 folhas',
            'valor': 590,
        },
        {
            'codigo':'9',
            'nome':'Post-it',
            'descricao':'Bloco adesivo de anotação',
            'valor': 980,
        },
        {
            'codigo':'10',
            'nome':'Corretivo',
            'descricao':'Corretor em caneta',
            'valor': 900,
        },
        {
            'codigo':'11',
            'nome':'Apontador',
            'descricao':'Apotador sem compartimento',
            'valor': 660,
        },
        {
            'codigo':'12',
            'nome':'Pasta',
            'descricao':'Pasta universitária com 6 divisões',
            'valor': 420,
        },
    ]
)