import { Component } from '@angular/core';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";

@Component({
    selector: 'app-uploader',
    standalone: true,
    templateUrl: './uploader.component.html',
    styleUrl: './uploader.component.css',
    imports: [SidenavComponent]
})
export class UploaderComponent {
  fileToUpload: File | null = null;
  uploading = false;
  uploadProgress = 0;

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0] as File;
  }

  uploadFile() {
    if (this.fileToUpload) {
      this.uploading = true;
      // Simulate upload progress
      const timer = setInterval(() => {
        this.uploadProgress += 10;
        if (this.uploadProgress >= 100) {
          clearInterval(timer);
          this.uploadProgress = 0;
          this.uploading = false;
          this.fileToUpload = null;
        }
      }, 500);
    }
  }
}
