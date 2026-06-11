package If_Else;

import java.util.Scanner;

public class IntOrNot {
    static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        double n = sc.nextDouble();
        int x = (int)n;

        if (n-x > 0)
            System.out.println(n+ " It is not an Integer");
        else
            System.out.println(n +"It is an Integer ");
    }
}
