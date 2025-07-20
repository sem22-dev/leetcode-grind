
function isValidSudoku(board) {
    const sol = new Solution();
    return sol.isValidSudoku(board);
}

class Solution{
    //check isValidSudoku
    isValidSudoku(board){

        if(!this.isValidColumn(board)){
            return false
        }

        if(!this.isValidGrid(board)){
            return false
        }

        if(!this.isValidRow(board)){
            return false
        }

        return true;


    }

    //check if it is a valid row
    isValidRow(board){
        for(const nums of board){
            if(this.containsDuplicate(nums)){
                return false
            }
        }
        return true
    }

    //check if it is a valid column
    isValidColumn(board){
        for(let i = 0; i < 9; i++){
            let column = []
            for(let j = 0; j < 9; j++){
                column.push(board[j][i])
            }
            if(this.containsDuplicate(column)){
                return false
            }
        }

        return true
    }

    //check if a 3x3 grid is valid
    isValidGrid(board){
        for(let i = 0; i < 9; i += 3){
            for(let j = 0; j < 9; j += 3){
                let nums_in_grid = [
                    board[0 + i][0 + j], board[0 + i][1 + j], board[0 + i][2 + j],
                    board[1 + i][0 + j], board[1 + i][1 + j], board[1 + i][2 + j],
                    board[2 + i][0 + j], board[2 + i][1 + j], board[2 + i][2 + j],
                ]
                if(this.containsDuplicate(nums_in_grid)){
                    return false
                }
            }
        }
        return true
    }

    //check if a unit as a duplicate
    containsDuplicate(unit){
        let nums = unit.filter(num => num !== '.')
        return nums.length !== new Set(nums).size
    }
}