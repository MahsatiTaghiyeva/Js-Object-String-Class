// class CustomMatch{
//     constructor(value){
//         this.value = value;
//     }
//     add(a){
//         this.value += a;
//         return this;
//     }
//     substract(a){
//         this.value -= a;
//         return this;
//     }
//     multiply(a){
//         this.value *=a;
//         return this;
//     }
//     divide(a){
//         this.value /= a;
//         return this;
//     }
// }
// var result = new CustomMatch(50).add(6).substract(30).multiply(3).divide(2);
// console.log(result.value);

let nums = [1,6,4,9,8,4,0,7,3,5,2];

function Sort(arr){
        for (let j = 0; j < arr.length; j++) {
    for(let i =0; i< arr.length;i++){
        if(arr[i]>arr[i+1]){
            let temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i]= temp;
        }
    }
}}
Sort(nums);
for(let i =0; i< nums.length;i++ ){
    console.log(nums[i]);
}

let sentence = "Hello World !";
function WordElementNum(str){
    let arr = [];
    let words = sentence.split("");
    
}