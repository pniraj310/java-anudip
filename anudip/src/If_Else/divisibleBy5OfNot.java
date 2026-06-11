package If_Else;

import java.util.Scanner;

public class divisibleBy5OfNot {
    static void main() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number to check whether is it divisibl by 5 or not : ");
        int n = sc.nextInt();

        if(n%5 == 0)
        {
            System.out.println("The Given Number Is Divisible By 5 ");
        }
        else
        {
            System.out.println("The Given Number Is Not Divisibl3e By 5 ");
        }
    }
}
