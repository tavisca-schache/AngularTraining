//EX 1 -> Sort and Reverse data from string array based on string length

class ArrayOperations{
    constructor(private arr: Array<string>){}

    arrSort1(): Array<string>{
        for(let i:number = 0; i < this.arr.length - 1; i++)
        {
            for(let j:number = i + 1; j < this.arr.length; j++)
            {
                if(this.arr[i].length > this.arr[j].length){
                    let t: string = this.arr[i];
                    this.arr[i] = this.arr[j];
                    this.arr[j] = t;
                }
            }
        }
        return this.arr;
    }

    arrSort2(): Array<string>{
        return this.arr.sort((m,n)=> {
            if(m.length > n.length){
                return 1;
            }
            if(m.length < n.length){
                return -1;
            }
            return 0;
        });
    }

    arrReverse1(): Array<string>{
        for(let i: number = 0; i < this.arr.length / 2; i++)
        {
            let t: string = this.arr[i];
                this.arr[i] = this.arr[this.arr.length - 1 - i];
                this.arr[this.arr.length - 1 - i] = t;
        }
        return this.arr;
    }

    arrReverse2(): Array<string>{
        return this.arr.reverse()
    }
}

var arrayOps = new ArrayOperations(['abc', 'abcd', 'ab', 'abcde', 'a']);
console.log('After sorting :');
console.log(arrayOps.arrSort1());
console.log(arrayOps.arrSort2());
console.log('After reversing :');
console.log(arrayOps.arrReverse1());
console.log(arrayOps.arrReverse2());