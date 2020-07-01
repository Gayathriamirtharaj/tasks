//finding the first even number
var arr=[1,2,3,4,5,6,7];
var f=arr.find((x) => x % 2 == 0);
console.log(f);

//using filter
var arr=[12,23,48,60];
var res=arr.filter(value=>value%12==0);
console.log(res);

//reduce
var arr=[12,2,3,4,5];
var sum = arr.reduce((sum, x) => sum + x);
console.log(sum);

//keys
var arr=[12,23,43,54];
var a=arr.keys();
for(var key of a)
{
    console.log(key);
}

//values
var arr=[1,2,3,4];
var a=arr.values();
for(var value of a)
{
    console.log(value);
}

//endswith
var string="This world is beautiful";
console.log(string.endsWith('best',string.length));

//difference
var arr=[1,2,3,4,5,9,6];
var arrb=[1,4,5,7,8];
var diff = arr.filter(x => !arrb.includes(x));
console.log(diff);

//union
var arr=[1,2,3,4,5,6,7];
var arra=[1,4,5,6,7,9,8];
var union= [...arr,...arra];
console.log(union);

//chunking the array
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
console.log(chunk([1, 2, 3, 4, 5], 2));