class Solution:
    def isValidSudoku(self, board):
        if not self.isValidColumn(board):
            return False
        
        if not self.isValidRow(board):
            return False
        
        if not self.validGrids(board):
            return False
        
        return True

    def isValidRow(self, board):
        for num in board:
            if self.isDuplicate(num):
                return False
        return True
    
    def isValidColumn(self, board):
        for i in range(9):
            column = []
            for j in range(9):
                column.append(board[j][i])
            
            if self.isDuplicate(column):
                return False
        return True

    def validGrids(self, board):
        for i in range(0, 9, 3):
            for j in range(0, 9, 3):
                nums_in_grid =[
                   board[0 + i][0 + j], board[0 + i][1 + j], board[0 + i][2 + j],
                   board[1 + i][0 + j], board[1 + i][1 + j], board[1 + i][2 + j],
                   board[2 + i][0 + j], board[2 + i][1 + j], board[2 + i][2 + j]
                ]
                if self.isDuplicate(nums_in_grid):
                    return False
        return True

    @staticmethod
    def isDuplicate(unit):
        nums = [num for num in unit if num != '.']
        return len(nums) != len(set(nums))
    