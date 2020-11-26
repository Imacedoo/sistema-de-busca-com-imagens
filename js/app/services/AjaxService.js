class AjaxService {

    post(url, dados) {

        return $.ajax({
            method: 'POST',
            url: url,
            data: dados,
            success: retorno => retorno
        });

    }
}