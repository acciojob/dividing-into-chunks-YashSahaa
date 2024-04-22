const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ans = []
	let sum =0
	let arr2=[]
	for(let i of arr){
		if(sum+i>n){
			ans.push(arr2)
			arr2=[]
			sum=0
		}
		if(sum+i<=n){
			sum+=i
			arr2.push(i)
		}
	}
	if(sum<=n) ans.push(arr2)
	return ans
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
