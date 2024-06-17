import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dialog-eid24',
  templateUrl: './dialog-eid24.component.html',
  styleUrls: ['./dialog-eid24.component.scss']
})
export class DialogEid24Component {
  id:string = '';
  constructor(private route: ActivatedRoute) { }
  // di means dialog flexible , ini parmas chat, kalau flexible nanti xxx nya bakal di ganti sama params id
  df:string = '';
  
  name = 'Angular';
  textChat: string = '';
  textChat01: string = '';
  textChat02: string = '';
  emot: string = 'surat';
  listChat: any[] = []
  listChatMasAli: any[] = [
    ['Assalamualaikum', 'tapa'],
    ['Hallo Mas Ali apa kabar?', 'hi'],
    ['hehe maaf ya baru balas ucapan lebaran nya sekarang', 'sorry'],
    ['saya lupa kalau kemarin mas ali ngucapin lebaran', 'smile'],
    ['ngeh nya ketika mas ali nannya RPA', 'merem'],
    ['perasaan sih udah bales, tapi di history wa ga ada', 'smile'],
    ['sori ya hehehe', 'sorry'],
    ['back to the topik', 'normal'],
    ['Di kesempatan kali ini', 'smile'],
    ['mumpung masih di bulan Syawal', 'merem'],
    ['Saya mau minta maaf atas segala salah', 'tapa'],
    ['Baik yang sengaja, maupun yang sengaja', 'sorry'],
    ['Baik kata kata, sikap, dan perbuatan', 'tapa'],
    ['TaqabbalAllahu minna wa minkum', 'tapa'],
    ["(Semoga Allah menerima amalanku dan amalanmu)", 'smile'],
    ["shiyamana wa shiyamakum", 'tapa'],
    ["(puasa kami dan puasa kalian)", 'smile'],
    ['...', 'normal'],
    ['Saya harap semoga di tahun ini, dan seterusnya', 'smile'],
    ['Kita menjadi lebih baik dari sebelumnya', 'normal'],
    ['Ya gitu aja dari saya,', 'yeay'],
    ['Sekali lagi Maaf baru bales wa nya sekarang', 'sorry'],
    ['Kalau nanti mau nannya programing, tanya aja', 'normal'],
    ['Bye', 'hi'],
  ];

  listChatIndra: any[] = [
    ['Assalamualaikum', 'tapa'],
    ['Hallo Indra apa kabar?', 'hi'],
    ['hehe maaf ya baru balas ucapan lebaran nya sekarang', 'sorry'],
    ['saya lupa kalau kemarin Indra ngucapin lebaran', 'smile'],
    ['ngeh nya ketika tadi cek cek WA ternyata ada WA yg belum ke reply', 'merem'],
    ['perasaan sih udah bales, tapi di history wa ga ada', 'smile'],
    ['sori ya hehehe', 'sorry'],
    ['back to the topik', 'normal'],
    ['Di kesempatan kali ini', 'smile'],
    ['mumpung masih di bulan Syawal', 'merem'],
    ['Saya mau minta maaf atas segala salah', 'tapa'],
    ['Baik yang sengaja, maupun yang sengaja', 'sorry'],
    ['Baik kata kata, sikap, dan perbuatan', 'tapa'],
    ['TaqabbalAllahu minna wa minkum', 'tapa'],
    ["(Semoga Allah menerima amalanku dan amalanmu)", 'smile'],
    ["shiyamana wa shiyamakum", 'tapa'],
    ["(puasa kami dan puasa kalian)", 'smile'],
    ['...', 'normal'],
    ['Saya harap semoga di tahun ini, dan seterusnya', 'smile'],
    ['Kita menjadi lebih baik dari sebelumnya', 'normal'],
    ['Sekali lagi Maaf baru bales wa nya sekarang', 'sorry'],
    ['Salam buat keluarga', 'sorry'],
    ['Saya doakan semoga Indra dan keluarga selalu di beri rizki yang berlimpah', 'smile'],
    ['Kesehatan yang baik, dan dimudahkan segala urusannya', 'tapa'],
    ['Ya gitu aja dari saya,', 'yeay'],
    ['Sampai bertemu diksempatan yang lain', 'normal'],
    ['Bye', 'hi'],
  ];


  listChatAAri: any[] = [
    ['Assalamualaikum', 'tapa'],
    ['Hallo A Ari  apa kabar?', 'hi'],
    ['hehe maaf ya baru ngucapin lebaran nya sekarang', 'sorry'],
    ['waktu lebaran ke-2 mau ikut ke uber, cuman kurang fit', 'smile'],
    ['takutnya malah nyebarin penyakit, kan jangan sampai yaa', 'sorry'],
    ['bukannya kebaikan malah jadi dzolim hehehe', 'smile'],
    ['sori ya hehehe', 'sorry'],
    ['back to the topik', 'normal'],
    ['Di kesempatan kali ini', 'smile'],
    ['mumpung masih di bulan Syawal', 'merem'],
    ['Saya mau minta maaf atas segala salah', 'tapa'],
    ['Ke A Ari, Engla, Arzan', 'smile'],
    ['Apakah dari saya, shinta, sayumi, rafisqi', 'tapa'],
    ['Baik yang sengaja, maupun yang sengaja', 'sorry'],
    ['Baik kata kata, sikap, dan perbuatan', 'smile'],
    ['Karena mungkin banyak yang kami ga sadarin, tapi malah melukai', 'tapa'],
    ['Oleh karena itu kami meminta maaf', 'smile'],
    ['TaqabbalAllahu minna wa minkum', 'tapa'],
    ["(Semoga Allah menerima amalanku dan amalanmu)", 'smile'],
    ["shiyamana wa shiyamakum", 'tapa'],
    ["(puasa kami dan puasa kalian)", 'smile'],
    ['...', 'normal'],
    ['Saya harap semoga di tahun ini, dan seterusnya', 'smile'],
    ['Kita menjadi lebih baik dari sebelumnya', 'normal'],
    ['Ya gitu aja dari saya,', 'yeay'],
    ['Sekali lagi maaf baru WA sekarang', 'sorry'],
    ['Salam buat keluarga, dan sampai bertemu lagi di kesempatan yang lain', 'normal'],
    ['Bye', 'hi'],
  ];

  listChatMasAgung: any[] = [
    ['Assalamualaikum', 'tapa'],
    ['Hallo Mas Agung apa kabar?', 'hi'],
    ['hehe maaf ya baru ngucapin lebaran nya sekarang', 'sorry'],
    ['Sibuk main game ini itu kayanya', 'smile'],
    ['Tapi sesuai kata pepatah, mending terlambat dari pada ga sama sekali', 'sorry'],
    ['Di kesempatan kali ini', 'smile'],
    ['mumpung masih di bulan Syawal', 'merem'],
    ['Saya mau minta maaf atas segala salah', 'tapa'],
    ['Ke Mas Agung dan keluarga', 'smile'],
    ['Baik yang sengaja, maupun yang sengaja', 'sorry'],
    ['Baik kata kata, sikap, dan perbuatan', 'smile'],
    ['Karena mungkin banyak yang kami ga sadarin, tapi malah melukai', 'tapa'],
    ['Oleh karena itu kami meminta maaf', 'smile'],
    ['TaqabbalAllahu minna wa minkum', 'tapa'],
    ["(Semoga Allah menerima amalanku dan amalanmu)", 'smile'],
    ["shiyamana wa shiyamakum", 'tapa'],
    ["(puasa kami dan puasa kalian)", 'smile'],
    ['...', 'normal'],
    ['Saya harap semoga di tahun ini, dan seterusnya', 'smile'],
    ['Kita menjadi lebih baik dari sebelumnya', 'normal'],
    ['Ya gitu aja dari saya,', 'yeay'],
    ['Sekali lagi maaf baru WA sekarang', 'sorry'],
    ['Salam buat keluarga, dan sampai bertemu lagi di kesempatan yang lain', 'normal'],
    ['Bye', 'hi'],
  ];

  listChatShintaAdha: any[] = [
    ['Assalamualaikum', 'tapa'],
    ['Hallo Neng Shinta geulis apa kabar?', 'hi'],
    ['Hehe met Idul Adha yaaa..', 'sorry'],
    ['Semoga kamu disana sama anak sehat sehat semua', 'smile'],
    // ['Tapi sesuai kata pepatah, mending terlambat dari pada ga sama sekali', 'sorry'],
    ['di kesempatan kali ini', 'merem'],
    // ['mumpung masih di bulan Syawal', 'merem'],
    ['Saya mau minta maaf banyak salah', 'tapa'],
    ['Basi ya? hahahaheu', 'sorry'],
    ['Tapi selama kita hidup, hal ini pasti bakal terjadi', 'tapa'],
    ['Apapun itu semoga kita selalu baik baim saja', 'normal'],
    ['Semoga juga kita bisa hidup bareng-bareng', 'smile'],
    ['Dan jadi keluarga yang utuh penuh kebahagian untuk kita', 'normal'],
    ['Juga anak anak', 'smile'],
    ['Semoga juga dilimpahkan semua rizki yang ada dan juga kesehatan', 'normal'],
    ['Ya gitu aja dari saya,', 'yeay'],
    ['Sekali lagi maaf baru WA sekarang', 'sorry'],
    ['Salam buat keluarga, dan sampai bertemu lagi di kesempatan yang lain', 'normal'],
    ['Wassalamualaikum', 'hi'],
    ['PS: Love You', 'yeay'],
  ];

  // dialog informal, ini xxx bakal di replace sama id params, nama source Gani
  listChatDig: any[] = [
    ['Assalamualaikum wr.wb.', 'tapa'],
    ['Hallo xxx apa kabar?', 'hi'],
    ['hehe maaf ya baru ngucapin lebaran nya sekarang', 'sorry'],
    ['Sibuk main game ini itu kayanya', 'smile'],
    ['Tapi sesuai kata pepatah, mending terlambat dari pada ga sama sekali', 'sorry'],
    ['Di kesempatan kali ini', 'smile'],
    ['mumpung masih di bulan Syawal', 'merem'],
    ['Saya mau minta maaf atas segala salah', 'tapa'],
    ['Ke xxx dan keluarga', 'smile'],
    ['Baik yang sengaja, maupun yang sengaja', 'sorry'],
    ['Baik kata kata, sikap, dan perbuatan', 'smile'],
    ['Karena mungkin banyak yang saya ga sadarin, tapi malah melukai', 'tapa'],
    ['Oleh karena itu saya, Gani. meminta maaf sebesar-besarnya', 'smile'],
    ['TaqabbalAllahu minna wa minkum', 'tapa'],
    ["(Semoga Allah menerima amalanku dan amalanmu)", 'smile'],
    ["shiyamana wa shiyamakum", 'tapa'],
    ["(puasa kami dan puasa kalian)", 'smile'],
    ['...', 'normal'],
    ['Saya harap semoga di tahun ini, dan seterusnya', 'smile'],
    ['Kita menjadi lebih baik dari sebelumnya', 'normal'],
    ['Ya gitu aja dari saya,', 'yeay'],
    ['Sekali lagi maaf baru WA sekarang', 'sorry'],
    ['Salam buat keluarga, dan sampai bertemu lagi di kesempatan yang lain', 'normal'],
    ['Bye', 'hi'],
  ];

  listChatDir: any[] = [
    ['Assalamualaikum wr.wb.', 'tapa'],
    ['Hallo xxx apa kabar?', 'hi'],
    ['hehe maaf ya baru ngucapin lebaran nya sekarang', 'sorry'],
    ['Sibuk main game ini itu kayanya', 'smile'],
    ['Tapi sesuai kata pepatah, mending terlambat dari pada ga sama sekali', 'sorry'],
    ['Di kesempatan kali ini', 'smile'],
    ['mumpung masih di bulan Syawal', 'merem'],
    ['Saya mau minta maaf atas segala salah', 'tapa'],
    ['Ke xxx dan keluarga', 'smile'],
    ['Baik yang sengaja, maupun yang sengaja', 'sorry'],
    ['Baik kata kata, sikap, dan perbuatan', 'smile'],
    ['Karena mungkin banyak yang saya ga sadarin, tapi malah melukai', 'tapa'],
    ['Oleh karena itu saya, Rizaq. meminta maaf sebesar-besarnya', 'smile'],
    ['TaqabbalAllahu minna wa minkum', 'tapa'],
    ["(Semoga Allah menerima amalanku dan amalanmu)", 'smile'],
    ["shiyamana wa shiyamakum", 'tapa'],
    ["(puasa kami dan puasa kalian)", 'smile'],
    ['...', 'normal'],
    ['Saya harap semoga di tahun ini, dan seterusnya', 'smile'],
    ['Kita menjadi lebih baik dari sebelumnya', 'normal'],
    ['Ya gitu aja dari saya,', 'yeay'],
    ['Sekali lagi maaf baru WA sekarang', 'sorry'],
    ['Salam buat keluarga, dan sampai bertemu lagi di kesempatan yang lain', 'normal'],
    ['Bye', 'hi'],
  ];

  // dialog informal, ini xxx bakal di replace sama id params, nama source Rizaq, Shinta dan keluarga
  listChatDirs: any[] = [
    ['Assalamualaikum wr.wb.', 'tapa'],
    ['Hallo xxx apa kabar?', 'hi'],
    ['hehe maaf ya baru ngucapin lebaran nya sekarang', 'sorry'],
    ['Sibuk ngerjain ini itu jadi ada beberapa orang yang kelewat', 'smile'],
    ['Tapi sesuai kata pepatah, mending terlambat dari pada ga sama sekali', 'sorry'],
    ['Di kesempatan kali ini', 'smile'],
    ['mumpung masih di bulan Syawal', 'merem'],
    ['Saya mau minta maaf atas segala salah', 'tapa'],
    ['Ke xxx dan keluarga', 'smile'],
    ['Baik yang sengaja, maupun yang sengaja', 'sorry'],
    ['Baik kata kata, sikap, dan perbuatan', 'smile'],
    ['Karena mungkin banyak yang saya ga sadarin, tapi malah melukai', 'tapa'],
    ['Oleh karena itu saya: Rizaq, Shinta dan keluara. meminta maaf sebesar-besarnya', 'smile'],
    ['TaqabbalAllahu minna wa minkum', 'tapa'],
    ["(Semoga Allah menerima amalanku dan amalanmu)", 'smile'],
    ["shiyamana wa shiyamakum", 'tapa'],
    ["(puasa kami dan puasa kalian)", 'smile'],
    ['...', 'normal'],
    ['Saya harap semoga di tahun ini, dan seterusnya', 'smile'],
    ['Kita menjadi lebih baik dari sebelumnya', 'normal'],
    ['Ya gitu aja dari saya,', 'yeay'],
    ['Sekali lagi maaf baru WA sekarang', 'sorry'],
    ['Salam buat keluarga, dan sampai bertemu lagi di kesempatan yang lain', 'normal'],
    ['Wassalamualaikum. Bye', 'hi'],
  ];

  // dialog formal, ini xxx bakal di replace sama id params, nama source Gani
  listChatDfg: any[] = [
    ['Assalamualaikum wr.wb.', 'tapa'],
    ['Hallo xxx apa kabar?', 'hi'],
    ['Maaf xxx saya baru ngucapin lebaran nya sekarang', 'sorry'],
    ['Padahal sudah bertahun tahun ga kontak', 'smile'],
    ['Saya siapa??', 'merem'],
    ['Perkenalkan lagi, saya Gani, dulu dulu sekali pernah kerja under xxx', 'sorry'],
    ['Kenapa baru sekarang?', 'merem'],
    ['Hemm.. kontak saya banyak yang hilang, inipun saya nemu karena kebetulan xxx masih join group WA yang lama', 'smile'],
    ['Tapi sesuai kata pepatah, mending terlambat dari pada ga sama sekali', 'sorry'],
    ['Oleh karena itu di kesempatan kali ini', 'smile'],
    ['Mumpung masih di bulan Syawal', 'merem'],
    ['Saya mau minta maaf atas segala salah', 'tapa'],
    ['Ke xxx dan keluarga', 'smile'],
    ['Baik yang sengaja, maupun yang sengaja', 'sorry'],
    ['Baik kata kata, sikap, dan perbuatan', 'smile'],
    ['Karena mungkin banyak yang saya ga sadarin, tapi malah melukai', 'tapa'],
    ['Oleh karena itu saya, Gani. meminta maaf sebesar-besarnya', 'smile'],
    ['TaqabbalAllahu minna wa minkum', 'tapa'],
    ["(Semoga Allah menerima amalanku dan amalanmu)", 'smile'],
    ["shiyamana wa shiyamakum", 'tapa'],
    ["(puasa kami dan puasa kalian)", 'smile'],
    ['Saya harap semoga di tahun ini, dan seterusnya', 'tapa'],
    ['Kita menjadi lebih baik dari sebelumnya', 'normal'],
    ['Ya gitu aja dari saya,', 'yeay'],
    ['Sekali lagi maaf baru WA sekarang', 'sorry'],
    ['Semoga sehat selalu untuk xxx dan keluarga ', 'normal'],
    ['Assalamualaikum', 'hi'],
  ];

  // dialog formal, ini xxx bakal di replace sama id params, nama source Rizaq
  listChatDfr: any[] = [
    ['Assalamualaikum wr.wb.', 'tapa'],
    ['Hallo xxx apa kabar?', 'hi'],
    ['Maaf xxx saya baru ngucapin lebaran nya sekarang', 'sorry'],
    ['Padahal sudah bertahun tahun ga kontak', 'smile'],
    ['Saya siapa??', 'merem'],
    ['Perkenalkan lagi, saya Gani, dulu dulu sekali pernah kerja under xxx', 'sorry'],
    ['Kenapa baru sekarang?', 'merem'],
    ['Hemm.. kontak saya banyak yang hilang, inipun saya nemu karena kebetulan xxx masih join group WA yang lama', 'smile'],
    ['Tapi sesuai kata pepatah, mending terlambat dari pada ga sama sekali', 'sorry'],
    ['Oleh karena itu di kesempatan kali ini', 'smile'],
    ['Mumpung masih di bulan Syawal', 'merem'],
    ['Saya mau minta maaf atas segala salah', 'tapa'],
    ['Ke xxx dan keluarga', 'smile'],
    ['Baik yang sengaja, maupun yang sengaja', 'sorry'],
    ['Baik kata kata, sikap, dan perbuatan', 'smile'],
    ['Karena mungkin banyak yang saya ga sadarin, tapi malah melukai', 'tapa'],
    ['Oleh karena itu saya, Gani. meminta maaf sebesar-besarnya', 'smile'],
    ['TaqabbalAllahu minna wa minkum', 'tapa'],
    ["(Semoga Allah menerima amalanku dan amalanmu)", 'smile'],
    ["shiyamana wa shiyamakum", 'tapa'],
    ["(puasa kami dan puasa kalian)", 'smile'],
    ['Saya harap semoga di tahun ini, dan seterusnya', 'tapa'],
    ['Kita menjadi lebih baik dari sebelumnya', 'normal'],
    ['Ya gitu aja dari saya,', 'yeay'],
    ['Sekali lagi maaf baru WA sekarang', 'sorry'],
    ['Semoga sehat selalu untuk xxx dan keluarga ', 'normal'],
    ['Assalamualaikum', 'hi'],
  ];

  listChatDefault: any[] = [
    ['Assalamualaikum', 'tapa'],
    ['Hallo apa kabar?', 'hi'],
    ['hehe maaf tapi kamu siapa ya??', 'sorry'],
    ['kok bisa nyasar ke page ini?', 'smile'],
    ['ini sih harusnya page pribadi buat saya ngirim digital card dialog ke kolega', 'merem'],
    ['makanya kok bisa??', 'smile'],
    ['jangan jangan kamu bukan kolega aku lagi', 'sorry'],
    ['tenang tenang, jangan berkecil hati yaa', 'normal'],
    ['inimah cuman gini aja, ga special', 'smile'],
    ['kamu ga dapat ucapan kaya gini, mungkin karena aku bakal nyiapin yg lebih special lagi buat kamu', 'merem'],
    ['mungkin... (krik krik krik)', 'sorry'],
    ['jadi tunggu aja ya hehehe', 'tapa'],
    ['terlepas dari itu saya minta maaf kalau card ini masih jelek', 'sorry'],
    ["maklum masih tahap penyempurnaan (dikira EYD)", 'smile'],
    ['yaaa segitu aja dari saya', 'normal'],
    ['sampai bertemu lagi di IRL', 'yeay'],
    ['Bye', 'hi'],
  ];

  ngOnInit(): void {
    // Retrieve 'id' parameter value from the URL
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.df = params['df'];
      this.listChat = this.listChatDefault;
      if (this.id == 'mas-ali'){
        this.listChat = this.listChatMasAli;
      }
      if (this.id == 'a-ari'){
        this.listChat = this.listChatAAri;
      }
      if (this.id == 'indra'){
        this.listChat = this.listChatIndra;
      }
      if (this.id == 'shinta' && this.df == 'dia'){
        this.listChat = this.listChatShintaAdha;
      }
      if (this.df == 'dig' && this.id != ''){
        this.listChat = this.listChatDig;
        this.renameListChat(this.id)
      }
      if (this.df == 'dir' && this.id != ''){
        this.listChat = this.listChatDir;
        this.renameListChat(this.id)
      }
      if (this.df == 'dirs' && this.id != ''){
        this.listChat = this.listChatDirs;
        this.renameListChat(this.id)
      }
      if (this.df == 'dfg' && this.id != ''){
        this.listChat = this.listChatDfg;
        this.renameListChat(this.id)
      }
      if (this.df == 'dfr' && this.id != ''){
        this.listChat = this.listChatDfr;
        this.renameListChat(this.id)
      }
    });
  }

  renameListChat(nameTarget:string){
    nameTarget = nameTarget.replace(/-/g, ' ')
    for (let i = 0; i < this.listChat.length; i++) {
      this.listChat[i][0] = this.listChat[i][0].replace(/xxx/g, nameTarget);
    }
  }  

  indexChat: number = 0;
  test() {
    this.updateText();
  }

  updateText() {
    if (this.indexChat < this.listChat.length) {
      this.textChat02 = this.textChat01;
      this.textChat01 = this.textChat;
      this.textChat = this.listChat[this.indexChat][0];
      this.emot = this.listChat[this.indexChat][1];
      this.indexChat += 1;
    }
  }
}
