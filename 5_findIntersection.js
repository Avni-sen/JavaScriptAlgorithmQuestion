export const findIntersection = (arr) => {

    //iki arr içerisinde çakışan değerleri string ile bize ver 
    //1.yeni bir array tipinde değişken tanımla
    
    let intersection = [];

    //2- split() , replace() kullanıcaz(replace de boşlukları silecez)
    const set1 = arr[0].replace(/\s/g,"").split(",");
    console.log(set1)
    const set2 = arr[1].replace(/\s/g,"").split(",");
    console.log(set2)

    //3-foreach ile dönecez bütün array içindeki elemanları
    //diğer array içerisinde olup olmadığını kontrol edecez
    //varsa tanımladığımız yeni array içerisine push edecez
    set2.forEach(item => {
        if(set1.includes(item)){
            intersection.push(item)
        }
    });

    //eğer tanımlamış olduğumuz arr boş ise return false dönecez
    // boş değilse arr içerisindeki değerleri string halinde return edecez.
    return intersection.length === 0 ? false : intersection.toString();
    
}