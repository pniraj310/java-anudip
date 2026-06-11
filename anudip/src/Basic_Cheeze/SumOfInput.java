package Basic_Cheeze;

import java.util.Scanner;

public class SumOfInput {
    static void main(String[] args) {
        Scanner niraj = new Scanner(System.in);
        System.out.print("Enter the First Number: ");
        double n1 = niraj.nextInt();
        System.out.print("Enter the Second Number:");
        double n2 = niraj.nextInt();
        double sum;
        sum = n1 + n2;
        System.out.print("The Sum is : " + sum);


    }
}
