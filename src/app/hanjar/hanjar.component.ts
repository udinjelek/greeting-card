import { Component } from '@angular/core';

@Component({
  selector: 'app-hanjar',
  templateUrl: './hanjar.component.html',
  styleUrls: ['./hanjar.component.scss']
})
export class HanjarComponent {
  name = 'Angular';
  textChat: string = '';
  textChat01: string = '';
  textChat02: string = '';
  emot: string = 'surat';
  listChat: any[] = [
    ['Assalamualaikum', 'tapa'],
    ['Hallo Pak Hanjar apa kabar?', 'hi'],
    ['hehe maaf ya baru balas telegram sekarang', 'sorry'],
    ['niat nya memang mau reply pake card kaya gini', 'smile'],
    ['cuman bikin nya ribet', 'merem'],
    ['waktunya ga cukup. yada yada yada..', 'smile'],
    ['makanya ekspetasi kamis masuk', 'yeay'],
    ['Selasa, Rabu bisa kerjain ', 'normal'],
    ['malah dah ketemu hari Selasa. hahaha', 'merem'],
    ['tapi ya udah lah yaaa', 'sorry'],
    ['back to the topik', 'normal'],
    ['Di kesempatan kali ini', 'smile'],
    ['Saya mau minta maaf atas segala salah', 'tapa'],
    ['Baik yang sengaja, maupun yang sengaja', 'sorry'],
    ['Baik kata kata, sikap, raut wajah, bahkan aura', 'tapa'],
    ['Karena saya yakin semuanya sengaja hehe', 'sorry'],
    ['... ih iya', 'smile'],
    ['TaqabbalAllahu minna wa minkum', 'tapa'],
    ["(Semoga Allah menerima amalanku dan amalanmu)", 'smile'],
    ["shiyamana wa shiyamakum", 'tapa'],
    ["(puasa kami dan puasa kalian)", 'smile'],
    ['...', 'normal'],
    ['Saya harap semoga di tahun ini, dan seterusnya', 'smile'],
    ['Kita menjadi lebih baik dari sebelumnya', 'normal'],
    ['Ya gitu aja dari saya,', 'yeay'],
    ['Maaf bales telegram nya sengaja delay, hehe', 'sorry'],
    ['Sampai bertemu di tempat kerja', 'normal'],
    ['Bye', 'hi'],
  ];

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
