class NegociacaoController {

    constructor() {
        const  $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._ListaNegociacoes = new ListaNegociacoes()
        
        this._neegociacoesView = new NegociacoesView($('#negociacoes__view'))
        this._neegociacoesView.update(this._ListaNegociacoes)

        this._messagem = new Messagem()
        this._messagemView = new MessagemView($('#messagemView'))
        this._messagemView.update(this._messagem)
    }

    adicionar(event) {
        event.preventDefault()

        this._ListaNegociacoes.adicionar(this._criarNegociacao())
        this._neegociacoesView.update(this._ListaNegociacoes)

        this._messagem.texto = "Negociação adicionada com sucesso!"
        this._messagemView.update(this._messagem)

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