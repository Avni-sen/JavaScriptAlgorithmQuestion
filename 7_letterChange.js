export const letterChange = (str) => {

    let smalledLetterStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
        if(char === "z"){
            return "a";
        }else{
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

    console.log(smalledLetterStr);

    let capitaledLetterStr = smalledLetterStr.replace(/[a|e|i|o|u]/gi, (char) => {
        return char.toUpperCase();
    });
    console.log(capitaledLetterStr);
}

//aşağıdaki ifade bir sonraki harfi bulmak için kullanılır.
//console.log(string.fromCharCode("A".charCodeAt(0) + 1)); // B

//charcode() : bir karakterin unicode değerini döndürür.


//verilen string ifadeyi kendisinden sonra gelen harfe çevirir.eğer z ise a harfine  çevir.
//eğer string ifade de sesli harf varsa büyük harfe çevir.
//string i küçük harfe çevir.**
//string.fromCharCode() : unicode değerini karaktere çevirir. 65 --> A