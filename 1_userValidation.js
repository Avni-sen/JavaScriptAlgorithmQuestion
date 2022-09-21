export const userValidation = (str) => {
    if (
        str.length >= 4 &&
        str.length <= 25 &&
        (/[a-zA-Z]/).test(str.slice(0, 1)) &&
        (/^\w+$/).test(str) &&
        (/[a-zA-Z0-9]/).test(str.slice(-1))
    ) {
        return true;
    }
    return false;
}


//regular expression : ^[a-z0-9_-]{3,16}$ çok önemli bir konu...
//charAt() : stringin belirtilen indexindeki karakteri döndürür.
// (/[a-zA-Z]/).test(str.charAt(1)) : stringin 1. indexindeki karakterin a-z veya A-Z arasında olup olmadığını kontrol eder.
//  (/^\w+$/).test(str) : stringin içindeki karakterlerin a-z, A-Z, 0-9, _ veya - olup olmadığını kontrol eder.
//slice() : stringin belirtilen indexler arasındaki karakterleri döndürür.
//test(): bir stringin belirtilen bir ifade ile eşleşip eşleşmediğini kontrol eder.



//kullancı adı 4 ile 25 karakter arasında olmalıdır
//kullanıcı adı harf ile başlamalıdır
//kullanıcı adı sadece harf,altçizgi ve rakamlardan oluşmalıdır
//kullanıcı adı altçizgi ile bitmemelidir.