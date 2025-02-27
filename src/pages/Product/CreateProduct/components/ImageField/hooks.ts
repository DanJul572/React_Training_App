import { MouseEventHandler } from 'react';

import { RenderFieldType } from '../../types';
import { HandleChangeType } from './types';

const useImageField = (props: RenderFieldType) => {
  const handleChange: HandleChangeType = (event, field) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        if (e.target) {
          const img = new Image();
          img.onload = function () {
            // Ukuran baru yang diinginkan (misalnya, lebar 300px dan tinggi proporsional)
            const maxWidth = 500;
            const maxHeight = 500;
            let width = img.width;
            let height = img.height;

            // Menyesuaikan ukuran jika lebih besar dari ukuran maksimum
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }

            // Membuat canvas untuk meresize gambar
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (ctx) {
              canvas.width = width;
              canvas.height = height;

              // Menggambar gambar ke canvas dengan ukuran yang baru
              ctx.drawImage(img, 0, 0, width, height);

              // Mengonversi canvas ke base64
              const resizedBase64 = canvas.toDataURL(file.type);

              // Menyimpan base64 ke dalam state atau field
              props.setValue('image', resizedBase64);
              field.onChange(file);
            }
          };
          img.src = e.target.result as string; // Gambar yang dibaca
        }
      };

      reader.readAsDataURL(file);

      // Reset nilai input file setelah upload berhasil
      event.target.value = ''; // Mengosongkan nilai input file
    }
  };

  const hanldeClear: MouseEventHandler<HTMLButtonElement> = () => {
    props.resetField('imageDisplay');
    props.resetField('image');
  };

  return {
    handleChange,
    hanldeClear,
  };
};

export default useImageField;
