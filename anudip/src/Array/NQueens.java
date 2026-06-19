package Array;
import java.util.*;


public class NQueens {

    public static List<List<String>> solveNQueens(int n) {

        List<List<String>> result = new ArrayList<>();

        char[][] board = new char[n][n];

        for (int i = 0; i < n; i++) {
            Arrays.fill(board[i], '.');
        }

        solve(board, 0, result);

        return result;
    }

    private static void solve(char[][] board, int row,
                              List<List<String>> result) {

        if (row == board.length) {
            result.add(construct(board));
            return;
        }

        for (int col = 0; col < board.length; col++) {

            if (isSafe(board, row, col)) {

                board[row][col] = 'Q';

                solve(board, row + 1, result);

                board[row][col] = '.';
            }
        }
    }

    private static boolean isSafe(char[][] board,
                                  int row, int col) {

        for (int i = 0; i < row; i++) {
            if (board[i][col] == 'Q')
                return false;
        }

        for (int i = row - 1, j = col - 1;
             i >= 0 && j >= 0; i--, j--) {

            if (board[i][j] == 'Q')
                return false;
        }

        for (int i = row - 1, j = col + 1;
             i >= 0 && j < board.length; i--, j++) {

            if (board[i][j] == 'Q')
                return false;
        }

        return true;
    }

    private static List<String> construct(char[][] board) {

        List<String> result = new ArrayList<>();

        for (char[] row : board) {
            result.add(new String(row));
        }

        return result;
    }

    public static void main(String[] args) {

        int n = 4;

        List<List<String>> solutions = solveNQueens(n);

        System.out.println("Solutions:");

        for (List<String> solution : solutions) {
            System.out.println(solution);
        }
    }
}