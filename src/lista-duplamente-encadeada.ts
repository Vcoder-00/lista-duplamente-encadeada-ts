class Elemento {
    num: number;
    previous: Elemento | null;
    next: Elemento | null;

    constructor(num: number) {
        this.num = num;
        this.next = null
        this.previous = null;
    }
}
class ListaDuplamenteEncadeada {
    // Ponteiros

    private head: null | Elemento; // "cabeça"
    private tail: null | Elemento; // "cauda"

    /**
     * Inicialização dos ponteiros
     */
    constructor() {
        this.head = null;
        this.tail = null;

    }

    public retornar_primeiro(): number | null {
        if (this.head){
          return this.head!.num;
        }
        return null;
    }


    public adicionar_na_frente(numero: number): void {
        const novoElemento = new Elemento(numero);
        if (this.estaVazia() === true) {
            this.head = novoElemento;
            this.tail = novoElemento;
        }
        else {
            this.head!.previous = novoElemento;
            novoElemento.next = this.head;
            this.head = novoElemento;
        }
    }

    public adicionar_atras(numero: number) {
        const novoElemento = new Elemento(numero);
        if (this.estaVazia() === true) {
            this.head = novoElemento;
            this.tail = novoElemento;
        }
        else {
            this.tail!.next = novoElemento;
            novoElemento.previous = this.tail;
            this.tail = novoElemento;
        }
    }

    public adicionar_em_posicao(numero: number, posicao: number): void {
        if (posicao < 0) {
            return console.log("Erro: posição inválida");
        }
        if (posicao === 0) {
            this.adicionar_na_frente(numero);
            return;
        }
        const novoElemento = new Elemento(numero);

        let ponteiro = this.head;
        let numeroPosicaoDeBusca = 0;

        while (ponteiro?.num != null && numeroPosicaoDeBusca != posicao) {
            ponteiro = ponteiro.next;
            numeroPosicaoDeBusca += 1;
        }

        // caso chegue em um espaço vazio logo depois de acabar a lista
        if (ponteiro === null && numeroPosicaoDeBusca === posicao) {
            return this.adicionar_atras(numero);
        }

        if (ponteiro === null) {
            return console.log("Erro: O índice é maior que o tamanho da lista.");
        }

        //caso a inserção seja no meio da lista

        const anterior = ponteiro!.previous;

        if (anterior != null) {
            anterior!.next = novoElemento;
            novoElemento.previous = anterior
        }
        novoElemento.next = ponteiro;
        ponteiro.previous = novoElemento;
        return;
    }

    public remover_na_frente(): number | void {
        if (this.estaVazia() === true) {
            return console.log("Erro: fila já está vazia!")
        }
        else {
            const valorRetornado = this.head?.num // captura do valor a ser retirado
            if (this.head?.next == null) {
                this.head = null;
                this.tail = null;
                return valorRetornado;
            }
            this.head = this.head!.next;
            this.head!.previous = null;
            return valorRetornado; // retorno do valor (semelhante ao .pop())
        }
    }

    public remover_atras(): number | void {
        if (this.estaVazia() === true) {
            return console.log("Erro: fila já está vazia!");
        }
        else {
            const valorRetornado = this.head!.num // captura do valor a ser retirado
            if (this.tail!.previous == null) {
                this.head = null;
                this.tail = null;
                return valorRetornado;
            }
            this.tail = this.tail!.previous;
            this.tail!.next = null;
            return valorRetornado; // retorno do valor (se  melhante ao .pop())
        }
    }

    public remover_em_posicao(posicao: number): void | number | null {
        if (posicao < 0) {
            return console.log("Erro: posição inválida");
        }
        if (posicao === 0) {
            this.remover_na_frente;
            return;
        }

        let ponteiro = this.head;
        let numeroPosicaoDeBusca = 0;

        while (ponteiro?.num != null && numeroPosicaoDeBusca != posicao) {
            ponteiro = ponteiro.next;
            numeroPosicaoDeBusca += 1;
        }

        // caso chegue em um espaço vazio logo depois de acabar a lista
        if (ponteiro === null && numeroPosicaoDeBusca === posicao) {
            this.remover_atras();
            return;
        }

        if (ponteiro === null) {
            console.log("Erro: O índice é maior que o tamanho da lista.");
            return null;
        }

        //caso a remoção seja no meio da lista

        const anterior = ponteiro!.previous;
        const posterior = ponteiro.next;

        if (anterior != null) {
            anterior!.next = posterior;
            posterior!.previous = anterior;
        }
        // retirando da memória os apontamentos do ponteiro (boa pratica)
        ponteiro.next = null;
        ponteiro.previous = null;

        return ponteiro.num;
    }

    public buscar(num: number) {
        let ponteiro = this.head;
        let flag: boolean = false;
        while (ponteiro != null) {
            if (ponteiro.num === num) {
                flag = true;
                break;
            }
            ponteiro = ponteiro.next;
        }
        return console.log(flag);
    }

    public exibirLista(): void | Array<number> {
        if (this.estaVazia() === true) {
            return console.log("[]");
        }
        let ponteiro = this.head;
        let resultado: Array<number> = [];
        while (ponteiro?.num != null) {
            resultado.push(ponteiro.num);
            ponteiro = ponteiro.next;
        }
        console.log(resultado);
        return resultado;
    }

    public exibirTamanho(): void {
        const resultado = this.exibirLista();
        if (resultado) {
            return console.log(`Tamanho da lista: ${resultado!.length}`)
        }
        return console.log("Lista vazia");
    }

    public estaVazia(): boolean {
        if (this.head === null || this.tail === null) {
            return true;
        }
        return false;
    }

}


const l1 = new ListaDuplamenteEncadeada()
console.log(l1.estaVazia()); // true
l1.adicionar_na_frente(3);
l1.adicionar_na_frente(4);
l1.adicionar_atras(2);
l1.adicionar_atras(1);
l1.exibirLista(); // 4, 3, 2, 1
l1.remover_atras();
l1.remover_na_frente();
l1.exibirLista(); // 3, 2
l1.exibirTamanho(); // Tamanho da lista: 2
l1.adicionar_em_posicao(1,1);
l1.exibirLista(); // 3, 1, 2
l1.remover_em_posicao(1)
l1.exibirLista();  // 3, 2
l1.buscar(2); // true
l1.buscar(4) // false
