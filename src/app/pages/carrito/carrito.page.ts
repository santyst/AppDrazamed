import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController, ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';

import { finalize } from 'rxjs/operators';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service'

const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  code: any;
  code2: any;
  user: any;
  userid: any;
  mycart: any;
  cantidad = [];
  item_code = [];
  formula = [];
  base_url: any;
  constructor(private router: Router, private menuCtrl: MenuController, private cartService: CartService,
              private alertCtrl: AlertController, private camera: Camera, private file: File, private http: HttpClient,
              private webview: WebView,
              private actionSheetController: ActionSheetController, private toastController: ToastController,
              private storage: Storage, private plt: Platform, private loadingController: LoadingController,
              private ref: ChangeDetectorRef, private filePath: FilePath, private platform: Platform, private auth: AuthService, private config: ConfigService) {
    this.base_url = config.get_base_url();
    this.mycart = this.cartService.getCurrent();
    console.log(this.mycart);
  }

  images = [];
  apiUrl3 = `https://dev.drazamed.com`;
  imgUrl = `images/products/default.png`;
  postUrl = `https://testsanti.000webhostapp.com/phpserver/posts.php`;
  apiImg = `images/products/`;
  apiUrl8 = `.jpg`;
  delete_cart = `empty-cart?email=`;
  subtotal: any;
  subtotal1: any;
  cart = [];
  user1: any;
  tax: any;
  tax1: any;
  value: any;
  name: any;
  text: any;
  total: any;
  orden: any;
  err1: any;
  med: any;
  tax2: any;
  division: any;
  subtotal2: any;
  async ngOnInit() {
    this.plt.ready().then(() => {
      this.loadStoredImages();
    });
    this.cart = this.cartService.getCart();
    console.log(this.cart);
    for (const formula of this.cart) {
      if (formula.is_pres_required === 1) {
        this.value = formula.value;
        this.name = formula.name;
        this.med = formula.medicine_name;
        this.text = `El medicamento ${this.value || this.name || this.med} requiere adjuntar fórmula médica`;
        const alert = await this.alertCtrl.create({
          header: this.text,
          message: '<img src = "../../assets/img/RECURSOS/iconos drazamed-27.png" class="alert">',
          mode: 'ios',
          cssClass: 'failed',
          buttons: [
            {
              text: 'Aceptar',
              cssClass: 'btnalert',
            }
          ]
        });
        await alert.present();
      }
    }

  }

  goPerfil() {
    this.router.navigate(['perfil']);
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    this.user = this.auth.getusuario();
    this.userid = this.user.email;
    console.log(this.userid);
  }
  goHome() {
    this.router.navigate(['home']);
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getSubTotal() {
    return this.cart.reduce((i, j) => i + (j.unit_price * j.medicine_count || + j.mrp * j.medicine_count), 0);
  }
  getTotal() {
    if (this.cart.length !== 0) {
      return this.getSubTotal() + 2000;
    }
    else {
      return 0;
    }
  }
  getTax() {
    this.subtotal = 0;
    this.subtotal1 = 0;
    for (let ta of this.cart) {
      this.total = (ta.mrp * ta.medicine_count || ta.unit_price * ta.medicine_count);
      this.tax1 = ta.tax ? ta.tax : 0;
      this.subtotal = Math.floor(this.total / (((100) + this.tax1) / 100));
      this.subtotal1 += this.subtotal;
    }
    return this.subtotal1;
  }
  envio() {
    if (this.cart.length === 0) {
      return 0;
    }
    else {
      return 2000;
    }
  }
  impuesto() {
    return this.getSubTotal() - this.getTax();
  }
  goBuscar() {
    this.router.navigate(['medicamentos']);
  }


  // --------------------- codigo para subir formula

  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        let arr = JSON.parse(images);
        this.images = [];
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, filePath: filePath });
        }
      }
    });
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000,
      mode: 'ios'
    });
    toast.present();
  }
  async showAlert1() {
    const alert = await this.alertCtrl.create({

      message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert1">Tu fórmula ha sido subida correctamente',
      mode: 'ios',
      cssClass: 'failed',
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'btnalert',
        }
      ]
    });
    await alert.present();
  }

  async showAlert2() {
    const alert = await this.alertCtrl.create({
      message: '<img src = "../../assets/img/RECURSOS/wrong.png" class="alert1">Ha ocurrido un error al subir tu fórmula, intenta de nuevo',
      mode: 'ios',
      cssClass: 'failed',
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'btnalert',
        }
      ]
    });
    await alert.present();
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Selecciona una imagen',
      mode: 'ios',
      buttons: [{
        text: 'Buscar en galeria',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Usar camara',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    });

  }

  createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      this.updateStoredImages(newFileName);
    }, error => {
      this.presentToast('Error al almacenar fórmula');
    });
  }

  updateAlarm() {

  }

  goBack() {

  }

  updateStoredImages(name) {
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      if (!arr) {
        let newImages = [name];
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
        arr.push(name);
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);

      let newEntry = {
        name: name,
        path: resPath,
        filePath: filePath
      };

      this.images = [newEntry, ...this.images];
      this.ref.detectChanges(); // trigger change detection cycle
    });
  }

  deleteImage(imgEntry, position) {
    this.images.splice(position, 1);

    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      let filtered = arr.filter(name => name != imgEntry.name);
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

      var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);

      this.file.removeFile(correctPath, imgEntry.name).then(res => {
        this.presentToast('Archivo removido');
      });
    });
  }

  startUpload(imgEntry) {
    this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
      .then(entry => {
        (<FileEntry>entry).file(file => this.readFile(file))
      })
      .catch(err => {
        this.presentToast('Error al obtener fórmula médica');
      });
  }

  readFile(file: any) {
    const reader = new FileReader();
    reader.onload = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      formData.append('file', imgBlob, file.name);
      this.uploadImageData(formData);
    };
    reader.readAsArrayBuffer(file);
  }

  async uploadImageData(formData: FormData) {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Por favor espera...',
      mode: 'ios',
      spinner: 'dots'
    });
    await loading.present();

    this.http.post('https://testsanti.000webhostapp.com/phpserver/json.php', formData)
      .pipe(
        finalize(() => {
          loading.dismiss();
        })
      )
      .subscribe(res => {
        if (res['success']) {
          this.showAlert1();

        } else {
          this.showAlert2();
        }
      });


  }
  async send() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Por favor espera...',
      mode: 'ios',
      spinner: 'dots'
    });
    await loading.present();
    this.user1 = this.auth.getusuario();
    this.userid = this.user1.email;
    for (let code of this.cart) {
      this.item_code.push(code.item_code);
      this.cantidad.push(code.medicine_count);
      this.formula.push(code.is_pres_required);
    }

    this.orden = {
      email: this.userid,
      cart_length: this.cart.length,
      shipping_cost: 2000,
      quantity: this.cantidad,
      is_pres_required: 0,
      item_code: this.item_code
    };
    this.http.post(`${this.base_url}medicine/store-prescription/0`,
      this.orden, { headers: new HttpHeaders({ "Content-Type": "application/json" }) })
      .pipe(
        finalize(() => {
          loading.dismiss();
        })
      )
      .subscribe(async (mensaje) => {
        this.code = mensaje;
        this.code2 = this.code.status;
        if (this.code2 === 'SUCCESS') {
          const alert = await this.alertCtrl.create({
            message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">Tu orden fue creada',
            mode: 'ios',
            cssClass: 'failed',
            backdropDismiss: false,
            buttons: [
              {
                text: 'Aceptar',
                cssClass: 'btnalert',
                handler: (data) => { alert2.present(); }
              }
            ]
          });
          const alert2 = await this.alertCtrl.create({
            message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">En algunos minutos verificaremos tu orden',
            mode: 'ios',
            cssClass: 'failed',
            backdropDismiss: false,
            buttons: [
              {
                text: 'Aceptar',
                cssClass: 'btnalert',
                handler: (data) => { this.router.navigate(['mispedidos']); }
              }
            ]
          });

          this.http.get(`${this.base_url}${this.delete_cart}${this.userid}`).subscribe(val => {
            console.log(val);
          });
          this.cartService.removeAll();

          await alert.present();

        }
        else {
          console.log(mensaje);
          const alert = await this.alertCtrl.create({
            message: '<img src = "../../assets/img/RECURSOS/wrong.png" class="alert">Su orden no fue creada, intente de nuevo',
            mode: 'ios',
            cssClass: 'failed',
            backdropDismiss: false,
            buttons: [
              {
                text: 'Aceptar',
                cssClass: 'btnalert',
              }
            ]
          });
          await alert.present();
        }
      });
  }
}
