const $aparecerPalavra = document.querySelector('#palavra');
const $btnTentar = document.querySelector('#btn-tentar');
const $enforcado = document.querySelector('.enforcado');
const $modal = document.querySelector('.modal');
const $nomeGrupo = document.querySelector('.nome-grupo');
const $pontos = document.querySelector('.pontos');
const $letras = document.querySelectorAll('.btn');

$letras[0].addEventListener('click', ()=>{
    apareceLetra('A');
    $letras[0].disabled = true;
})
$letras[1].addEventListener('click', ()=>{
    apareceLetra('B');
    $letras[1].disabled = true;
})
$letras[2].addEventListener('click', ()=>{
    apareceLetra('C');
    $letras[2].disabled = true;
})
$letras[3].addEventListener('click', ()=>{
    apareceLetra('D');
    $letras[3].disabled = true;
})
$letras[4].addEventListener('click', ()=>{
    apareceLetra('E');
    $letras[4].disabled = true;
})
$letras[5].addEventListener('click', ()=>{
    apareceLetra('F');
    $letras[5].disabled = true;
})
$letras[6].addEventListener('click', ()=>{
    apareceLetra('G');
    $letras[6].disabled = true;
})
$letras[7].addEventListener('click', ()=>{
    apareceLetra('H');
    $letras[7].disabled = true;
})
$letras[8].addEventListener('click', ()=>{
    apareceLetra('I');
    $letras[8].disabled = true;
})
$letras[9].addEventListener('click', ()=>{
    apareceLetra('J');
    $letras[9].disabled = true;
})
$letras[10].addEventListener('click', ()=>{
    apareceLetra('K');
    $letras[10].disabled = true;
})
$letras[11].addEventListener('click', ()=>{
    apareceLetra('L');
    $letras[11].disabled = true;
})
$letras[12].addEventListener('click', ()=>{
    apareceLetra('M');
    $letras[12].disabled = true;
})
$letras[13].addEventListener('click', ()=>{
    apareceLetra('N');
    $letras[13].disabled = true;
})
$letras[14].addEventListener('click', ()=>{
    apareceLetra('O');
    $letras[14].disabled = true;
})
$letras[15].addEventListener('click', ()=>{
    apareceLetra('P');
    $letras[15].disabled = true;
})
$letras[16].addEventListener('click', ()=>{
    apareceLetra('Q');
    $letras[16].disabled = true;
})
$letras[17].addEventListener('click', ()=>{
    apareceLetra('R');
    $letras[17].disabled = true;
})
$letras[18].addEventListener('click', ()=>{
    apareceLetra('S');
    $letras[18].disabled = true;
})
$letras[19].addEventListener('click', ()=>{
    apareceLetra('T');
    $letras[19].disabled = true;
})
$letras[20].addEventListener('click', ()=>{
    apareceLetra('U');
    $letras[20].disabled = true;
})
$letras[21].addEventListener('click', ()=>{
    apareceLetra('V');
    $letras[21].disabled = true;
})
$letras[22].addEventListener('click', ()=>{
    apareceLetra('X');
    $letras[22].disabled = true;
})
$letras[23].addEventListener('click', ()=>{
    apareceLetra('Y');
    $letras[23].disabled = true;
})
$letras[24].addEventListener('click', ()=>{
    apareceLetra('W');
    $letras[24].disabled = true;
})
$letras[25].addEventListener('click', ()=>{
    apareceLetra('Z');
    $letras[25].disabled = true;
})
$letras[26].addEventListener('click', ()=>{
    apareceLetra('Ç');
    $letras[26].disabled = true;
})
$letras[27].addEventListener('click', ()=>{
    apareceLetra(' ');
    $letras[27].disabled = true;
})

let habilitaBtn = ()=>{
    for(let i in $letras){
        $letras[i].disabled =  false
    }
}

let filmes = ['STAR WARS','VINGADORES','RED','WATERWORLD','KICKBOXER','MATRIX','PIXELS','MIB',
'GODZILLA','ROCKY','CREED','JUMANJI','TRANSFORMERS','XMAN','MAD MAX','BIRD BOX','HARRY POTTER',
'INTERESTELAR','LOGAN','GUARDIOES DA GALAXIA','JOGOS VORAZES','VELOZES E FURIOSOS',
'SCOTT PILGRIM CONTRA O MUNDO','ALIEN','HOBBIT','SENHOR DOS ANEIS','TRON','EXTERMINADOR DO FUTURO',
'ZUMBILANDIA','AS PANTERAS','CORPO FECHADO','FRAGMENTADO','VIDRO','JOHN WICK','ALITA',
'JORNADA NAS ESTRELAS','BLADE RUNNER','CAÇAFANTASMAS','DE VOLTA PARA O FUTURO','GOONIES',
'INDIANA JONES','TARZAN','KING KONG','JURASSIC PARK','KICKASS','MISSAO IMPOSSIVEL','KARATE KID',
'MISSAO IMPOSSIVEL','A IDENTIDADE BOURNE','TROPA DE ELITE','ATIRADOR','V DE VINGANÇA','LIGA DA JUSTIÇA',
'IT A COISA','AS TARTARUGAS NINJA','ESCOLA DE ROCK','LOUCA ACADEMIA DE POLICIA','DJANGO LIVRE',
`PIRATAS DO CARIBE`,'VINGADOR DO FUTURO','ESQUECERAM DE MIM','CRONICAS DE NARNIA',
'ALICE NO PAIS DAS MARAVILHAS','AVATAR','CIRCULO DE FOGO','CONAN O BARBARO'];

let seriados = ['MANDALORIAN', 'ARROW', 'FLASH','LUPIN','BRIDGERTON','NARCOS','LUCIFER','OZARK',
'DEXTER','LOST','HOMELAND','THE BIG BANG TEORY','KOBRA KAY','GOTHAM','LA CASA DE PAPEL','TITANS',
'LENDAS DO AMANHA','THE UMBRELLA ACADEMY','MR ROBOT','DR WHO','ARQUIVO X','JORNADA NAS ESTRELAS',
'BUFFY','HEROES','HANNIBAL','THE WALKING DEAD','GAME OF THRONES','PERDIDOS NO ESPAÇO',
'BATTLESTAR GALATICA','BLACK MIRROR','STRANGER THINGS','ALTERED CARBON','THE BOYS',
'MACGYVER','BREAKING BAD'];

let cavaleirosZ = ['SEYA','SHUN','YOGA','SHIRYU','IKKI','JABU','SHINA','ORFEU','MARIN','MU',
'SHION','ALDEBARAN','SAGA','KANON','AIOLIA','SHAKA','DOHKO','MILO','AIOLOS','SHURA','CAMUS',
'APHRODITE','SHO','DAICHI','USHO','MASCARA DA MORTE','MISTY','MOSES','BABEL','ASTERION','JAMIAN',
'ALGOL','CAPELLA','DANTE','ALGETHI','DIO','SIRIUS','PTOLEMY','DAIDALOS','POSEIDON','THETIS',
'BAIAN','KRISHNA','KASA','ISAAC','SORRENTO','HADES','PANDORA','THANATOS','HYPNOS','RHADAMANTHYS',
'MINOS','AIAKOS','CHARON','LUNE','PHARAOH','HILDA','SIEGFRIED','HAGEN','THOR','ALBERICH',
'FENRIR','SYD','BUD','MIME','TENMA','ALONE','YATO','JUNKERS','ASPROS','DEFTEROS','MANIGOLD',
'REGULUS','ASMITA','KARDIA','SISYPHOS','EL CID','DEGEL','ALBAFICA'];

let herois = ['THOR','VISAO','HULK','BATMAN','AQUAMAN','WOLVERINE','CYPLOPE','TEMPESTADE',
'DEADPOOL','JUSTICEIRO','SUPERMAN','COLOSSOS','DEMOLIDOR','VAMPIRA','GAMBIT','ROBIN','ZATANA',
'ASA NOTURNA','IRON MAN','SPIDERMAN','CAPITAO AMERICA','COISA','GAVIAO ARQUEIRO','NOTURNO',
'DR ESTRANHO','SURFISTA PRATEADO','FERA','JEAN GREY','PUNHO DE FERRO','NOVA','PANTERA NEGRA',
'JESSICA JONES','MULHER INVISIVEL','TOCHA HUMANA','SR FANTASTICO','LANTERNA VERDE','CYBORG',
'VIUVA NEGRA','SENHOR DAS ESTRELAS','GROOT','DRAX','ROCKET RACCOON','GAMORA','HOMEM FORMIGA',
'VESPA','FALCAO','CAPITA MARVEL','SOLDADO INVERNAL'];

let desenhosAnimados = ['SIMPSONS','FLINSTONES','SCOOBYDOO','HERCULOIDES','PICAPAU','ANIMANIACS',
'RIQUINHO','GASPARZINHO','TUTUBARAO','SMURFS','HEMAN','THUNDERCATS','PERNALONGA','TRANSFORMERS',
'SUPERAMIGOS','SNOOPY','XMEN','DROOPY','SHERA','DOUG','CAVALO DE FOGO','CORRIDA MALUCA','JETSONS',
'DOM PIXOTE','ZE COLMEIA','PEPE LEGAL','FORMIGA ATOMICA','JOHNNY QUEST','SPACE GHOST','POPEYE',
'TOM E JERRY','MANDACHUVA','MR MAGOO','OS URSINHOS CARINHOSOS','CAVERNA DO DRAGAO','AS TARTARUGAS NINJA',
'A PANTERA CORDEROSA','SPEED RACER','O GATO FELIX','INSPETOR BUGINGANGA','GARFIELD','GAGUINHO',
'OS ANJINHOS','CAPITAO CAVERNA','PINKY E CEREBRO','AS MENINAS SUPERPODEROSAS','LABORATORIO DE DEXTER',
'HEY ARNOLD','JOHNNY BRAVO','PIU PIU E FRAJOLA','URSINHO POOH','JIMMY NEUTRON','BEAVIS AND BUTTHEAD',
'BOB ESPONJA','DICK VIGARISTA E MUTTLEY','LIPPY E HARDY','PAPALEGUAS','TIMAO E PUMBA','O REI LEAO',
'SOUTH PARK','A VACA E O FRANGO','REN E STIMPY','TOY STORY','CINDERELA','A PEQUENA SEREIA',
'A DAMA E O VAGABUNDO','OS INCRIVEIS','RATATOUILLE','VIDA DE INSETO','CARROS','WALLE',
'A BELA ADORMECIDA','MULAN','UP ALTAS AVENTURAS','DUCKTALES','DIVERTIDA MENTE','MOGLI',
'VALENTE','PROCURANDO NEMO','POCAHONTAS','FROZEN','PETER PAN','PINOQUIO','A BELA E A FERA',
'BRANCA DE NEVE E OS SETE ANOES','ALADDIN','SHREK','COMO TREINAR SEU DRAGAO','MONSTROS SA'];

let jogos = ['STARCRAFT','HEARTSTONE','DIABLO','FARCRAY','OVERWATCH','GTA','DOOM','QUAKE','SIMCITY',
'BLACKTHORNE','MINECRAFT','FORTNITE','COUNTERSTRIKE','CASTLEVANIA','HALFLIFE','WARCRAFT','STARFOX',
'CRYSIS','MONSTER HUNTER','UNCHARTED','SUPER MARIO WORLD','LEGEND OF ZELDA','AGE OF EMPIRES',
'LEAGUE OF LEGENDS','DARK SOULS','THE WITCHER','STREET FIGHTER','ELDER SCROLLS','THE LAST OF US',
'RED DEAD REDEMPTION','GOD OF WAR','FINAL FANTASY','PORTAL','ASSASSINS CREED','GEARS OF WAR',
'DOTA','SUPER SMASH BROS','CIVILIZATION','FALLOUT','GRAN TURISMO','RESIDENT EVIL','METAL GEAR SOLID',
'SONIC','CALL OF DUTY','SUPER METROID','CHRONO TRIGGER','FORZA HORIZON','THE SIMS','TETRIS',
'SOUL CALIBUR','GUITAR HERO','DJ HERO','SILENT HILL','POKEMON','TOP GEAR','DONKEY KONG COUNTRY',
'ROCK AND ROLL RACING','SHINOBI','SHADOW OF THE COLOSSUS','GOLDEN AXE','ALEX KID','NEED FOR SPEED',
'CRASH BANDICOOT','TOMB RAIDER','BATTLEFIELD','MORTAL KOMBAT','TEKKEN','THE KING OF FIGHTERS',
'BORDERLANDS','MEGA MAN','KILLER INSTINCT','STREETS OF RAGE','PRINCE OF PERSIA','SPACE INVADERS',
'ENDURO','SUPER MARIO KART','SUPER BOMBERMAN','SIDE POCKET','NBA JAM','FZERO','FINAL FIGHT',
'SUNSET RIDERS']
console.log(`jogos: ${jogos.length}`)
console.log(`desenhos animados: ${desenhosAnimados.length}`)
console.log(`filmes: ${filmes.length}`)
console.log(`cav zod: ${cavaleirosZ.length}`)
console.log(`seriados: ${seriados.length}`)
console.log(`herois: ${herois.length}`)


let palavras = [filmes, seriados, cavaleirosZ, herois, desenhosAnimados, jogos];
let dicas = ['Dica: Filme', 'Dica: Seriado', 'Dica: Cavaleiro do Zodiaco', 'Dica: Herói', 
'Dica: Desenho Animado', 'Dica: Jogo']

let span = [];

let pontos = 0
let mostraPontos = ()=>{
    $pontos.innerHTML = `Pontos: ${pontos}`;
}
mostraPontos()

let criaElementos = (tag,txt,$dom,classe,id)=>{
    let elemento = document.createElement(tag);
    elemento.textContent = txt;
    elemento.className = classe;
    elemento.id = id;
    $dom.appendChild(elemento);
    return elemento
}
console.log(palavras.length)
let letrasSeparadas = [];
let palavraGerada = '';
function novaPalavra(){
    let nGrupo = geraNAleatorio((palavras.length - 1), 0);

    $nomeGrupo.innerHTML = dicas[nGrupo];
      
    let grupoPalavra = palavras[nGrupo];
    let nPalavra = geraNAleatorio((grupoPalavra.length - 1), 0);
    palavraGerada = grupoPalavra[nPalavra];
    console.log(grupoPalavra[nPalavra])
    letrasSeparadas = grupoPalavra[nPalavra].split('');

    /*let teste = 'SUPER MARIO WOLRD'
    letrasSeparadas = teste.split('');
    console.log(letrasSeparadas)*/
    
    criaEspaco();
    habilitaBtn();

    $enforcado.innerHTML = '';
    letraErrada = 0;
    letraCerta = 0;
    //$modal.classList.add('modal-off')
    for(let i in letrasSeparadas){
        if(letrasSeparadas[i] === ' '){
            apareceLetra(' ')
            break
        }
    }
}

let criaEspaco = ()=>{
    $aparecerPalavra.innerHTML = '';
    span = [];
    /*letrasSeparadas.forEach(()=>{
        span1 = criaElementos('spam', '', $aparecerPalavra, 'letras');
        span.push(span1);
    })*/
    for(let i in letrasSeparadas){
        if(letrasSeparadas[i] === " "){
            span1 = criaElementos('spam', '', $aparecerPalavra, 'none');

        }else{
            span1 = criaElementos('spam', '', $aparecerPalavra, 'letras');
        }
        span.push(span1);
    }
}

let enforcado = ['<div id="cabeca"></div>',
                 '<div id="torax"></div>',
                 '<div id="braco-esquerdo"></div>', 
                 '<div id="braco-direito"></div>', 
                 '<div id="perna-esquerda"></div>',
                 '<div id="perna-direita"></div>',
                 '<div id="cabeca-vermelha"></div>'];

let letraCerta = 0;
let letraErrada = 0;
$enforcado.innerHTML = '';
let apareceLetra = (letra)=>{
    console.log(letra)
    let erros = 0;
    for(let i in letrasSeparadas){
        if(letra){
            if(letra === letrasSeparadas[i]){
                console.log(letra)
                span[i].textContent = letrasSeparadas[i];
                letraCerta++;
                if(letra != ' '){
                    pontos++;
                }
                
                mostraPontos();
            }else{
                erros++;
            }
        }
    }

    if(erros === (letrasSeparadas.length)){
        console.log('letra errada',erros,enforcado.length,letraErrada)
        $enforcado.innerHTML += enforcado[letraErrada]
        letraErrada++;
        pontos--;
        mostraPontos();
        if(letraErrada === (enforcado.length)){
            console.log('Voce perdeu')
            //letraErrada = 0;
            //letraCerta = 0;
            pontos = 0;
            mostraPontos();
            //$enforcado.innerHTML = '';
            //novaPalavra()
            $modal.classList.remove('modal-off')
            $modal.innerHTML = `<p>Você Perdeu!</p>
            <p>Palavra: ${palavraGerada}</p>
            <button onclick="novaPalavra()">Nova Palavra</button>`
        }
    }
    if(letraCerta === letrasSeparadas.length){
        console.log('voce venceu')
        $enforcado.innerHTML = '';
        //letraCerta = 0;
        //letraErrada = 0;
        pontos += 10;
        mostraPontos();
        $modal.classList.remove('modal-off');
        $modal.innerHTML = `<p>Você Acertou!</p>
        <button onclick="novaPalavra()">Nova Palavra</button>`;
        //novaPalavra()
    }
    //habilitaBtn()
    console.log(letraCerta)
}

$modal.innerHTML = `<p>Click no botão para iniciar.</p>
<button onclick="novaPalavra()">Nova Palavra</button>`;

function geraNAleatorio(max, min){
    let n1 = Math.floor(Math.random() * (max - min + 1) + min);
    return n1;
}
console.log(letrasSeparadas)





















