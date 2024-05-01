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
    });
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
