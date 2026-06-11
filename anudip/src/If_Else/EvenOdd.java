package If_Else;

import java.util.Scanner;

public class EvenOdd {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number to check : ");
        int n = sc.nextInt();

        if(n%2 == 0)
        {
            System.out.println("The Given Number Is Even");
        }
        else
        {
            System.out.println("The Given Number Is Not Even");
        }
    }
}
