class NegociacaoController {

    constructor() {
        const  $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._ListaNegociacoes = new ListaNegociacoes()
        this._neegociacoesView = new NegociacoesView($('#negociacoes__view'))

        this._neegociacoesView.update(this._ListaNegociacoes)
    }

    adicionar(event) {
        event.preventDefault()

        this._ListaNegociacoes.adicionar(this._criarNegociacao())
        this._ListaNegociacoes.negociacoes.push(this._criarNegociacao())
        this._neegociacoesView.update(this._ListaNegociacoes)
        this._limparFormulario()

    }

    _criarNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value)
    }

    _limparFormulario() {
        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0
        this._inputData.focus()
    }
}