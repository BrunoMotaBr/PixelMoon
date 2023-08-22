const imagens = document.querySelectorAll(".imagens")
const botoes = document.querySelectorAll(".botao-imgs")
const sessaoDeImagens = document.querySelectorAll(".secao-imagem-juntas")
let sessaoAtiva;


botoes.forEach((botao, key) =>{ 
    botao.addEventListener("click", () =>{
         sessaoDeImagens.forEach((sessao, key) => {
            if(sessao.classList.value === "secao-imagem-juntas secao-ativa"){
                console.log(sessao.classList.value, key)
                sessaoAtiva = key
            }
        })
        sessaoDeImagens[sessaoAtiva].classList.remove("secao-ativa")
        if(key === 0){
            if(sessaoAtiva === 0){
                sessaoDeImagens[4].classList.add("secao-ativa")
            }else{
                sessaoDeImagens[sessaoAtiva-1].classList.add("secao-ativa")
            }
        }else{
            if(sessaoAtiva === 4){
                sessaoDeImagens[0].classList.add("secao-ativa")
            }else{
                sessaoDeImagens[sessaoAtiva + 1].classList.add("secao-ativa")
            }
        }
    })
})

imagens.forEach((imagem, key)=>{
    imagem.addEventListener("click", () =>{
        imagem.classList.remove("ativo")
        if(key === 3){
            imagens[0].classList.add("ativo")
        }else{
            imagens[key + 1].classList.add("ativo")
        }
    })
})