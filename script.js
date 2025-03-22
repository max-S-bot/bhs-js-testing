/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */
//python -m http.server

function firstLast6(arr) {
    return arr[arr.length-1]==6 || arr[0]==6;
}

function has23(arr) {
    return arr.includes(3) || arr.includes(2);
}

function fix23(arr) {
    if((arr[0]==2&&arr[1]==3)) {
        arr[1]=0;
    }
    if((arr[1]==2&&arr[2]==3)) {
        arr[2]=0;
    }
    return arr;
}

function countYZ(str) {
    str=str.toLowerCase();
    let count=0;
    for (let i=0; i<str.length; i++) {
        if((str[i]=="z"||str[i]=="y")&&(i+1==str.length||str[i+1]==" ")){
            count++;
        }
    }
    return count;
}

function endOther(str1,str2) {
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    if (str1.length>str2.length){
        return str2==str1.slice(str1.length-str2.length);
    } else {
        return str1==str2.slice(str2.length-str1.length);
    }
}

function starOut(str) {
let final="";
for (let i=0; i<str.length; i++){
    if(str[i+1]!="*"&&str[i]!="*"&&str[i-1]!="*") {
        final+=str[i];
    }
}
return final;
}

function getSandwich (str) {
    let index=str.indexOf("bread");
    if (index==-1) {
        return "";
    } else {
        let i=str.slice(index+5).indexOf("bread");
        while((str.slice(i,i+5)!="bread"||str.slice(i+5).includes("bread"))) {
            i++
        }
        console.log(i)
        if (i==-1) {
            return "";
        } else {
            return str.slice(index+5,i);
        }
    }
}

function canBalance(arr) {
    for (let i=0; i<arr.length; i++) {
        let s1=0;
        for (let j=0; j<i; j++) {
            s1+=arr[j];
        }
        let s2=0;
        for (let k=i; k<arr.length; k++) {
            s2+=arr[k]
        }
        if (s1==s2) {return true}
    }
    return false;
}

function countClumps (arr) {
    let count=0
    for (let i=0; i<arr.length; i++) {
        let s=0;
        while(arr[i]==arr[i+1]) {
            if(s==0){count++}
            s++
            arr.splice(i+1,1)
        }
    }
    return count
}

function sameEnds(str) {
    let final="";
    for (let i=0; i<=(str.length+str.length%2)/2; i++) {
        if(str.length-i<i) {break;}
        if(str.slice(0,i)==str.slice(str.length-i,str.length)){
            final=str.slice(0,i);
        }
    }
    return final
}

/*







*/

function all_even(arr) {
    function evenCheck(num) {
        return num%2==0;
    }
    return arr.filter(evenCheck);
}

function no_space(arr) {
    function checkSpace(str) {
        return !str.includes(" ")
    }
    return arr.filter(checkSpace)
}

function all_positive(arr) {
    function evenCheck(s) {
        return s.length==all_even(s).length;
    }
    return arr.filter(evenCheck);
}

function same_vowels(arr) {
    function allSame(str) {
        let obj={};
        for(let i=0; i<str.length; i++) {
            let c=str[i];
            if (c=="a"||c=="e"||c=="i"||c=="o"||c=="u") {
                obj[str[i]]=1;
            }
        }
    return Object.keys(obj).length==1;
    }
    return arr.filter(allSame);
}

function times_ten (arr) {
    function x10(num) {
        return num*10;
    }
    return arr.map(x10);
}

function types (arr) {
    function returnType(elem) {
        return typeof elem;
    }
    return arr.map(returnType);
}

function no_vowels(arr) {
    function removeConsonants(str) {
        let final="";
        for(let i=0; i<str.length; i++) {
            let c=str[i]
            if (c=="a"||c=="e"||c=="i"||c=="o"||c=="u") {
                final+=str[i];
            }
        }
        return final;
    }
    return arr.map(removeConsonants);
}

function double_matrix(arr2d) {
    function doubleElems(arr) {
        function double (n) {return 2*n}
        return arr.map(double);
    }
    return arr2d.map(doubleElems);
}

function sum_nums(arr) {
    function sum(s,n) {
        return s+n;
    }
    return arr.reduce(sum);
}

function product_matrix(arr2d) {
    function arrProd(c,arr) {
        function prod(p,n) {
            return p*n;
        }
        return c*arr.reduce(prod);
    }

    return arr2d.reduce(arrProd,1);
}

function average(arr) {
    return sum_nums(arr)/arr.length;
}

function lucky_numbers(arr) {
    function addNum(str,num) {
        if(arr.indexOf(num)==arr.length-1) {
            return str+"and "+num;
        } else {return str+num+", ";}
    }
    return arr.reduce(addNum,"Your lucky numbers are: ");
}