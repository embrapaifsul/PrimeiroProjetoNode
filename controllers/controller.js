var timesDeFutebol = [
    { id: 1, nome: "Flamengo", estadio: "Maracanã" },
    { id: 2, nome: "Corinthians", estadio: "Neo Química Arena" },
    { id: 3, nome: "Palmeiras", estadio: "Allianz Parque" },
    { id: 4, nome: "São Paulo", estadio: "Morumbi" },
    { id: 5, nome: "Santos", estadio: "Vila Belmiro" },
    { id: 6, nome: "Grêmio", estadio: "Arena do Grêmio" },
    { id: 7, nome: "Internacional", estadio: "Beira-Rio" },
    { id: 8, nome: "Cruzeiro", estadio: "Mineirão" },
    { id: 9, nome: "Atlético Mineiro", estadio: "Arena MRV" },
    { id: 10, nome: "Vasco da Gama", estadio: "São Januário" }
  ];

  import Time from '../models/time.js';



export async function home(req,res){
    res.render('admin/index')
}


export async function abreaddtime(req, res) {
    res.render('admin/time/add')
}

export async function addtime(req, res) {
    res.redirect('/admin/time/add')
}

export async function listartime(req, res) {
    const timesDeFutebol = await Usuario.find({}).catch(function(err){console.log(err)});
    
    res.render('admin/time/lst',{Times: timesDeFutebol});
}

export async function filtrartime(req, res) {
    const resposta = timesDeFutebol.filter(time => time.nome === req.body.pesquisar)
    res.render('admin/time/lst',{Times: resposta});
}

export async function deletatime(req, res) {
    timesDeFutebol =  timesDeFutebol.filter(time => time.id !== req.params.id);
    res.redirect('/admin/time/lst')
}

export async function abreedttime(req, res){
    const time =  timesDeFutebol.filter(time => time.id == req.params.id);
   
    res.render('admin/time/edt.ejs',{Time: time})
}

export async function edttime(req, res){
    res.redirect('/admin/time/lst')
}
