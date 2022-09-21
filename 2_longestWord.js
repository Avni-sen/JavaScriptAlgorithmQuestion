export const longestWord = (str) => {

    //regex kullanarak kelimede kullanılan özel karaktrleri temizliyoruz.
    //split ile kelimeleri diziye atıyoruz.
    //sort ile diziyi büyükten küçüğe sıralıyoruz.
    const arr = str.replace(/[^a-zA-Z ]/g,"").split(' ');
    arr.sort((a,b) =>  {return b.length - a.length});
    //max sayıda karakteri olan kelimeyi döndürür.
    return arr[0];
}


//kelimerle oluşturduğumuz array i , kelimelerin karakter sayılarına göre 
//azalan bir şekilde sıralamak
//En başta yani 0.indexte yer alan kelimeyi return etmek.