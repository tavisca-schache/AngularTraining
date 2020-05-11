// EX 2 -> Define a string variable with data of 100 characheters in it and perform the following operation on the data
//       - Find out the indexes and occurances of character 'a' in it
//       - Findout number of statements in the string. (value after . symbol) 
//       - Convert the first character of the statement in Upper case.

class StringOperations{
    constructor(private str: string){}

    getOccurrencesOfA(char : string): void{
        let cnt: number = 0;
        this.str.split('').forEach((c,i)=>{
            if(c === char){
                console.log(`found "a" at ${i}`);
                cnt++;
            }
        });
        console.log(`number of occurrence of "${char}" : ${cnt}`);
    }

    private getStatements(): Array<string>{
        let stmts = new Array<string>();
        stmts = this.str.split('.');
        stmts = stmts.filter(s => s.length > 0);
        return stmts;
    }

    getNumberOfStatements(): void{
        let stmts: Array<string> = this.getStatements();
        console.log(`Number of statements : ${stmts.length}`);
    }

    toFirstCharUpperCase(): void{
        let newStr: string = '';
        let stmts: Array<string> = this.getStatements();
        stmts.forEach(s =>{
            let firstChar: string = s.charAt(0).toUpperCase();
            newStr = newStr.concat(firstChar.concat(s.substr(1)).concat("."));
        });
        console.log(`New string : ${newStr.trim()}`);
    }
}

let strOpp = new StringOperations("it is a bright sunny day. good time to learn angular. hello world. time for some coding.");;
strOpp.getOccurrencesOfA('a');
strOpp.getNumberOfStatements();
strOpp.toFirstCharUpperCase();