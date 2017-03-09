console.log("***********'");
var allenavn =["A","B","C"];
var b = allenavn.map( function(login){
        console.log(login);
        switch (login) {
            case "A" :
                return "a";
                break;
            case "B" :
                return "b";
                break;
            case "C" :
                return "c";
                break;
            default :
                return "IKKE Definert";
                break;
        }

});
console.log(b);

