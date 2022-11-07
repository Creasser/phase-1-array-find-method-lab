// code your solution here
function superbowlWin(arr){
    let ans = arr.find(item => item.result === 'W')
        if (ans){
            return ans.year
            
        }else{
            return undefined
        }
    }


