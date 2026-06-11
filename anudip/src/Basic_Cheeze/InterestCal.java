package Basic_Cheeze;

import java.util.Scanner;

public class InterestCal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the Principal Amount: ");
        double p = sc.nextInt();

        System.out.print("Enter the Principal rate Amount: ");
        double r = sc.nextInt();

        System.out.print("Enter the time period: ");
        double t = sc.nextInt();

        double interest;

        interest = (p * r * t) / 100;

        System.out.print("The Interest rate is : " + interest);


    }

    }

