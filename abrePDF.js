const abrirPDF = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/Lâmina-do-Oculto.pdf', true);
    xhr.responseType = 'blob';
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        const blob = new Blob([xhr.response], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(blob);
        window.open(fileURL, '_blank'); // Abre o PDF em uma nova aba
      } else {
        console.error('Erro ao abrir o PDF:', xhr.status);
      }
    };
  
    xhr.send();
  };
  